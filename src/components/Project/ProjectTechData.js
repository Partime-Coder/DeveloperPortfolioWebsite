import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import {
  SiJavascript,
  SiTailwindcss,
  SiReactrouter,
  SiRedux,
  SiPostman,
  SiGit,
  SiGithub
} from 'react-icons/si'
import { BiServer } from 'react-icons/bi'




export const TECH = {
  HTML: {
    id: 'html',
    label: 'HTML',
    icon: FaHtml5,
    color: '#E34F26',
  },
  CSS: {
    id: 'css',
    label: 'CSS',
    icon: FaCss3Alt,
    color: '#1572B6',
  },
  JS: {
    id: 'javascript',
    label: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
  },
  TAILWIND: {
    id: 'tailwind',
    label: 'Tailwind',
    icon: SiTailwindcss,
    color: '#38BDF8',
  },
  REACT: {
    id: 'react',
    label: 'React',
    icon: FaReact,
    color: '#61DAFB',
  },
  ROUTER: {
    id: 'router',
    label: 'React Router',
    icon: SiReactrouter,
    color: '#CA4245',
  },
  REDUX: {
    id: 'redux',
    label: 'Reduxtoolkit',
    icon: SiRedux,
    color: '#764ABC',
  },
  API: {
    id: 'api',
    label: 'REST API',
    icon: BiServer,
    color: '#FF6C37',
  },
  GIT: {
    id: 'git',
    label: 'Git',
    icon: SiGit,
    color: '#F05032',
  },
  GITHUB: {
    id: 'github',
    label: 'GitHub',
    icon: SiGithub,
    color: '#ffffff',
  },
}