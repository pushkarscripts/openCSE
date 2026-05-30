
"use client";
import { useState } from "react";
import { Reply, Discussion } from "./types";
import { Send, ThumbsUp, CheckCircle2 } from "lucide-react";

interface ReplySectionProps {
  discussion: Discussion;
  onReply: (discussionId: string, content: string) => void;
  onUpvoteReply: (discussionId: string, replyId: string) => void;
  onMarkSolution: (discussionId: string, replyId: string) => void;
}

export default function ReplySection({
  discussion,
  onReply,
  onUpvoteReply,
  onMarkSolution,
}: ReplySectionProps) {
  const [replyContent, setReplyContent] = useState("");

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (replyContent.trim()) {
      onReply(discussion.id, replyContent.trim());
      setReplyContent("");
    }
  };

  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <h4 className="text-lg font-semibold text-[#1B0D00] mb-4">
        {discussion.replies.length} {discussion.replies.length === 1 ? "Reply" : "Replies"}
      </h4>

      <div className="space-y-4 mb-6">
        {discussion.replies.map((reply) => (
          <div
            key={reply.id}
            className={`p-4 rounded-lg border ${
              reply.isSolution
                ? "bg-green-50 border-green-300"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            {reply.isSolution && (
              <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                <CheckCircle2 size={18} />
                <span>Marked as Solution</span>
              </div>
            )}
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium text-[#1B0D00]">{reply.author}</div>
              <div className="text-sm text-gray-500">
                {reply.createdAt.toLocaleDateString()}
              </div>
            </div>
            <p className="text-gray-700 mb-3">{reply.content}</p>
            <div className="flex gap-4">
              <button
                onClick={() => onUpvoteReply(discussion.id, reply.id)}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#d2b48c] transition-colors"
              >
                <ThumbsUp size={16} />
                {reply.upvotes}
              </button>
              {!reply.isSolution && !discussion.isSolved && (
                <button
                  onClick={() => onMarkSolution(discussion.id, reply.id)}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  <CheckCircle2 size={16} />
                  Mark as Solution
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmitReply} className="flex gap-3">
        <textarea
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write a reply..."
          rows={2}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2b48c] focus:border-transparent resize-none"
        />
        <button
          type="submit"
          className="self-end bg-[#d2b48c] text-[#1B0D00] px-4 py-2 rounded-lg hover:bg-[#c1a37b] transition-colors font-medium flex items-center gap-2"
        >
          <Send size={18} />
          Reply
        </button>
      </form>
    </div>
  );
}

