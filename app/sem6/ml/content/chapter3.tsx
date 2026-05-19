import Link from "next/link";
import { ArrowBigRight } from "lucide-react";
import { chapters } from "../constants";

export const Chapter3Content = () => {
  const chapter3 = chapters.find((c) => c.id === "ch3");

  if (!chapter3) return null;

  return (
    <div className="course-content">
      <h2 className="section-heading">Supervised Learning: Classification</h2>
      <p className="p-text">
        This unit focuses on classification, a type of supervised learning where the goal is to predict categorical class labels. We will cover a range of algorithms from Logistic Regression and KNN to Support Vector Machines and Recommendation Systems.
      </p>

      <div className="mt-8 space-y-4">
        <h3 className="font-bold text-xl text-[#fccc7e] mb-4">Unit Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapter3.subTopics?.filter((s) => s.isPage).map((subtopic) => (
            <Link
              key={subtopic.id}
              href={`/sem6/ml/${subtopic.id}`}
              className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-between group"
            >
              <span className="text-[#fdf5e6]">{subtopic.title}</span>
              <ArrowBigRight className="w-5 h-5 text-[#c7a669] group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
