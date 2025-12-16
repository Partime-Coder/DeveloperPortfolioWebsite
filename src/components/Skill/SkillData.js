import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import {
  SiJavascript,
  SiTailwindcss,
  SiReactrouter,
  SiRedux,
  SiGit,
  SiGithub
} from 'react-icons/si'
import { BiServer } from 'react-icons/bi'

export const Skills = {
  HTML: {
    id: 'html',
    label: 'HTML',
    icon: FaHtml5,
    color: '#E34F26',
    level: 90,
    points: [
      'Semantic HTML',
      'Accessibility (ARIA)',
      'SEO-friendly structure'
    ]
  },

  CSS: {
    id: 'css',
    label: 'CSS',
    icon: FaCss3Alt,
    color: '#1572B6',
    level: 85,
    points: [
      'Flexbox & Grid',
      'Responsive layouts',
      'Animations & transitions'
    ]
  },

  JS: {
    id: 'javascript',
    label: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    level: 80,
    points: [
      'ES6+ syntax',
      'Async / Await',
      'DOM manipulation'
    ]
  },

  TAILWIND: {
    id: 'tailwind',
    label: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#38BDF8',
    level: 85,
    points: [
      'Utility-first styling',
      'Responsive design',
      'Custom themes'
    ]
  },

  REACT: {
    id: 'react',
    label: 'React',
    icon: FaReact,
    color: '#61DAFB',
    level: 80,
    points: [
      'Hooks',
      'Component architecture',
      'Performance optimization'
    ]
  },

  ROUTER: {
    id: 'router',
    label: 'React Router',
    icon: SiReactrouter,
    color: '#CA4245',
    level: 70,
    points: [
      'Nested routes',
      'Protected routes',
      'Dynamic routing'
    ]
  },

  REDUX: {
    id: 'redux',
    label: 'Redux Toolkit',
    icon: SiRedux,
    color: '#764ABC',
    level: 65,
    points: [
      'RTK slices',
      'Async thunks',
      'Global state'
    ]
  },

  API: {
    id: 'api',
    label: 'REST API',
    icon: BiServer,
    color: '#FF6C37',
    level: 70,
    points: [
      'CRUD operations',
      'REST principles',
      'API integration'
    ]
  },

  GIT: {
    id: 'git',
    label: 'Git',
    icon: SiGit,
    color: '#F05032',
    level: 75,
    points: [
      'Branching',
      'Rebasing',
      'Conflict resolution'
    ]
  },

  GITHUB: {
    id: 'github',
    label: 'GitHub',
    icon: SiGithub,
    color: '#ffffff',
    level: 75,
    points: [
      'Pull requests',
      'Issues & projects',
      'CI basics'
    ]
  }
}
