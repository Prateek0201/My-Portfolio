export const personal = {
  name: "Prateek Kumar Panda",
  title: "Data Scientist & AI/ML Engineer",
  summary:
    "Results-driven Data Scientist and AI/ML Engineer with 2.5+ years of experience building production-grade machine learning systems, generative AI platforms, and advanced analytics solutions. Proven expertise in designing multi-agent LLM frameworks, NLP pipelines, and large-scale data processing with PySpark and cloud platforms (AWS, Azure).",
  email: "paandaprateek0201@gmail.com",
  phone: "+91-9827703357",
  linkedin: "",
  github: "",
  location: "Odisha, India",
};

export const stats = [
  { value: "2.5+", label: "Years Experience" },
  { value: "2", label: "Industries Served" },
  { value: "1", label: "Production AI Platform" },
  { value: "Oracle", label: "GenAI Certified" },
];

export const skillGroups = [
  {
    category: "ML / AI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "RAG (Retrieval-Augmented Generation)",
      "RLHF",
      "XGBoost",
      "Random Forest",
      "K-Means Clustering",
      "Hierarchical Clustering",
      "Boruta Feature Selection",
      "Sentiment Analysis",
      "Price Elasticity Modeling",
      "Sales Decomposition",
      "Cannibalization & Halo Analysis",
    ],
  },
  {
    category: "LLMs & Agents",
    skills: [
      "LangChain",
      "CrewAI",
      "Ollama",
      "AWS Bedrock (Claude Sonnet 3.5)",
      "OpenAI Whisper (STT)",
      "ElevenLabs (TTS)",
      "Pinecone (Vector DB)",
      "MCP (Model Context Protocol)",
    ],
  },
  {
    category: "Big Data & Cloud",
    skills: [
      "PySpark",
      "Databricks",
      "Amazon Redshift",
      "AWS Wrangler",
      "DuckDB",
      "DBeaver",
      "Power BI",
      "Streamlit",
      "AWS (Bedrock, S3, EC2, CloudWatch)",
      "Azure Blob Storage",
      "ADLS",
    ],
  },
  {
    category: "Backend & Dev",
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "WebSockets",
      "SQL",
      "MongoDB",
      "MySQL",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Jupyter Notebook",
      "Google Colab",
      "Figma",
      "Selenium",
      "VSCode",
    ],
  },
];

export const experience = [
  {
    company: "Involead Services Pvt. Ltd.",
    type: "On-site",
    period: "Jan 2024 - Present",
    projects: [
      {
        title: "European Pharma - Production Multi-Agent AI Platform",
        tags: [
          "CrewAI",
          "AWS Bedrock",
          "LangChain",
          "RAG",
          "FastAPI",
          "WebSocket",
          "Pinecone",
          "MongoDB",
        ],
        impact: "Delivered to Production",
        impactColor: "cyan",
        bullets: [
          "Architected a production-grade multi-agent AI system using CrewAI with Text, Speech, and Web Search agents, replacing a single-model setup with an orchestrated multi-modal pipeline.",
          "Integrated Google SERP via MCP for real-time search and leveraged AWS Bedrock (Claude Sonnet 3.5) with LangChain for LLM inference and pipeline orchestration.",
          "Built a low-latency speech pipeline using OpenAI Whisper (STT) and ElevenLabs (TTS) over WebSocket connections, enabling real-time conversational AI with near-zero turn latency.",
          "Implemented RAG pipeline (OCR -> embedding -> Pinecone) with metadata caching and S3 + DuckDB integration, significantly reducing query response time and infrastructure overhead.",
          "Served all inference endpoints via FastAPI with MongoDB for session persistence; delivered to production, improving client-facing AI interaction quality.",
        ],
      },
      {
        title: "European Pharma - HCP Profiling & Content Optimisation",
        tags: [
          "XGBoost",
          "K-Means",
          "Hierarchical Clustering",
          "Streamlit",
          "Boruta",
          "Amazon Redshift",
        ],
        impact: "Systematic ML Framework",
        impactColor: "violet",
        bullets: [
          "Built Healthcare Professional (HCP) profiles using Email CTR, web traffic data, and unsupervised clustering models (K-Means, Hierarchical) to assess content effectiveness and audience segmentation.",
          "Developed a Streamlit-based simulation tool enabling clients to tune KPIs via content metadata, supporting data-driven targeting and eliminating manual trial-and-error.",
          "Applied XGBoost for KPI simulation and Boruta for feature/metadata optimisation, replacing ad-hoc content strategy with a systematic, repeatable analytical framework.",
          "Ingested and queried large-scale healthcare data from Amazon Redshift using AWS Wrangler and DBeaver.",
        ],
      },
      {
        title: "USA QSR - Transactional Analytics & Revenue Intelligence",
        tags: [
          "PySpark",
          "Databricks",
          "Azure Blob",
          "ADLS",
          "Power BI",
          "Price Elasticity",
        ],
        impact: "Value Menu Restructured",
        impactColor: "cyan",
        bullets: [
          "Ingested and processed large-scale transactional data from Azure Blob Storage via Databricks (PySpark); delivered revenue insights that informed Value Menu restructuring and item-level pricing strategy.",
          "Modelled price elasticity, sales decomposition, demand transfer, and cannibalization & halo effects to optimise item mix and reduce revenue leakage.",
          "Assessed new menu item launch impact using historical trial rates, improving forecast accuracy for menu expansion planning.",
          "Automated weekly data refresh using cron jobs aligned to a 5-4-4 fiscal calendar; surfaced actionable insights through Power BI dashboards connected to ADLS, reducing manual reporting effort.",
        ],
      },
    ],
  },
];

export const achievements = [
  {
    icon: "Brain",
    title: "Production Multi-Agent AI Platform",
    description:
      "Delivered a CrewAI-based multi-agent system for a European pharma client, enabling real-time conversational workflows and improving AI interaction quality.",
  },
  {
    icon: "TrendingUp",
    title: "Value Menu Restructuring",
    description:
      "Informed item-level pricing and menu restructuring for a major US QSR chain through price elasticity, cannibalization, and halo impact modelling.",
  },
  {
    icon: "Zap",
    title: "Automated Data Pipelines",
    description:
      "Automated weekly data pipelines and Power BI dashboards, significantly reducing manual reporting effort and freeing bandwidth for strategic analysis.",
  },
  {
    icon: "Target",
    title: "Systematic HCP Targeting",
    description:
      "Replaced ad-hoc pharma content strategies with an XGBoost + Boruta ML framework, driving measurable improvements in healthcare professional targeting accuracy.",
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Technology",
  institution: "GIET University, Odisha",
  period: "2020 - 2024",
  cgpa: "8.29 / 10.0",
};

export const certification = {
  title: "Oracle Cloud Infrastructure",
  subtitle: "Generative AI Certified Professional",
  issuer: "Oracle",
};
