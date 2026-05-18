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
];
