export type Project = {
  name: string
  kind: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
  projectUrl?: string
  githubUrl: string
  featured?: boolean
  media?: {
    type: 'image' | 'video'
    src: string
    alt: string
  }
}

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    name: 'Smart Choice',
    kind: 'Course planning platform',
    period: 'Sep—Dec 2021',
    description:
      'A full-stack course planning platform that helped NYU students browse courses, compare feedback, and make better selections.',
    highlights: [
      'Built with a six-person agile team from sitemap and wireframes through production.',
      'Connected an Express API to MongoDB for comments, ratings, and course selections.',
      'Deployed to a DigitalOcean CentOS droplet and used by 30 students.',
    ],
    technologies: ['React', 'Express', 'MongoDB', 'JWT', 'DigitalOcean'],
    projectUrl: 'http://nyu-smart-choice.com',
    githubUrl: 'https://github.com/PengfanZ/project-setup-pengfan-z',
    featured: true,
  },
]

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Software Engineer',
    company: 'Lutron Electronics',
    location: 'Philadelphia, PA',
    period: 'May 2022—July 2022',
    highlights: [
      'Developed and deployed a system-diagnostics micro frontend to production with system design and feature flags.',
      'Built React and TypeScript UI and hooks backed by Jest and Cypress integration tests.',
      'Improved the troubleshooting flow, saving field service engineers 25% of the time needed to access diagnostic data.',
      'Received a return offer for a full-time Project Software Engineer role.',
    ],
  },
  {
    role: 'Grader',
    company: 'New York University',
    location: 'New York, NY',
    period: 'Sep 2021—Dec 2021',
    highlights: [
      'Worked with nine graders to evaluate weekly Basic Algorithms assignments for 108 students.',
      'Partnered with Professor Alan Siegel and the course assistant to select exemplary student solutions.',
    ],
  },
  {
    role: 'Frontend Software Engineer Intern',
    company: 'US Cabinet Depot',
    location: 'Kennesaw, GA',
    period: 'June 2021—Aug 2021',
    highlights: [
      'Developed a new e-commerce and marketing website with three teammates.',
      'Built marketing and checkout pages with Nuxt and JavaScript.',
      'Reduced the marketing team’s publishing time by 30%.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frameworks & data',
    items: ['React', 'Nuxt', 'Express', 'MongoDB', 'JWT', 'Jest', 'Cypress'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Confluence', 'Jira'],
  },
]
