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
  {
    id: "ch4",
    title: "Unsupervised Learning",
    subTopics: [
      { id: "ch4-intro", title: "Intro to Unsupervised Learning", isPage: true },
      { id: "ch4-kmeans", title: "K-Means Clustering", isPage: true },
      { id: "ch4-kmedoids", title: "K-Medoids Clustering", isPage: true },
      { id: "ch4-hierarchical", title: "Hierarchical Clustering", isPage: true },
      { id: "ch4-apriori", title: "Apriori Algorithm", isPage: true },
      { id: "ch4-anomaly-detection", title: "Anomaly Detection", isPage: true },
    ],
  },
  {
    id: "ch5",
    title: "Unit 5: Trends and Applications",
    subTopics: [
      { id: "ch5-ensemble", title: "Ensemble Learning", isPage: true },
      { id: "ch5-image-recognition", title: "Image Recognition", isPage: true },
      { id: "ch5-speech-recognition", title: "Speech Recognition", isPage: true },
      { id: "ch5-prediction-recommendation", title: "Prediction & Recommendation", isPage: true },
      { id: "ch5-spam-malware", title: "Email Spam & Malware Filtering", isPage: true },
      { id: "ch5-virtual-assistant", title: "Virtual Personal Assistant", isPage: true },
      { id: "ch5-fraud-detection", title: "Online Fraud Detection", isPage: true },
    ],
  },
  {
    id: "ch6",
    title: "Unit 6: Advanced Topics & MLOps (Bonus)",
    subTopics: [
      { id: "ch6-deep-learning", title: "Deep Learning Fundamentals", isPage: true },
      { id: "ch6-reinforcement", title: "Reinforcement Learning", isPage: true },
      { id: "ch6-nlp", title: "Natural Language Processing", isPage: true },
      { id: "ch6-mlops", title: "MLOps & Model Deployment", isPage: true },
      { id: "ch6-xai", title: "Explainable AI (XAI) & Ethics", isPage: true },
    ],
  },
];
