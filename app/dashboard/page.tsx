"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { 
  loadProgressData,
  saveProgressData,
  getLevelProgress,
  getWeeklyStudyDuration,
  getMonthlyStudyDurationMinutes,
  toggleChapterCompletion,
  SUBJECTS_METADATA,
  BADGES,
  ProgressState
} from "@/lib/progressTracker";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Play, 
  CheckCircle,
  ExternalLink,
  RotateCcw
} from "lucide-react";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [progressState, setProgressState] = useState<ProgressState | null>(null);
  const [levelInfo, setLevelInfo] = useState({ xp: 0, nextLevelXp: 150, level: 1, rank: "CSE Novice" });
  const [weeklyStats, setWeeklyStats] = useState<{ [dayName: string]: number }>({});
  const [monthlyMinutes, setMonthlyMinutes] = useState(0);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  // Load progress data after client-side hydration completes
  useEffect(() => {
    setMounted(true);
    refreshData();
  }, []);

  const refreshData = () => {
    const data = loadProgressData();
    setProgressState(data);
    setLevelInfo(getLevelProgress());
    setWeeklyStats(getWeeklyStudyDuration());
    setMonthlyMinutes(getMonthlyStudyDurationMinutes());
  };

  const handleToggleChapter = (subCode: string, chId: string) => {
    toggleChapterCompletion(subCode, chId);
    refreshData();
  };

  const resetAllProgress = () => {
    if (confirm("⚠️ Are you sure you want to reset all your study progress, learning time, and badges? This cannot be undone.")) {
      const freshState = {
        completedChapters: {},
        timeLogs: {},
        subjectTimeLogs: {},
        recentlyOpened: [],
        lastActive: null,
        completedQuizzes: {},
        unlockedBadges: [],
      };
      localStorage.setItem("opencse_progress_v1", JSON.stringify(freshState));
      refreshData();
    }
  };

  if (!mounted || !progressState) {
    return (
      <div className="min-h-screen bg-[#1B0D00] text-[#FAE8D7] pt-24 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-[#C7A669] border-t-transparent rounded-full animate-spin"></div>
          <span className="font-semibold text-lg text-[#C7A669]">Loading your progress...</span>
        </div>
      </div>
    );
  }

  // Calculate totals
  const totalStudySeconds = Object.values(progressState.timeLogs).reduce((acc, curr) => acc + curr, 0);
  const totalHours = (totalStudySeconds / 3600).toFixed(1);
  
  let totalChaptersCompleted = 0;
  Object.keys(progressState.completedChapters).forEach((sub) => {
    const chs = progressState.completedChapters[sub] || {};
    totalChaptersCompleted += Object.values(chs).filter(Boolean).length;
  });

  const subjects = Object.values(SUBJECTS_METADATA);
  
  // Calculate total available subjects completed
  const completedSubjectsCount = subjects.filter((subj) => {
    const completedMap = progressState.completedChapters[subj.code] || {};
    return subj.chapters.every((ch) => completedMap[ch.id]);
  }).length;

  // Relative time formatter helper
  const getRelativeTime = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  // Find max value in weekly study times to scale SVG chart heights
  const weeklyVals = Object.values(weeklyStats);
  const maxWeeklyMin = Math.max(...weeklyVals, 10); // fallback to 10 min scale

  return (
    <div className="min-h-screen bg-[#1B0D00] text-[#FAE8D7] pt-14 pb-16">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className={`${righteous.className} text-4xl sm:text-5xl font-bold tracking-tight text-[#FAE8D7]`}>
              STUDENT DASHBOARD
            </h1>
            <p className="text-sm sm:text-base text-[#dcd2b8] mt-1">
              Track your college learning stats, manage subjects, and unlock badges.
            </p>
          </div>
          
          <button
            onClick={resetAllProgress}
            className="self-start md:self-auto flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg
                       border border-red-500/30 text-red-400 bg-red-950/10 hover:bg-red-950/30 hover:text-red-300 transition cursor-pointer"
          >
            <RotateCcw size={14} />
            Reset Progress
          </button>
        </div>

        {/* 1. LEVEL & EXPERIENCE CARD (Hero Banner) */}
        <div className="w-full rounded-3xl border border-[#C7A669]/40 bg-[#28180A]/60 p-6 md:p-8 shadow-2xl backdrop-blur-sm mb-8 flex flex-col lg:flex-row items-center gap-8">
          
          {/* Avatar and Level Circle */}
          <div className="flex flex-col items-center shrink-0">
            <div className="relative w-28 h-28 rounded-full border-4 border-[#C7A669] flex items-center justify-center bg-[#1B0D00] shadow-[0_0_20px_rgba(199,166,105,0.25)]">
              <span className={`${righteous.className} text-4xl font-extrabold text-[#C7A669]`}>
                {levelInfo.level}
              </span>
              <div className="absolute -bottom-2 px-3 py-0.5 rounded-full bg-[#C7A669] text-[#1B0D00] text-[10px] font-bold uppercase tracking-wider">
                Level
              </div>
            </div>
            <span className="text-lg font-bold mt-4 text-[#C7A669] text-center">
              {levelInfo.rank}
            </span>
          </div>

          {/* XP Bar and Level Details */}
          <div className="flex-1 w-full">
            <div className="flex justify-between items-end mb-2">
              <div>
                <h3 className="text-xl font-bold text-white">Academic Status</h3>
                <p className="text-xs text-white/50">Level up by completing chapters, studying, and completing quizzes.</p>
              </div>
              <span className="text-xs font-mono text-[#C7A669] font-bold">
                {levelInfo.xp} / {levelInfo.nextLevelXp} XP
              </span>
            </div>
            
            {/* ProgressBar */}
            <div className="w-full h-4 bg-[#1B0D00] border border-[#C7A669]/20 rounded-full overflow-hidden p-0.5 shadow-inner">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#C7A669] to-[#ebd39e] shadow-[0_0_10px_rgba(235,211,158,0.5)] transition-all duration-700 ease-out"
                style={{ width: `${(levelInfo.xp / levelInfo.nextLevelXp) * 100}%` }}
              />
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 text-center">
              <div className="bg-[#1B0D00]/50 border border-[#C7A669]/10 rounded-2xl p-3">
                <span className="block text-2xl font-bold text-white font-mono">{totalHours}h</span>
                <span className="text-[10px] text-white/60 uppercase font-bold tracking-wider">Study Time</span>
              </div>
              <div className="bg-[#1B0D00]/50 border border-[#C7A669]/10 rounded-2xl p-3">
                <span className="block text-2xl font-bold text-white font-mono">{totalChaptersCompleted}</span>
                <span className="text-[10px] text-white/60 uppercase font-bold tracking-wider">Chapters Done</span>
              </div>
              <div className="bg-[#1B0D00]/50 border border-[#C7A669]/10 rounded-2xl p-3">
                <span className="block text-2xl font-bold text-white font-mono">{completedSubjectsCount} / 12</span>
                <span className="text-[10px] text-white/60 uppercase font-bold tracking-wider">Subjects Mastered</span>
              </div>
            </div>
          </div>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT COLUMN: Study Time Chart & Subject Progress (Span 2) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 2. WEEKLY STUDY TIME CHART */}
            <div className="rounded-3xl border border-[#C7A669]/30 bg-[#28180A]/40 p-6 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="text-[#C7A669]" size={20} />
                  Weekly Activity log
                </h2>
                <div className="text-right">
                  <span className="text-xs text-white/50 block">This Month</span>
                  <span className="text-lg font-bold text-[#C7A669] font-mono">{monthlyMinutes} mins</span>
                </div>
              </div>

              {/* Custom SVG Bar Chart */}
              <div className="w-full h-44 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="25" x2="500" y2="25" stroke="rgba(199, 166, 105, 0.08)" strokeDasharray="4 4" />
                  <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(199, 166, 105, 0.08)" strokeDasharray="4 4" />
                  <line x1="0" y1="125" x2="500" y2="125" stroke="rgba(199, 166, 105, 0.08)" strokeDasharray="4 4" />

                  {/* Render 7 bars for Mon-Sun */}
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => {
                    const min = weeklyStats[day] || 0;
                    const pct = min / maxWeeklyMin;
                    const barHeight = Math.max(pct * 110, 4); // minimum 4px height if studied
                    const x = 30 + idx * 65;
                    const y = 130 - barHeight;

                    return (
                      <g key={day} className="group cursor-pointer">
                        {/* Bar Gradient Definition inside svg or inline styles */}
                        <rect
                          x={x}
                          y={y}
                          width="32"
                          height={barHeight}
                          rx="6"
                          fill="url(#barGradient)"
                          className="transition-all duration-300 hover:opacity-80"
                        />
                        {/* Tooltip on hover */}
                        <text 
                          x={x + 16} 
                          y={y - 8} 
                          fill="#FAE8D7" 
                          fontSize="9" 
                          fontWeight="bold" 
                          textAnchor="middle" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                          {min}m
                        </text>
                      </g>
                    );
                  })}
                  
                  {/* Gradients definitions */}
                  <defs>
                    <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ebd39e" />
                      <stop offset="100%" stopColor="#C7A669" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Chart Labels */}
              <div className="flex justify-between px-[28px] mt-2 border-t border-[#C7A669]/10 pt-2 text-xs font-semibold text-white/50">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <span key={day} className="w-[32px] text-center font-mono">
                    {day}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. SUBJECT-WISE & TOPIC-WISE PROGRESS */}
            <div className="rounded-3xl border border-[#C7A669]/30 bg-[#28180A]/40 p-6 shadow-xl backdrop-blur-sm">
              <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <BookOpen className="text-[#C7A669]" size={20} />
                Subject Progress
              </h2>

              <div className="space-y-4">
                {subjects.map((subj) => {
                  const completedMap = progressState.completedChapters[subj.code] || {};
                  const compCount = subj.chapters.filter((ch) => completedMap[ch.id]).length;
                  const totCount = subj.chapters.length;
                  const progressPct = totCount > 0 ? Math.round((compCount / totCount) * 100) : 0;
                  
                  const isExpanded = expandedSubject === subj.code;
                  
                  return (
                    <div 
                      key={subj.code}
                      className="border border-[#C7A669]/20 rounded-2xl bg-[#1B0D00]/40 overflow-hidden transition-all duration-300"
                    >
                      {/* Subject Header */}
                      <button
                        onClick={() => setExpandedSubject(isExpanded ? null : subj.code)}
                        className="w-full flex items-center justify-between p-4 hover:bg-[#d2b48c]/5 transition cursor-pointer text-left"
                      >
                        <div className="flex-1 min-w-0 pr-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-[#C7A669] uppercase tracking-wider bg-[#d2b48c]/10 px-2 py-0.5 rounded">
                              {subj.semester}
                            </span>
                            <span className="text-xs text-white/40">
                              {totCount} topics
                            </span>
                          </div>
                          <h3 className="text-base font-bold mt-1 text-white truncate">{subj.name}</h3>
                          
                          {/* Mini Progress Bar */}
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-[#C7A669] rounded-full"
                                style={{ width: `${progressPct}%` }}
                              />
                            </div>
                            <span className="text-xs font-mono font-bold text-[#C7A669] shrink-0">
                              {progressPct}%
                            </span>
                          </div>
                        </div>

                        <div className="text-white/40 hover:text-white shrink-0 p-1">
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>

                      {/* Expandable Chapters List */}
                      {isExpanded && (
                        <div className="border-t border-[#C7A669]/10 bg-[#1B0D00]/80 p-4">
                          <h4 className="text-xs uppercase font-bold text-white/40 tracking-wider mb-3">Topic Checklist</h4>
                          <div className="space-y-2">
                            {subj.chapters.map((ch) => {
                              const done = !!completedMap[ch.id];
                              const semCode = subj.semester.toLowerCase().replace("semester-", "sem");
                              const topicLink = `/${semCode}/${subj.code}/${ch.id}`;
                              
                              return (
                                <div 
                                  key={ch.id}
                                  className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-white/5 transition group"
                                >
                                  {/* Completion Checkbox */}
                                  <button
                                    type="button"
                                    onClick={() => handleToggleChapter(subj.code, ch.id)}
                                    className="flex items-center gap-3 text-left flex-1 min-w-0 cursor-pointer"
                                  >
                                    <div className={done ? "text-[#C8E6C9] shrink-0" : "text-white/30 shrink-0"}>
                                      {done ? <CheckCircle size={18} /> : <div className="w-[18px] h-[18px] border-2 border-white/30 rounded-full" />}
                                    </div>
                                    <span className={`text-sm truncate ${done ? "line-through text-white/50" : "text-[#FAE8D7]"}`}>
                                      {ch.title}
                                    </span>
                                  </button>

                                  {/* Direct Reading Link */}
                                  <Link 
                                    href={topicLink}
                                    className="text-[#C7A669] opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-[#ebd39e] p-1.5 transition shrink-0"
                                    title="Open documentation page"
                                  >
                                    <ExternalLink size={14} />
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Quick Resume, Recent timeline, Badges (Span 1) */}
          <div className="space-y-8">
            
            {/* 4. QUICK RESUME */}
            {progressState.lastActive && (
              <div className="rounded-3xl border border-[#C7A669] bg-gradient-to-br from-[#28180A]/80 to-[#1B0D00] p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#C7A669]/5 rounded-full blur-2xl"></div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#C7A669] bg-[#C7A669]/10 px-2.5 py-0.5 rounded-full inline-block">
                  Quick Resume
                </span>
                
                {/* Parse page components details */}
                {(() => {
                  const parts = progressState.lastActive.split("/").filter(Boolean);
                  const subCode = parts[1];
                  const chId = parts[2];
                  const subMeta = SUBJECTS_METADATA[subCode];
                  const chTitle = subMeta?.chapters.find(c => c.id === chId)?.title || chId;
                  
                  return (
                    <div className="mt-4">
                      <span className="text-xs text-white/50 block font-bold uppercase">{subMeta?.name || "Learning"}</span>
                      <h3 className="text-lg font-bold text-white mt-1 leading-snug truncate" title={chTitle}>
                        {chTitle}
                      </h3>
                      
                      <Link 
                        href={progressState.lastActive}
                        className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-[#C7A669] hover:bg-[#ebd39e] text-[#1B0D00] font-bold text-sm py-3 transition hover:scale-[102%] shadow-lg shadow-[#C7A669]/15"
                      >
                        <Play size={14} fill="currentColor" />
                        Resume Studying
                      </Link>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 5. PREVIOUSLY OPENED FILES / RESOURCES */}
            <div className="rounded-3xl border border-[#C7A669]/30 bg-[#28180A]/40 p-6 shadow-xl backdrop-blur-sm">
              <h2 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                <Clock className="text-[#C7A669]" size={18} />
                Recent History
              </h2>

              {progressState.recentlyOpened.length === 0 ? (
                <p className="text-xs text-white/40 italic text-center py-4">No open files logged. Start reading to see your history!</p>
              ) : (
                <div className="space-y-3.5 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#C7A669]/10">
                  {progressState.recentlyOpened.map((item, idx) => (
                    <div key={idx} className="flex gap-3 relative group">
                      {/* Timeline Dot */}
                      <div className="w-9 h-9 shrink-0 rounded-full border border-[#C7A669]/20 bg-[#1B0D00] flex items-center justify-center z-10 text-[10px] text-[#C7A669] font-bold">
                        {idx + 1}
                      </div>
                      
                      {/* Log details */}
                      <div className="flex-1 min-w-0 pt-0.5">
                        <Link 
                          href={item.pathname}
                          className="block text-xs font-bold text-[#FAE8D7] hover:text-[#C7A669] transition truncate leading-tight pr-4"
                          title={item.chapterTitle}
                        >
                          {item.chapterTitle}
                        </Link>
                        <div className="flex justify-between items-center text-[10px] text-white/40 mt-1">
                          <span className="truncate max-w-[120px]">{item.subjectTitle}</span>
                          <span className="shrink-0">{getRelativeTime(item.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 6. EARNED REWARDS AND BADGES */}
            <div className="rounded-3xl border border-[#C7A669]/30 bg-[#28180A]/40 p-6 shadow-xl backdrop-blur-sm">
              <h2 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                <Award className="text-[#C7A669]" size={18} />
                Achievements
              </h2>

              {/* Badges Grid */}
              <div className="grid grid-cols-3 gap-3">
                {BADGES.map((badge) => {
                  const unlocked = progressState.unlockedBadges.includes(badge.id);
                  
                  return (
                    <div 
                      key={badge.id}
                      className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 group ${
                        unlocked 
                          ? "bg-[#d2b48c]/10 border-[#C7A669] shadow-[0_4px_12px_rgba(199,166,105,0.15)] hover:scale-105" 
                          : "bg-white/5 border-white/5 opacity-40"
                      }`}
                    >
                      {/* Badge Icon */}
                      <span className="text-3xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{badge.icon}</span>
                      
                      {/* Tooltip detailing description */}
                      <div 
                        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 rounded-xl bg-[#1B0D00]/95 border border-[#C7A669]/80 p-2.5 text-center text-xs shadow-2xl z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ fontFamily: "Rockwell, serif" }}
                      >
                        <p className="font-bold text-[#C7A669]">{badge.title}</p>
                        <p className="text-[10px] text-white/70 mt-1 leading-normal">{badge.description}</p>
                        <p className={`text-[9px] font-bold mt-1.5 ${unlocked ? "text-green-400" : "text-white/40"}`}>
                          {unlocked ? "✓ Unlocked" : "🔒 Locked"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
