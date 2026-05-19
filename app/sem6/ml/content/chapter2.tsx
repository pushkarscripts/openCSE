import Link from "next/link";
import { chapters } from "../constants";

export const Ch2Content = () => {
  // Find ch2 data to get the subtopics for rendering links
  const ch2 = chapters.find(c => c.id === "ch2");

  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Supervised Learning — Regression</span> covers the essential steps of preparing data and applying regression models to predict continuous numerical values. 
      </p>
      
      <p className="p-text mt-4">
        Because this unit contains dense and complex concepts, we have separated the topics into their own detailed study pages. Please use the sidebar navigation or the links below to dive into each topic.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {ch2?.subTopics?.map(sub => (
          <Link 
            key={sub.id} 
            href={`/sem6/ml/${sub.id}`}
            className="block p-5 bg-[#e6d0a7] hover:bg-[#d9bc8c] border-2 border-[#c7a669] rounded-lg transition-colors group shadow-sm text-[#1B0D00]"
          >
            <h4 className="font-bold text-lg mb-1 group-hover:underline">{sub.title}</h4>
            <p className="text-sm opacity-80">Click to study this topic in detail →</p>
          </Link>
        ))}
      </div>

    </div>
  );
};
