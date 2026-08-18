export const projects = [
  {
    title: "PulseGuard",
    subtitle: "Proactive API Failure Prediction & Observability Platform",

    description:
      "ML-powered observability platform that analyzes API telemetry to predict failures 30 seconds ahead and generate proactive alerts with real-time dashboard monitoring.",

    tech: [
      "Python",
	  "Pandas",
	  "NumPy",
      "PyTorch",
      "FastAPI",
	  "Scikit-learn", 
	  "Logistic Regression",
      "PostgreSQL",
      "Redis",
      "Docker",
	  "Pytest",
	  "Next.js", 
	  "React", 
	  "TypeScript",
    ],

    metrics: [
      "Designed a telemetry-driven API failure prediction system using Python and scikit-learn, applying rolling-window feature engineering across latency, error rates, resource utilization, and request patterns to achieve 93% precision and 59% recall for 30-second-ahead failure prediction.",
      "Implemented a threshold-optimized ML alerting system by tuning the decision threshold on a validation set to balance false positives and failure detection, enabling proactive alerts for elevated API failure risk.",
      "Engineered a telemetry pipeline processing 10K+ API events with Python and PostgreSQL, and optimized real-time prediction serving with Redis caching, achieving 3.73 ms average cache-hit latency while eliminating redundant model inference for repeated requests.",
    ],

    github: "https://github.com/priyushach99/pulseguard",
  },

  {
    title: "AI Unified Data Platform",

    subtitle:
      "Real-Time & Batch Data Intelligence Platform",

    description:
      "Dual-path data platform combining Spark batch processing and Kafka streaming to process transaction data and generate LLM-powered insights.",

    tech: [
      "PySpark",
      "Kafka",
      "PostgreSQL",
      "Airflow",
      "GPT-4o",
      "Docker",
    ],

    metrics: [
      "Engineered a dual-path data pipeline combining Spark batch ETL and Kafka structured streaming (10-second micro-batches) with a shared transformation layer, ensuring consistent data quality and fault-tolerant checkpoint recovery across both paths.",
      "Cut LLM inference cost by 90% through prompt restructuring (8,500 → 800 tokens without accuracy loss), making the architecture viable to run continuously at scale rather than on-demand only.",
      "Designed hybrid rule-based + LLM logic for auditable outputs with graceful fallback during API outages.",
    ],

    github: "https://github.com/priyushach99/ai-unified-data-platform",
  },
  
  {
    title: "LLM-Powered Meeting Intelligence Tool",

    subtitle:
      "AI-Powered Meeting Summarization & Knowledge Retrieval",

    description:
      "AI Platform that transcribes conversations, generates summaries, and enables semantic knowledge retrieval using LLMs and RAG.",

    tech: [
      "Python",
      "RAG",
	  "Sentence Transformers",
      "FAISS Vector",
      "OpenAI Whisper",
      "LLaMA",
      "Streamlit",
    ],

    metrics: [
    "Designed a FAISS-based semantic retrieval layer over meeting transcripts, improving action-item extraction accuracy by 35%.",
    "Diagnosed and resolved LLM hallucinations by tightening retrieval logic and implementing explicit \"not covered\" fallback handling.",
    "Built a Streamlit interface for uploading recordings, reviewing summaries, and querying past meetings in natural language, making the RAG system accessible to non-technical users.",
  ],

    github: "https://github.com/priyushach99/llm_meeting_summarizer",
  },
];