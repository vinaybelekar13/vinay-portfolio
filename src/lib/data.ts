export type Project = {
  title: string;
  descriptionKey: string;
  url?: string;
  tech: string[];
  date: string;
  role: string;
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'AGRHION',
    descriptionKey: 'proj0Desc',
    tech: ['Raspberry Pi', 'IoT', 'LoRa', 'Sensors', 'Robotics', 'Embedded Systems'],
    date: 'In Progress',
    role: 'Team Lead',
    status: 'In Progress',
    featured: true,
  },
  {
    title: 'Saline Monitoring System',
    descriptionKey: 'proj1Desc',
    tech: ['Arduino Uno', 'ESP32', 'HX711', 'Load Cell', 'IoT'],
    date: 'Prototype',
    role: 'Project',
    status: 'Prototype',
    featured: true,
  },
  {
    title: 'AI Breath-Hold Detection System',
    descriptionKey: 'proj2Desc',
    tech: ['Python', 'Computer Vision', 'Webcam', 'AI', 'Prompt Engineering'],
    date: 'Prototype',
    role: 'Project',
    status: 'Prototype',
    featured: true,
  },
  {
    title: 'CreditWise Loan System',
    descriptionKey: 'proj3Desc',
    tech: ['Python', 'Scikit-learn', 'KNN', 'Logistic Regression', 'Naive Bayes', 'EDA'],
    date: 'ML Project',
    role: 'Project',
    status: 'Completed',
    featured: true,
  },
];
