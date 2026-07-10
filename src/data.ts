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

export type Education = {
  school: string
  location: string
  degree: string
  period: string
  details?: string[]
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
    role: 'Senior Project Software Engineer',
    company: 'Lutron Electronics',
    location: 'Philadelphia, PA',
    period: 'Jan 2025—July 2026',
    highlights: [
      'Led the design and delivery of a cloud-based firmware upgrade workflow with AWS Lambda, AWS SQS, and React, parallelizing more than 1,000 guestroom update streams and reducing upgrade time by 90%.',
      'Architected and validated a WebSocket-based system for real-time smart-device updates, reducing processor polling overhead and achieving less than 500ms IoT dashboard latency.',
      'Standardized AI-assisted engineering workflows with the micro-frontend platform lead and integrated debugging MCP tools, reducing feature implementation time by about 50%.',
      'Facilitated delivery for a six-person engineering team as Scrum Master, aligning priorities, feedback, dependencies, and phased rollouts with the product manager.',
      'Developed processor-core logging in C++ for four hospitality system metrics, improving operational visibility across hotel deployment workflows.',
    ],
  },
  {
    role: 'Project Software Engineer',
    company: 'Lutron Electronics',
    location: 'Philadelphia, PA',
    period: 'July 2023—Jan 2025',
    highlights: [
      'Delivered a cloud feature-gating service in Go and AWS Lambda, enabling one dashboard to support type-specific functionality across hospitality, residential, and commercial IoT systems.',
      'Implemented core capabilities for next-generation hospitality IoT systems, including property-wide operational monitoring and more than ten proactive alert types across 100+ lighting control stations.',
      'Established React and TypeScript standards as frontend subject matter expert, mentored ten developers, and reduced test flakiness by 30%.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Lutron Electronics',
    location: 'Philadelphia, PA',
    period: 'May 2022—July 2022',
    highlights: [
      'Launched Lutron’s first web-based IoT monitoring tool using React and TypeScript, enabling real-time diagnostics and reducing system analysis time by 50%.',
      'Introduced a design system and Micro Frontend architecture adopted as shared infrastructure for UI development across teams.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'US Cabinet Depot',
    location: 'Kennesaw, GA',
    period: 'June 2021—Aug 2021',
    highlights: [
      'Created and launched an e-commerce platform with Nuxt.js and Vuetify, improving content loading time by 20%.',
    ],
  },
  {
    role: 'Grader, CSCI-UA 310 Basic Algorithms',
    company: 'New York University',
    location: 'New York, NY',
    period: 'Sep 2021—Dec 2021',
    highlights: [
      'Evaluated weekly assignments for more than 100 students and collaborated with faculty to maintain consistent grading standards.',
    ],
  },
]

export const education: Education[] = [
  {
    school: 'University of Pennsylvania',
    location: 'Philadelphia, PA',
    degree: 'M.S.E. in Computer and Information Science',
    period: 'Aug 2026—May 2028 (Expected)',
  },
  {
    school: 'New York University',
    location: 'New York, NY',
    degree: 'B.A. in Computer Science and Mathematics, summa cum laude',
    period: 'Sep 2019—May 2023',
    details: [
      'GPA: 3.94/4.00',
      'Dean’s List 2019–2023 · Phi Beta Kappa · University Honors Scholar',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Programming languages',
    items: ['TypeScript', 'Java', 'Python', 'Go', 'SQL', 'C++', 'HTML/CSS', 'MATLAB'],
  },
  {
    title: 'Frameworks & databases',
    items: ['React', 'Node.js', 'Express.js', 'AWS DynamoDB', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Languages',
    items: ['Mandarin (fluent)'],
  },
  {
    title: 'Interests',
    items: ['Marathon running', 'Board games', 'Hiking'],
  },
]
