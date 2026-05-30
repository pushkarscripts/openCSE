
"use client";
import { useState } from "react";
import { Discussion } from "./types";
import ReplySection from "./ReplySection";
import { ThumbsUp, MessageSquare, Clock, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

interface DiscussionCardProps {
  discussion: Discussion;
  onUpvote: (id: string) => void;
  onReply: (discussionId: string, content: string) => void;
  onUpvoteReply: (discussionId: string, replyId: string) => void;
  onMarkSolution: (discussionId: string, replyId: string) => void;
}

export default function DiscussionCard({
  discussion,
  onUpvote,
  onReply,
  onUpvoteReply,
  onMarkSolution,
}: DiscussionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {discussion.isSolved && (
              <div className="flex items-center gap-1 text-green-600 font-medium">
                <CheckCircle2 size={18} />
                <span>Solved</span>
              </div>
            )}
            <h3 className="text-xl font-bold text-[#1B0D00]">{discussion.title}</h3>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <span className="font-medium text-[#1B0D00]">{discussion.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {discussion.createdAt.toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{discussion.content}</p>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => onUpvote(discussion.id)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#d2b48c] transition-colors"
        >
          <ThumbsUp size={18} />
          <span className="font-medium">{discussion.upvotes}</span>
        </button>
        <div className="flex items-center gap-2 text-gray-600">
          <MessageSquare size={18} />
          <span className="font-medium">{discussion.replies.length}</span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#d2b48c] transition-colors ml-auto"
        >
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          {isExpanded ? "Hide Replies" : "View Replies"}
        </button>
      </div>

      {isExpanded && (
        <ReplySection
          discussion={discussion}
          onReply={onReply}
          onUpvoteReply={onUpvoteReply}
          onMarkSolution={onMarkSolution}
        />
      )}
    </div>
  );
}

