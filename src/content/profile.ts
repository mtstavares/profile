import photo from '../assets/images/matheus-tavares-profile.jpeg'
import type { Profile } from '../types/content'

export const profile: Profile = {
  name: 'Matheus Tavares',
  wordmark: 'MT',
  role: { 'pt-BR': 'Cybersecurity Analyst', 'en-US': 'Cybersecurity Analyst' },
  headline: {
    'pt-BR':
      'Cybersecurity Analyst | Blue Team & Incident Response | Security Engineering',
    'en-US':
      'Cybersecurity Analyst | Blue Team & Incident Response | Security Engineering',
  },
  focus: {
    'pt-BR': ['Blue Team & Incident Response', 'Security Engineering'],
    'en-US': ['Blue Team & Incident Response', 'Security Engineering'],
  },
  contact: {
    email: 'mts.tavares01@gmail.com',
    phone: { display: '(19) 99678-4443', international: '+5519996784443' },
    location: { 'pt-BR': 'São Paulo, Brasil', 'en-US': 'São Paulo, Brazil' },
  },
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/mtstavares',
      username: 'mtstavares',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/matheus-tavares-ab3153258/',
    },
  ],
  photo: {
    src: photo,
    alt: {
      'pt-BR': 'Retrato de perfil de Matheus Tavares em preto e branco.',
      'en-US': 'Black-and-white side portrait of Matheus Tavares.',
    },
    width: 1082,
    height: 1352,
  },
}
