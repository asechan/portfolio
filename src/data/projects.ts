export const projects = [
  {
    slug: "sql-optimizer",
    title: "AI SQL Query Optimizer",
    stack: "Java 17, Spring Boot, FastAPI, React, Docker, GradientBoosting",
    summary: "Automated pipeline that parses SQL queries into 14 AST features to predict runtime and flag slow queries via a GradientBoosting model.",
    description: "Built an automated pipeline that parses SQL queries into 14 AST features (via JSqlParser) and feeds a GradientBoosting model to predict runtime and flag slow queries. It exposes query-rewrite and index recommendations via a FastAPI + Spring Boot REST API, with a Docker Compose deployment.",
    outcome: "Achieved R² = 0.86 runtime prediction, 97.8% slow-query classification accuracy, 39.9ms MAE, 0.793 F1 score on classification. Trained on 5,000 synthetic queries.",
    link: "https://github.com/asechan/sql-optimizer",
    video: "/videos/sql-optimizer.mp4",
    poster: "/images/sql-optimizer-thumbnail.jpg",
  },
  {
    slug: "sleep-apnea",
    title: "Sleep Apnea Detection System",
    stack: "PyTorch, CNN, Mel Spectrograms, Apple MPS",
    summary: "End-to-end signal-processing pipeline for automated sleep apnea detection from audio using Mel spectrograms and a custom CNN.",
    description: "Developed an end-to-end signal-processing pipeline for automated sleep apnea detection from audio. The system handles segmentation, Mel spectrogram extraction, and CNN inference. It automates 30-second epoch segmentation and event merging to compute a clinical Apnea-Hypopnea Index.",
    outcome: "Successfully deployed on Apple Silicon MPS for real-time inference. For example, it correctly classified a recording with 42 events over 7.19 hours resulting in an AHI of 5.83 (Mild). Tuned via F1/ROC-AUC.",
    link: "https://github.com/asechan/sleep-apnea-detection",
    image: "/images/sleep-apnea.png",
  },
  {
    slug: "neural-preset",
    title: "Neural Preset Generator",
    stack: "PyTorch, CNN, Apple MPS, OpenCV",
    summary: "Hybrid Reinhard + custom CNN style-transfer pipeline enabling real-time colour grading on 4K+ images.",
    description: "Created a hybrid Reinhard and custom CNN style-transfer pipeline that enables real-time colour grading on 4K+ images. The system is designed for photorealistic preset cloning, utilizing a resolution-independent workflow with 512px proxies and adaptive film grain synthesis to eliminate geometric distortion.",
    outcome: "Achieved a ~40% inference latency reduction via Apple Silicon MPS optimization, ensuring smooth and rapid processing of high-resolution images.",
    link: "https://github.com/asechan/neural-preset",
    image: "/images/neural-preset.png",
  }
];
