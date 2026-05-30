
"use client";
import { useState } from "react";
import { Send } from "lucide-react";

interface NewDiscussionFormProps {
  onSubmit: (title: string, content: string) => void;
}

export default function NewDiscussionForm({ onSubmit }: NewDiscussionFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit(title.trim(), content.trim());
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-200">
      <h3 className="text-xl font-bold text-[#1B0D00] mb-4">Start a New Discussion</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's your question or topic?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2b48c] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Provide more details about your discussion..."
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2b48c] focus:border-transparent resize-none"
          />
        </div>
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#1B0D00] text-white px-6 py-3 rounded-lg hover:bg-[#2a1500] transition-colors font-medium"
        >
          <Send size={20} />
          Post Discussion
        </button>
      </form>
    </div>
  );
}

