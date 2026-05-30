
import { Discussion } from "./types";
import DiscussionCard from "./DiscussionCard";

interface DiscussionListProps {
  discussions: Discussion[];
  onUpvote: (id: string) => void;
  onReply: (discussionId: string, content: string) => void;
  onUpvoteReply: (discussionId: string, replyId: string) => void;
  onMarkSolution: (discussionId: string, replyId: string) => void;
}

export default function DiscussionList({
  discussions,
  onUpvote,
  onReply,
  onUpvoteReply,
  onMarkSolution,
}: DiscussionListProps) {
  if (discussions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No discussions yet. Be the first to start one!</p>
      </div>
    );
  }

  return (
    <div>
      {discussions.map((discussion) => (
        <DiscussionCard
          key={discussion.id}
          discussion={discussion}
          onUpvote={onUpvote}
          onReply={onReply}
          onUpvoteReply={onUpvoteReply}
          onMarkSolution={onMarkSolution}
        />
      ))}
    </div>
  );
}

