"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Circle, LayoutDashboard, ChevronRight, ChevronLeft, Award } from "lucide-react";
import {
  recordVisit,
  recordStudyTime,
  isChapterCompleted,
  toggleChapterCompletion,
  SUBJECTS_METADATA,
  loadProgressData,
  getLevelProgress
} from "@/lib/progressTracker";

export default function UserTracker() {
  const pathname = usePathname();
  const [isStudyPage, setIsStudyPage] = useState(false);
  const [subjectCode, setSubjectCode] = useState("");
  const [chapterId, setChapterId] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [subjectProgress, setSubjectProgress] = useState({ completed: 0, total: 0, percentage: 0 });
  const [levelInfo, setLevelInfo] = useState({ level: 1, rank: "CSE Novice" });
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  const activePageRef = useRef<string | null>(null);
  const activeSubjectRef = useRef<string | null>(null);

  // 1. Pathname tracking and visit logging
  useEffect(() => {
    activePageRef.current = pathname;
    const parts = pathname.split("/").filter(Boolean);
    
    // Learning page format: /semX/subjectCode/chapterId
    if (parts.length >= 3 && parts[0].startsWith("sem")) {
      const sem = parts[0];
      const sub = parts[1];
      const ch = parts[2];
      
      const meta = SUBJECTS_METADATA[sub];
      if (meta) {
        setIsStudyPage(true);
        setSubjectCode(sub);
        setChapterId(ch);
        activeSubjectRef.current = sub;
        
        // Record the visit
        recordVisit(pathname);
        
        // Load initial states
        setIsCompleted(isChapterCompleted(sub, ch));
        calculateProgress(sub);
        updateLevel();
        return;
      }
    }
    
    setIsStudyPage(false);
    setSubjectCode("");
    setChapterId("");
    activeSubjectRef.current = null;
  }, [pathname]);

  // Helper to calculate progress for floating widget
  const calculateProgress = (sub: string) => {
    const meta = SUBJECTS_METADATA[sub];
    if (!meta) return;

    const data = loadProgressData();
    const completedMap = data.completedChapters[sub] || {};
    const completedCount = meta.chapters.filter((ch) => completedMap[ch.id]).length;
    const totalCount = meta.chapters.length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    
    setSubjectProgress({
      completed: completedCount,
      total: totalCount,
      percentage
    });
  };

  const updateLevel = () => {
    setLevelInfo(getLevelProgress());
  };

  // 2. Heartbeat timer for active time tracking
  useEffect(() => {
    const interval = setInterval(() => {
      // Only log time if tab is focused, and user is on a study page
      if (
        typeof document !== "undefined" &&
        document.visibilityState === "visible" &&
        activeSubjectRef.current &&
        isStudyPage
      ) {
        // Log 5 seconds of active study
        recordStudyTime(5, activeSubjectRef.current);
        
        // Periodically refresh level info to show level up notifications
        const prevLevel = levelInfo.level;
        const freshLevel = getLevelProgress();
        if (freshLevel.level > prevLevel) {
          triggerNotification(`🎉 Level Up! You are now Level ${freshLevel.level} (${freshLevel.rank})`);
        }
        setLevelInfo(freshLevel);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isStudyPage, levelInfo.level]);

  // 3. Notification system
  const triggerNotification = (msg: string) => {
    setNotificationMsg(msg);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4500);
  };

  const handleToggleComplete = () => {
    if (!subjectCode || !chapterId) return;
    
    const nextState = toggleChapterCompletion(subjectCode, chapterId);
    setIsCompleted(nextState);
    calculateProgress(subjectCode);
    updateLevel();

    if (nextState) {
      triggerNotification("🌟 Chapter completed! (+50 XP)");
    } else {
      triggerNotification("Chapter marked as in-progress.");
    }
  };

  if (!isStudyPage) return null;

  const subjectMeta = SUBJECTS_METADATA[subjectCode];
  if (!subjectMeta) return null;

  const chapterTitle = subjectMeta.chapters.find((ch) => ch.id === chapterId)?.title || chapterId;

  return (
    <>
      {/* Floating Notifications */}
      {showNotification && (
        <div 
          className="fixed top-18 right-6 z-[99999] flex items-center gap-3 px-6 py-4 rounded-2xl
                     bg-[#1B0D00]/95 border border-[#C7A669] text-[#FAE8D7] shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                     transform animate-bounce transition-all duration-300 pointer-events-none"
          style={{ fontFamily: "Rockwell, serif" }}
        >
          <Award className="text-[#C7A669] animate-pulse" size={24} />
          <span className="font-semibold text-base">{notificationMsg}</span>
        </div>
      )}

      {/* Floating Study Assistant Widget */}
      <div 
        className={`fixed bottom-6 left-6 z-[99999] flex items-stretch rounded-2xl border border-[#C7A669]/50
                   bg-[#1B0D00]/90 text-[#FAE8D7] shadow-[0_12px_40px_rgba(0,0,0,0.4)]
                   backdrop-blur-md transition-all duration-300 ${
                     isExpanded ? "w-72 sm:w-80" : "w-12"
                   }`}
        style={{ fontFamily: "Rockwell, serif", height: "135px" }}
      >
        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 flex items-center justify-center border-r border-[#C7A669]/20 hover:bg-[#d2b48c]/10 text-[#C7A669] transition rounded-l-2xl cursor-pointer"
          title={isExpanded ? "Collapse Tracker" : "Expand Study Assistant"}
        >
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {/* Content (only visible when expanded) */}
        {isExpanded && (
          <div className="flex-1 p-4 flex flex-col justify-between overflow-hidden">
            {/* Title Details */}
            <div>
              <div className="flex justify-between items-start gap-1">
                <span className="text-[10px] tracking-wider text-[#C7A669] uppercase font-bold truncate">
                  {subjectMeta.name}
                </span>
                <span className="text-[10px] text-white/50 shrink-0">
                  Lvl {levelInfo.level}
                </span>
              </div>
              <h4 className="text-sm font-semibold truncate mt-0.5" title={chapterTitle}>
                {chapterTitle}
              </h4>
            </div>

            {/* Subject Progress Bar */}
            <div className="mt-1">
              <div className="flex justify-between text-[10px] text-white/60 mb-0.5">
                <span>Course Progress</span>
                <span>{subjectProgress.percentage}% ({subjectProgress.completed}/{subjectProgress.total})</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#C7A669] transition-all duration-500"
                  style={{ width: `${subjectProgress.percentage}%` }}
                />
              </div>
            </div>

            {/* Actions: Complete/In Progress & Dashboard shortcut */}
            <div className="flex items-center justify-between border-t border-[#C7A669]/10 pt-2 mt-2">
              <button
                type="button"
                onClick={handleToggleComplete}
                className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition duration-200 cursor-pointer ${
                  isCompleted 
                    ? "bg-[#C8E6C9] text-[#1B5E20] hover:bg-[#A5D6A7]" 
                    : "bg-[#FAE8D7] text-[#1B0D00] hover:bg-[#edd8be]"
                }`}
              >
                {isCompleted ? (
                  <>
                    <CheckCircle2 size={13} />
                    Completed
                  </>
                ) : (
                  <>
                    <Circle size={13} />
                    Mark Done
                  </>
                )}
              </button>

              <Link 
                href="/dashboard"
                className="flex items-center gap-1 text-[11px] text-[#C7A669] hover:underline"
                title="Open Progress Dashboard"
              >
                <LayoutDashboard size={13} />
                <span>Dashboard</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
