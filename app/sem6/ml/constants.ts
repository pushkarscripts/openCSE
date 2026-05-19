export type SubTopic = 
  | { id: string; title: string; isPage: true }
  | { id: string; title: string; isPage?: false };

export type Chapter = {
  id: string;
  title: string;
  subTopics?: SubTopic[];
};

export const chapters: Chapter[] = [
  { id: "ch0", title: "Course Outline" },
  { id: "ch1", title: "Introduction to Machine Learning" },
  {
    id: "ch2",
    title: "Supervised Learning: Regression",
    subTopics: [
      { id: "ch2-data-preprocessing", title: "Data Pre-processing", isPage: true },
      { id: "ch2-dimensionality-reduction", title: "Dimensionality Reduction", isPage: true },
      { id: "ch2-pca-deep-dive", title: "PCA: Deep Dive", isPage: true },
      { id: "ch2-advanced-dim-reduction", title: "Advanced Dim Reduction (LDA, t-SNE)", isPage: true },
      { id: "ch2-feature-selection", title: "Feature Selection", isPage: true },
      { id: "ch2-regression-models", title: "Regression Models", isPage: true },
      { id: "ch2-regression-evaluation", title: "Model Evaluation Metrics", isPage: true },
      { id: "ch2-multicollinearity", title: "Multicollinearity & VIF", isPage: true },
    ],
  },
  {
    id: "ch3",
    title: "Supervised Learning: Classification",
    subTopics: [
      { id: "ch3-intro", title: "Introduction to Classification", isPage: true },
      { id: "ch3-logistic-regression", title: "Logistic Regression", isPage: true },
      { id: "ch3-knn", title: "K-Nearest Neighbour (KNN)", isPage: true },
      { id: "ch3-naive-bayes", title: "Naive Bayes", isPage: true },
      { id: "ch3-decision-trees", title: "Decision Trees", isPage: true },
      { id: "ch3-svm", title: "Support Vector Machine (SVM)", isPage: true },
      { id: "ch3-recommendation-systems", title: "Recommendation Systems", isPage: true },
    ],
  },
];
