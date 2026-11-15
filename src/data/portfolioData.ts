export type SkillCategory = 'Programming' | 'AI & Emerging Tech' | 'Development';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  stage: 'Core Focus' | 'Active Practice' | 'Learning' | 'Exploring';
  summary: string;
  focusAreas: string[];
  iconName:
    | 'Terminal'
    | 'Code2'
    | 'Palette'
    | 'Braces'
    | 'BrainCircuit'
    | 'MessageSquareCode'
    | 'Cpu'
    | 'Workflow'
    | 'Globe'
    | 'GitBranch';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tagline?: string;
  status: string;
  isFlagship?: boolean;
  description: string;
  longDescription: string;
  features: string[];
  stack: string[];
  imageUrl: string;
  imageAlt: string;
  loopSteps?: { step: string; detail: string }[];
  architectureNote: string;
}

export const PROFILE = {
  name: 'A. Harshvardhan',
  displayName: 'A. HARSHVARDHAN',
  roleLine: 'Aspiring AI Engineer · Python Developer · Generative AI Enthusiast',
  education: 'B.Tech — First Year',
  status: 'Currently Learning & Building',
  headline: 'Building the Future with AI.',
  subtitle:
    'An aspiring AI Engineer exploring the intersection of Artificial Intelligence, Generative AI, and Software Development. Turning curiosity into code and ideas into intelligent solutions.',
  email: 'harshvardhan.ai.dev@gmail.com',
  githubUrl: 'https://github.com/harshvardhan-ai',
  linkedinUrl: 'https://linkedin.com/in/harshvardhan-ai',
  location: 'India',
};

export const ABOUT_DATA = {
  heading: 'Beyond Code. Into Intelligence.',
  description:
    "I'm A. Harshvardhan, a first-year B.Tech student passionate about Artificial Intelligence, Python development, and emerging technologies. I'm continuously learning, experimenting with AI tools, building projects, and exploring innovative ways to solve real-world problems.",
  highlights: [
    {
      title: 'AI Enthusiast',
      detail: 'Studying modern model architectures, reasoning workflows, and how intelligent systems augment human capability.',
    },
    {
      title: 'Python Developer',
      detail: 'Writing clean, modular Python scripts for automation, data handling, and prototyping AI-powered backends.',
    },
    {
      title: 'Generative AI Explorer',
      detail: 'Experimenting with structured prompting, multimodal inputs, and LLM application design patterns.',
    },
    {
      title: 'Aspiring Innovator',
      detail: 'Channeling first-principles engineering curiosity into practical products like LearnLoop.',
    },
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    stage: 'Core Focus',
    summary: 'Primary language for algorithmic problem solving, scripting, and prototyping AI-driven applications.',
    focusAreas: ['Data structures & logic', 'CLI utilities & automation', 'API integration & JSON pipelines'],
    iconName: 'Terminal',
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Programming',
    stage: 'Active Practice',
    summary: 'Semantic document architecture for accessible, well-structured web interfaces.',
    focusAreas: ['Semantic markup', 'Accessible landmarks', 'Responsive document layout'],
    iconName: 'Code2',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Programming',
    stage: 'Active Practice',
    summary: 'Modern styling systems including Flexbox, Grid, custom properties, and responsive UI craft.',
    focusAreas: ['CSS Grid & Flexbox', 'Glassmorphism & dark UI systems', 'Smooth micro-transitions'],
    iconName: 'Palette',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming',
    stage: 'Learning',
    summary: 'Actively building fluency in interactive DOM logic, async workflows, and modern frontend scripting.',
    focusAreas: ['ES6+ fundamentals', 'Interactive UI state', 'Asynchronous fetch patterns'],
    iconName: 'Braces',
  },
  {
    id: 'genai',
    name: 'Generative AI',
    category: 'AI & Emerging Tech',
    stage: 'Core Focus',
    summary: 'Exploring foundation models, multimodal generation, and intelligent application design.',
    focusAreas: ['LLM capabilities & limits', 'Multimodal study assistants', 'Context-aware generation'],
    iconName: 'BrainCircuit',
  },
  {
    id: 'prompt-eng',
    name: 'Prompt Engineering',
    category: 'AI & Emerging Tech',
    stage: 'Active Practice',
    summary: 'Designing structured instructions, system personas, and evaluation loops for reliable AI outputs.',
    focusAreas: ['Chain-of-thought framing', 'Structured output schemas', 'Few-shot prompt iteration'],
    iconName: 'MessageSquareCode',
  },
  {
    id: 'ai-tools',
    name: 'AI Tools',
    category: 'AI & Emerging Tech',
    stage: 'Active Practice',
    summary: 'Leveraging modern AI research, coding, and synthesis environments to accelerate iteration.',
    focusAreas: ['Rapid prototyping', 'Code comprehension & debugging', 'Knowledge synthesis'],
    iconName: 'Cpu',
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    category: 'AI & Emerging Tech',
    stage: 'Exploring',
    summary: 'Connecting prompts, scripts, and structured triggers to automate repetitive study and developer tasks.',
    focusAreas: ['Document-to-note pipelines', 'Automated quiz generation', 'Task chaining workflows'],
    iconName: 'Workflow',
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    category: 'Development',
    stage: 'Active Practice',
    summary: 'Bringing AI concepts into interactive, browser-accessible experiences with clean user interfaces.',
    focusAreas: ['Responsive layouts', 'Component thinking', 'Interactive prototypes'],
    iconName: 'Globe',
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'Development',
    stage: 'Learning',
    summary: 'Building disciplined version control habits, commit hygiene, and open-source project collaboration.',
    focusAreas: ['Branching & commits', 'Repository documentation', 'Project version tracking'],
    iconName: 'GitBranch',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'learnloop',
    title: 'LEARNLOOP',
    subtitle: 'AI-Powered Gamified Learning Platform',
    tagline: 'Learn. Ask. Understand. Practice. Compete. Improve.',
    status: 'Flagship Vision · Active Blueprint',
    isFlagship: true,
    description:
      'A vision for an AI-powered learning ecosystem that makes education personalized, interactive, and engaging.',
    longDescription:
      'LEARNLOOP reimagines how students absorb complex subjects by unifying passive study materials with active AI tutoring and game-inspired mastery loops. Instead of reading static notes alone, learners upload PDFs or lecture snapshots and immediately enter a continuous cycle of questioning, practicing, and friendly competition.',
    features: [
      'AI-powered personalized tutoring tailored to each learner’s pace and curiosity',
      'PDF and image-based note generation that distills dense material into structured concepts',
      'AI-generated adaptive quizzes and targeted practice drills from your own study sources',
      'Gamified mastery streaks and peer challenge loops to sustain daily momentum',
    ],
    loopSteps: [
      { step: 'Learn', detail: 'Ingest PDFs, slides, and textbook images into clean structured notes.' },
      { step: 'Ask', detail: 'Query an interactive AI tutor directly within the context of your material.' },
      { step: 'Understand', detail: 'Break down tough concepts with step-by-step analogies and visual breakdowns.' },
      { step: 'Practice', detail: 'Generate adaptive quizzes and active-recall flashcards on demand.' },
      { step: 'Compete', detail: 'Challenge peers in focused topic sprints and mastery leaderboards.' },
      { step: 'Improve', detail: 'Identify weak spots automatically and close knowledge gaps over time.' },
    ],
    stack: ['Python', 'Generative AI', 'Prompt Engineering', 'Web Development'],
    imageUrl: '/src/assets/images/learnloop_showcase_1794764664974.jpg',
    imageAlt: 'Futuristic holographic network illustrating the LearnLoop AI learning ecosystem',
    architectureNote:
      'Designed around a modular document-ingestion pipeline paired with context-grounded prompt templates and an adaptive challenge engine.',
  },
  {
    id: 'promptcraft-cli',
    title: 'PromptCraft CLI',
    subtitle: 'Structured Prompt Testing & Template Runner',
    status: 'Python Build · Prototype',
    description:
      'A lightweight Python command-line workspace for organizing system prompts, injecting variables cleanly, and comparing structured AI responses.',
    longDescription:
      'Built while refining prompt engineering techniques, PromptCraft CLI keeps reusable prompt templates versioned in plain files so experiments remain reproducible across iterations.',
    features: [
      'Modular JSON and Markdown prompt template registry',
      'Variable substitution and input validation in Python',
      'Side-by-side output logging for iterative prompt refinement',
    ],
    stack: ['Python', 'Prompt Engineering', 'AI Tools'],
    imageUrl: '/src/assets/images/promptcraft_showcase_1794764666125.jpg',
    imageAlt: 'Isometric dark metallic modular pipeline representing PromptCraft CLI architecture',
    architectureNote:
      'Pure Python CLI architecture focusing on zero-friction local experimentation and clean structured output inspection.',
  },
  {
    id: 'studyflow-automator',
    title: 'StudyFlow Automator',
    subtitle: 'Document-to-Flashcard Automation Concept',
    status: 'AI Automation · Experiment',
    description:
      'An exploration in automating academic revision by turning raw lecture outlines into concise summaries and self-test question banks.',
    longDescription:
      'Serves as a foundational building block for LearnLoop’s ingestion engine—testing how structured prompt chains extract key definitions, formulas, and conceptual questions from raw study text.',
    features: [
      'Multi-stage prompt chaining for concept extraction',
      'Automated question-and-answer pair formatting',
      'Clean Markdown export for rapid revision sessions',
    ],
    stack: ['Python', 'AI Automation', 'Generative AI'],
    imageUrl: '/src/assets/images/studyflow_showcase_1794764666823.jpg',
    imageAlt: 'Optical glass prism refracting light streams into structured cards for StudyFlow Automator',
    architectureNote:
      'Demonstrates sequential prompt orchestration where extracted key terms feed directly into question-generation passes.',
  },
];
