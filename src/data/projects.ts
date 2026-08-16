import expenseTrackerImg from '../assets/images/expense_tracker_ui_1786872846566.jpg';
import ecoRecycleImg from '../assets/images/ecorecycle_ui_1786872863888.jpg';
import paperPlaneImg from '../assets/images/paper_plane_game_1786872878927.jpg';
import resumeAnalyzerImg from '../assets/images/resume_analyzer_ui_1786873093113.jpg';
import vehicleDamageImg from '../assets/images/vehicle_damage_ui_1786873114415.jpg';
import placementPortalImg from '../assets/images/placement_portal_ui_1786873131350.jpg';
import phishingDetectorImg from '../assets/images/phishing_detector_ui_1786873152030.jpg';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  aiFeatures?: string[];
  tech: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'smart-expense-tracker',
    number: '01',
    title: 'SMART EXPENSE TRACKER',
    category: 'WEB DEVELOPMENT / AI / ML / DATA / ANALYTICS',
    shortDescription: 'Track expenses, understand spending patterns and receive intelligent budgeting suggestions.',
    description: 'A responsive application that tracks expenses and income while analyzing spending patterns. People often spend money without properly understanding where their money goes. This solution provides deep insights and AI-powered recommendations.',
    features: [
      'Expense tracking',
      'Income tracking',
      'Categories',
      'Monthly budgets',
      'Spending history',
      'Charts',
      'Reports',
      'Unusual spending detection',
      'Personalized recommendations',
      'Future expense prediction'
    ],
    aiFeatures: [
      'Automatic categorization',
      'Spending analysis',
      'Anomaly detection',
      'Prediction',
      'Personalized budgeting suggestions'
    ],
    tech: ['React', 'JavaScript', 'Python', 'Flask', 'MySQL', 'Chart.js', 'Pandas', 'Scikit-learn'],
    status: 'Completed',
    featured: true,
    image: expenseTrackerImg,
  },
  {
    id: 'ecorecycle',
    number: '02',
    title: 'ECORECYCLE',
    category: 'WEB DEVELOPMENT / AI / ML',
    shortDescription: 'A smart recycling platform that combines waste identification, recycling guidance, nearby recycling locations and Green Points.',
    description: 'A smart recycling platform that combines waste identification, recycling guidance, nearby recycling locations and Green Points.',
    features: [
      'Waste identification',
      'Recyclability check',
      'Disposal guidance',
      'Recycling center discovery',
      'Green Points',
      'Rewards',
      'Waste education',
      'Image upload'
    ],
    aiFeatures: [
      'Image-based waste classification'
    ],
    tech: ['React', 'Python', 'Flask', 'MySQL', 'Computer Vision', 'REST API', 'Figma'],
    status: 'Completed',
    featured: true,
    image: ecoRecycleImg,
  },
  {
    id: 'paper-plane-game',
    number: '03',
    title: 'PAPER PLANE GAME',
    category: 'GAME DEVELOPMENT',
    shortDescription: 'A Flappy Bird-style web game where players control a paper plane and navigate through obstacles.',
    description: 'A Flappy Bird-style web game where players control a paper plane and navigate through obstacles.',
    features: [
      'Score',
      'High score',
      'Moving obstacles',
      'Increasing difficulty',
      'Keyboard controls',
      'Touch controls',
      'Lives',
      'Restart',
      'Difficulty modes',
      'Leaderboard-ready architecture'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'HTML5 Canvas API'],
    status: 'Planned',
    featured: true,
    image: paperPlaneImg,
  },
  {
    id: 'ai-resume-analyzer',
    number: '04',
    title: 'AI RESUME ANALYZER',
    category: 'AI / ML',
    shortDescription: 'AI-powered resume analysis and optimization.',
    description: 'AI-powered resume analysis and optimization.',
    features: ['Resume parsing', 'Keyword matching', 'Optimization suggestions'],
    tech: ['Python', 'NLP', 'React'],
    status: 'Planned',
    featured: false,
    image: resumeAnalyzerImg,
  },
  {
    id: 'vehicle-damage-analyzer',
    number: '05',
    title: 'VEHICLE DAMAGE ANALYZER & INSURANCE CLAIM ESTIMATOR',
    category: 'AI / ML',
    shortDescription: 'Estimate vehicle damage and insurance claims using computer vision.',
    description: 'Estimate vehicle damage and insurance claims using computer vision.',
    features: ['Damage detection', 'Cost estimation', 'Report generation'],
    tech: ['Python', 'Computer Vision', 'FastAPI'],
    status: 'Planned',
    featured: false,
    image: vehicleDamageImg,
  },
  {
    id: 'ai-placement-portal',
    number: '06',
    title: 'AI PLACEMENT PORTAL SIMULATOR',
    category: 'WEB DEVELOPMENT / AI / ML',
    shortDescription: 'Simulated placement portal with AI mock interviews.',
    description: 'Simulated placement portal with AI mock interviews.',
    features: ['Mock interviews', 'Feedback generation', 'Progress tracking'],
    tech: ['React', 'Python', 'LLMs'],
    status: 'Planned',
    featured: false,
    image: placementPortalImg,
  },
  {
    id: 'phishing-url-detector',
    number: '07',
    title: 'PHISHING URL DETECTOR',
    category: 'CYBERSECURITY / AI / ML',
    shortDescription: 'Detect malicious URLs using machine learning.',
    description: 'Detect malicious URLs using machine learning.',
    features: ['URL scanning', 'Threat analysis', 'Real-time alerts'],
    tech: ['Python', 'Scikit-learn', 'Flask'],
    status: 'Planned',
    featured: false,
    image: phishingDetectorImg,
  }
];
