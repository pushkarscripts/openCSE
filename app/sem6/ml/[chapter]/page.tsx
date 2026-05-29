import Link from "next/link";
import { Metadata } from 'next';
import { Righteous } from "next/font/google";
import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { DataPreprocessingContent } from "../content/data-preprocessing";
import { DimensionalityReductionContent } from "../content/dimensionality-reduction";
import { FeatureSelectionContent } from "../content/feature-selection";
import { RegressionModelsContent } from "../content/regression-models";
import { PCADeepDiveContent } from "../content/pca-deep-dive";
import { AdvancedDimReductionContent } from "../content/advanced-dim-reduction";
import { RegressionEvaluationContent } from "../content/regression-evaluation";
import { MulticollinearityContent } from "../content/multicollinearity";
import { Chapter3Content } from "../content/chapter3";
import { IntroClassificationContent } from "../content/intro-classification";
import { LogisticRegressionContent } from "../content/logistic-regression";
import { KnnContent } from "../content/knn";
import { NaiveBayesContent } from "../content/naive-bayes";
import { DecisionTreesContent } from "../content/decision-trees";
import { SvmContent } from "../content/svm";
import { RecommendationSystemsContent } from "../content/recommendation-systems";
import { Chapter4Content } from "../content/chapter4";
import { IntroUnsupervisedContent } from "../content/intro-unsupervised";
import { KMeansContent } from "../content/kmeans";
import { KMedoidsContent } from "../content/kmedoids";
import { HierarchicalContent } from "../content/hierarchical";
import { AprioriContent } from "../content/apriori";
import { AnomalyDetectionContent } from "../content/anomaly-detection";
import { Chapter5Content } from "../content/chapter5";
import { EnsembleLearningContent } from "../content/ensemble-learning";
import { ImageRecognitionContent } from "../content/image-recognition";
import { SpeechRecognitionContent } from "../content/speech-recognition";
import { PredictionRecommendationContent } from "../content/prediction-recommendation";
import { SpamMalwareContent } from "../content/spam-malware";
import { VirtualAssistantContent } from "../content/virtual-assistant";
import { FraudDetectionContent } from "../content/fraud-detection";
import { Chapter6Content } from "../content/chapter6";
import { DeepLearningContent } from "../content/deep-learning";
import { ReinforcementLearningContent } from "../content/reinforcement-learning";
import { NlpBasicsContent } from "../content/nlp-basics";
import { MlopsDeploymentContent } from "../content/mlops-deployment";
import { XaiEthicsContent } from "../content/xai-ethics";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { chapters, Chapter, SubTopic } from "../constants";
import { moduleQuizzes } from "@/lib/quizData";
import ChapterQuizInline from "../components/ChapterQuizInline";

function findChapterOrSubtopic(chapterId: string) {
  const chapter = chapters.find((c) => c.id === chapterId);
  if (chapter) return { data: chapter, isSubTopic: false, parentChapter: null };

  for (const ch of chapters) {
    if (ch.subTopics) {
      const sub = ch.subTopics.find((s) => s.id === chapterId && s.isPage) as (SubTopic & { isPage: true }) | undefined;
      if (sub) return { data: sub, isSubTopic: true, parentChapter: ch };
    }
  }
  return { data: undefined, isSubTopic: false, parentChapter: null };
}

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

// Map components to chapter IDs
const chapterComponents: Record<string, React.ComponentType> = {
  ch0: Ch0Content,
  ch1: Ch1Content,
  ch2: Ch2Content,
  "ch2-data-preprocessing": DataPreprocessingContent,
  "ch2-dimensionality-reduction": DimensionalityReductionContent,
  "ch2-feature-selection": FeatureSelectionContent,
  "ch2-regression-models": RegressionModelsContent,
  "ch2-pca-deep-dive": PCADeepDiveContent,
  "ch2-advanced-dim-reduction": AdvancedDimReductionContent,
  "ch2-regression-evaluation": RegressionEvaluationContent,
  "ch2-multicollinearity": MulticollinearityContent,
  "ch3": Chapter3Content,
  "ch3-intro": IntroClassificationContent,
  "ch3-logistic-regression": LogisticRegressionContent,
  "ch3-knn": KnnContent,
  "ch3-naive-bayes": NaiveBayesContent,
  "ch3-decision-trees": DecisionTreesContent,
  "ch3-svm": SvmContent,
  "ch3-recommendation-systems": RecommendationSystemsContent,
  "ch4": Chapter4Content,
  "ch4-intro": IntroUnsupervisedContent,
  "ch4-kmeans": KMeansContent,
  "ch4-kmedoids": KMedoidsContent,
  "ch4-hierarchical": HierarchicalContent,
  "ch4-apriori": AprioriContent,
  "ch4-anomaly-detection": AnomalyDetectionContent,
  "ch5": Chapter5Content,
  "ch5-ensemble": EnsembleLearningContent,
  "ch5-image-recognition": ImageRecognitionContent,
  "ch5-speech-recognition": SpeechRecognitionContent,
  "ch5-prediction-recommendation": PredictionRecommendationContent,
  "ch5-spam-malware": SpamMalwareContent,
  "ch5-virtual-assistant": VirtualAssistantContent,
  "ch5-fraud-detection": FraudDetectionContent,
  "ch6": Chapter6Content,
  "ch6-deep-learning": DeepLearningContent,
  "ch6-reinforcement": ReinforcementLearningContent,
  "ch6-nlp": NlpBasicsContent,
  "ch6-mlops": MlopsDeploymentContent,
  "ch6-xai": XaiEthicsContent,
};

type ChapterProps = {
  params: Promise<{ chapter: string }>;
};

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: ChapterProps): Promise<Metadata> {
  const { chapter: chapterId } = await params;
  const { data: chapterData } = findChapterOrSubtopic(chapterId);

  const title = chapterData 
    ? `${chapterData.title} | Machine Learning | openCSE`
    : "Machine Learning | openCSE";

  return { title };
}

export default async function ChapterPage({ params }: ChapterProps) {
  const { chapter: chapterId } = await params;
  
  const { data: chapterData, isSubTopic, parentChapter } = findChapterOrSubtopic(chapterId);

  if (!chapterData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-[#e2d1c1]">
        <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
        <Link 
          href="/sem6/ml/ch0"
          className="px-4 py-2 bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition font-bold"
        >
          Return to Course Outline
        </Link>
      </div>
    );
  }

  const ChapterComponent = chapterComponents[chapterData.id];
  let prevChapter = null;
  let nextChapter = null;

  // UX Fix: Better pagination linking siblings
  if (isSubTopic && parentChapter && parentChapter.subTopics) {
    const pageSubTopics = parentChapter.subTopics.filter((s): s is SubTopic & { isPage: true } => !!s.isPage);
    const subIndex = pageSubTopics.findIndex(s => s.id === chapterId);
    
    if (subIndex > 0) {
      prevChapter = pageSubTopics[subIndex - 1];
    } else {
      prevChapter = { id: parentChapter.id, title: `Back to ${parentChapter.title}` };
    }

    if (subIndex < pageSubTopics.length - 1) {
      nextChapter = pageSubTopics[subIndex + 1];
    } else {
      // Last subtopic -> link to next main chapter if available
      const parentIndex = chapters.findIndex(c => c.id === parentChapter.id);
      if (parentIndex < chapters.length - 1) {
        nextChapter = chapters[parentIndex + 1];
      }
    }
  } else {
    // Top-level chapter
    const currentIndex = chapters.findIndex((c) => c.id === chapterId);
    prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
    nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  }

  const chapterQuizSlugMap: Record<string, string> = {
    "ch1": "ml-intro",
    "ch2-data-preprocessing": "ml-data-preprocessing",
    "ch2-dimensionality-reduction": "ml-dimensionality-reduction",
    "ch2-pca-deep-dive": "ml-pca-deep-dive",
    "ch2-advanced-dim-reduction": "ml-advanced-dim-reduction",
    "ch2-feature-selection": "ml-feature-selection",
    "ch2-regression-models": "ml-regression-models",
    "ch2-regression-evaluation": "ml-regression-evaluation",
    "ch2-multicollinearity": "ml-multicollinearity",
  };
  const chapterQuiz = moduleQuizzes.find((quiz) => quiz.slug === chapterQuizSlugMap[chapterId]);

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-6 text-[#e2d1c1]">
      <div className="flex-1">
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          Machine Learning
        </h1>

        <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
          {isSubTopic && parentChapter ? `${parentChapter.title} / ${chapterData.title}` : chapterData.title}
        </p>

        {/* Navigation */}
        <div className="flex justify-between mt-3">
          {prevChapter ? (
            <Link
              href={`/sem6/ml/${prevChapter.id}`}
              className="px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              <ArrowBigLeft className="inline-block mr-1" /> Previous
            </Link>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <Link
              href={`/sem6/ml/${nextChapter.id}`}
              className="px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              Next <ArrowBigRight className="inline-block ml-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        <hr className="my-6 border-t-3" />
        <ChapterComponent />

        {chapterQuiz ? (
          <div className="mt-12">
            <ChapterQuizInline quiz={chapterQuiz} />
          </div>
        ) : null}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between my-8">
        {prevChapter ? (
          <Link
            href={`/sem6/ml/${prevChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            <ArrowBigLeft className="inline-block mr-1" /> {prevChapter.title}
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link
            href={`/sem6/ml/${nextChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            {nextChapter.title}{" "}
            <ArrowBigRight className="inline-block ml-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
