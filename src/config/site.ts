export const siteConfig = {
  name: 'Vinay Santosh Belekar',
  title: 'B.Tech ECE Student · AI/ML & Software Developer',
  email: 'vinaychessgm@gmail.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  repo: 'https://github.com/vinaybelekar13/vinay-portfolio',
  resume: '',
  terminal: {
    user: 'vinay',
    host: 'dev',
  },
  social: {
    github: 'https://github.com/vinaybelekar13',
    linkedin: '',
    leetcode: '',
  },
  sections: ['about', 'education', 'skills', 'projects', 'experience', 'achievements', 'certifications', 'contact'] as const,
} as const;
