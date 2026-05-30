
"use client";
import { useState } from "react";
import { Discussion, Reply } from "@/app/components/discussions/types";
import NewDiscussionForm from "@/app/components/discussions/NewDiscussionForm";
import DiscussionList from "@/app/components/discussions/DiscussionList";
import { MessageSquare, TrendingUp, Clock } from "lucide-react";

const initialDiscussions: Discussion[] = [
  {
    id: "1",
    title: "How to implement recursion in C?",
    author: "Student123",
    content: "I'm having trouble understanding how recursion works. Can someone explain with a simple example?",
    createdAt: new Date(Date.now() - 86400000),
    replies: [
      {
        id: "r1",
        author: "CSExpert",
        content: "Recursion is when a function calls itself. Here's a simple factorial example...",
        createdAt: new Date(Date.now() - 72000000),
        upvotes: 5,
        isSolution: true,
      },
    ],
    isSolved: true,
    upvotes: 10,
  },
  {
    id: "2",
    title: "What's the difference between stack and queue?",
    author: "Learner456",
    content: "I'm confused about when to use a stack versus a queue. Any real-world examples?",
    createdAt: new Date(Date.now() - 172800000),
    replies: [],
    isSolved: false,
    upvotes: 7,
  },
];

export default function DiscussionsClient() {
  const [discussions, setDiscussions] = useState<Discussion[]>(initialDiscussions);

  const handleNewDiscussion = (title: string, content: string) => {
    const newDiscussion: Discussion = {
      id: Date.now().toString(),
      title,
      author: "You",
      content,
      createdAt: new Date(),
      replies: [],
      isSolved: false,
      upvotes: 0,
    };
    setDiscussions([newDiscussion, ...discussions]);
  };

  const handleUpvote = (id: string) => {
    setDiscussions(
      discussions.map((d) =>
        d.id === id ? { ...d, upvotes: d.upvotes + 1 } : d
      )
    );
  };

  const handleReply = (discussionId: string, content: string) => {
    const newReply: Reply = {
      id: Date.now().toString(),
      author: "You",
      content,
      createdAt: new Date(),
      upvotes: 0,
      isSolution: false,
    };
    setDiscussions(
      discussions.map((d) =>
        d.id === discussionId ? { ...d, replies: [...d.replies, newReply] } : d
      )
    );
  };

  const handleUpvoteReply = (discussionId: string, replyId: string) => {
    setDiscussions(
      discussions.map((d) =>
        d.id === discussionId
          ? {
              ...d,
              replies: d.replies.map((r) =>
                r.id === replyId ? { ...r, upvotes: r.upvotes + 1 } : r
              ),
            }
          : d
      )
    );
  };

  const handleMarkSolution = (discussionId: string, replyId: string) => {
    setDiscussions(
      discussions.map((d) =>
        d.id === discussionId
          ? {
              ...d,
              isSolved: true,
              replies: d.replies.map((r) =>
                r.id === replyId ? { ...r, isSolution: true } : r
              ),
            }
          : d
      )
    );
  };

  const totalDiscussions = discussions.length;
  const totalReplies = discussions.reduce((sum, d) => sum + d.replies.length, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1B0D00] mb-2">Discussions</h1>
          <p className="text-gray-600">Ask questions, share knowledge, and connect with the community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#d2b48c] rounded-lg">
                <MessageSquare size={24} className="text-[#1B0D00]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1B0D00]">{totalDiscussions}</div>
                <div className="text-sm text-gray-600">Discussions</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#d2b48c] rounded-lg">
                <TrendingUp size={24} className="text-[#1B0D00]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1B0D00]">{totalReplies}</div>
                <div className="text-sm text-gray-600">Replies</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#d2b48c] rounded-lg">
                <Clock size={24} className="text-[#1B0D00]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1B0D00]">Recent</div>
                <div className="text-sm text-gray-600">Activity</div>
              </div>
            </div>
          </div>
        </div>

        <NewDiscussionForm onSubmit={handleNewDiscussion} />

        <DiscussionList
          discussions={discussions}
          onUpvote={handleUpvote}
          onReply={handleReply}
          onUpvoteReply={handleUpvoteReply}
          onMarkSolution={handleMarkSolution}
        />
      </div>
    </div>
  );
}

