export type ProjectCategory = 'web-app' | 'website'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  stack: string[]
  github: string
  live: string
  categories: ProjectCategory[]
  category?: string
  badge: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Atom Pro',
    description: 'Digital financial platform for crypto trading, global equities, and collateralized lending.',
    image: '/screenshots/atompro.png',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    github: '',
    live: 'https://www.atompro.co/',
    categories: ['website'],
    badge: 'Website',
    featured: true
  },
  {
    id: 'p2',
    title: 'Atom Pro App',
    description: 'Trading and investment web app with multi-asset portfolio management and live execution.',
    image: '/screenshots/atom-app.png',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: '',
    live: 'https://app.atompro.co/',
    categories: ['web-app'],
    badge: 'Web App',
    featured: true
  },
  {
    id: 'p3',
    title: 'Richion',
    description: 'All-in-one fintech platform featuring virtual cards, instant transfers, bills payment, and e-commerce.',
    image: '/screenshots/richionstore.png',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    github: '',
    live: 'https://richionstore.com/',
    categories: ['website'],
    badge: 'Website',
    featured: true
  },
  {
    id: 'p4',
    title: 'Richion Merchant',
    description: 'Dedicated merchant management portal and store dashboard for marketplace vendors.',
    image: '/screenshots/richion-merchant.png',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: '',
    live: 'https://merchant.richionstore.com/',
    categories: ['web-app'],
    badge: 'Web App',
    featured: true
  },
  {
    id: 'p5',
    title: 'GateShark',
    description: 'Smart visitor access management and security platform for modern estates and workspaces.',
    image: '/screenshots/gateshark.png',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    github: '',
    live: 'https://gateshark.net/',
    categories: ['website'],
    badge: 'Website',
    featured: true
  },
  {
    id: 'p6',
    title: 'Tadfinance App',
    description: 'Web application and onboarding portal for managing business finances and invoicing.',
    image: '/screenshots/tadfinance-app.png',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    github: '',
    live: 'https://app.tadfinance.com/register',
    categories: ['web-app'],
    badge: 'Web App',
    featured: true
  },
  {
    id: 'p7',
    title: 'Tadfinance',
    description: 'Financial solutions, invoicing tools, and cash flow management for solopreneurs.',
    image: '/screenshots/tadfinance-v2.png',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    github: '',
    live: 'https://tadfinance.com',
    categories: ['website'],
    badge: 'Website'
  },
  {
    id: 'p8',
    title: 'Instafood',
    description: 'Fast food delivery and ordering web app with live cart and menu management.',
    image: '/screenshots/instafood.png',
    stack: ['React', 'Tailwind CSS'],
    github: '',
    live: 'https://goinstafood.com/',
    categories: ['website'],
    badge: 'Website'
  },
  {
    id: 'p9',
    title: 'Gym-fit',
    description: 'Modern fitness club landing experience with membership registration onboarding.',
    image: '/screenshots/gym-fit.png',
    stack: ['React', 'Tailwind CSS'],
    github: '',
    live: 'https://gym-fit-pink.vercel.app/',
    categories: ['website'],
    badge: 'Website'
  },
  {
    id: 'p10',
    title: 'Techub Academy',
    description: 'Tech education course platform with interactive syllabus and student learning UX.',
    image: '/screenshots/techub-academy.png',
    stack: ['Vite', 'React', 'Tailwind CSS'],
    github: '',
    live: 'https://techub-academy.vercel.app/',
    categories: ['web-app'],
    badge: 'Web App'
  }
]

export const timeline = [
  {
    company: 'Crednet Technologies',
    role: 'Junior Frontend Engineer',
    range: '2025 — Present',
    description: 'Develop and maintain frontend features using modern frameworks, collaborate with backend engineers to integrate APIs, and ensure responsive, user-friendly interfaces across web applications.',
    skills: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'API Integration']
  },
  {
    company: 'Freelance Frontend Developer',
    role: 'Frontend Engineer',
    range: '2024 — 2025',
    description: 'Worked directly with clients to create custom web solutions, implemented intuitive UI components, and translated designs into functional, interactive websites.',
    skills: ['React', 'Framer Motion', 'JavaScript', 'Responsive Design', 'Figma']
  }
]
