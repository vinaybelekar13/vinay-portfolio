export type Experience = {
  key: string;
  company: string;
  url?: string;
  icon?: 'briefcase' | 'terminal' | 'graduation' | 'rocket' | 'gamepad';
};

export const experiences: Experience[] = [
  {
    key: 'exp0',
    company: 'AGRHI HUB',
    icon: 'rocket',
  },
];
