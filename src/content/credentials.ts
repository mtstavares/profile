import type { Certification, Education } from '../types/content'
export const certifications: readonly Certification[] = [
  {
    id: 'backend-diploma',
    name: {
      'pt-BR': 'Tecnólogo em desenvolvimento Backend',
      'en-US': 'Technology Degree in Back-End Development',
    },
    issuer: 'Universidade Cruzeiro do Sul',
    issuedAt: '2026-08',
    category: 'development',
    credentialId: '221.221.aceab31c576d',
    credentialUrl:
      'https://diplomadigital.cruzeirodosul.edu.br/221.221.aceab31c576d',
  },
  {
    id: 'iso27001',
    name: {
      'pt-BR': 'ISO/IEC 27001 Information Security Associate',
      'en-US': 'ISO/IEC 27001 Information Security Associate',
    },
    issuer: 'SkillFront',
    credentialId: '33204241563890',
    credentialUrl: 'https://www.skillfront.com/Badges/33204241563890',
    issuedAt: '2026',
    category: 'cybersecurity',
    featured: true,
    resumeSelected: true,
  },
  {
    id: 'sophos',
    credentialUrl:
      'https://drive.google.com/file/d/19XEQeTEF6Meceo2FeYBluUVS9jAPAyro/view?usp=sharing',
    credentialId: 'd8114725-3f19-4b77-a520-422c1beb5321',
    name: {
      'pt-BR': 'CT15 - Sophos Endpoint v6.0 - eLearning',
      'en-US': 'CT15 - Sophos Endpoint v6.0 - eLearning',
    },
    issuer: 'Sophos',
    issuedAt: '2026-04',
    category: 'cybersecurity',
    featured: true,
    resumeSelected: true,
  },
  {
    id: 'cpps',
    credentialUrl:
      'https://academy.hackandfix.com/certificate-page/?user=16040&course=53700',
    credentialId: '4939-4263-3418-5468',
    name: {
      'pt-BR': 'Certified Phishing Prevention Specialist (CPPS)',
      'en-US': 'Certified Phishing Prevention Specialist (CPPS)',
    },
    issuer: 'Hack & Fix',
    issuedAt: '2025-03',
    category: 'cybersecurity',
    featured: true,
    resumeSelected: true,
  },
  {
    id: 'cisco-cyber',
    credentialUrl:
      'https://www.credly.com/badges/4b3cf574-3cfe-4ebf-8c23-eeba6d578729/linked_in_profile',
    credentialId: '4b3cf574-3cfe-4ebf-8c23-eeba6d578729',
    name: {
      'pt-BR': 'Introduction to Cybersecurity',
      'en-US': 'Introduction to Cybersecurity',
    },
    issuer: 'Cisco',
    issuedAt: '2024-07',
    category: 'cybersecurity',
    featured: true,
    resumeSelected: true,
  },
  {
    id: 'buffer-overflow',
    credentialUrl: 'https://xpsec.academy/certificates/validate',
    name: {
      'pt-BR': 'Buffer Overflow para Pentesters',
      'en-US': 'Buffer Overflow para Pentesters',
    },
    issuer: 'XPSec Security',
    issuedAt: '2025-08',
    category: 'cybersecurity',
    credentialId: 'f6b4695244',
    featured: true,
    resumeSelected: true,
  },
  {
    id: 'dark-web',
    credentialUrl: 'https://xpsec.academy/certificates/validate',
    name: {
      'pt-BR': 'Dark Web e Privacidade',
      'en-US': 'Dark Web e Privacidade',
    },
    issuer: 'XPSec Security',
    issuedAt: '2025-11',
    category: 'cybersecurity',
    credentialId: 'd03d07e90a',
  },
  {
    id: 'ccna-networks',
    credentialUrl:
      'https://www.credly.com/badges/a98d1893-defb-4111-8f45-99500ebfab26/linked_in_profile',
    name: {
      'pt-BR': 'CCNA: Introduction to Networks',
      'en-US': 'CCNA: Introduction to Networks',
    },
    issuer: 'Cisco',
    issuedAt: '2024-05',
    category: 'networking',
    credentialId: 'a98d1893-defb-4111-8f45-99500ebfab26',
    featured: true,
    resumeSelected: true,
  },
  {
    id: 'ccna-switching',
    credentialUrl:
      'https://www.credly.com/badges/d13dd381-2b19-4a76-b0c2-764a691cd18b/linked_in_profile',
    name: {
      'pt-BR': 'CCNA: Switching, Routing, and Wireless Essentials',
      'en-US': 'CCNA: Switching, Routing, and Wireless Essentials',
    },
    issuer: 'Cisco',
    issuedAt: '2024-07',
    category: 'networking',
    credentialId: 'd13dd381-2b19-4a76-b0c2-764a691cd18b',
    resumeSelected: true,
  },
  {
    id: 'google-networks',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/records/BQH0E8K8QSP3',
    name: {
      'pt-BR': 'The Bits and Bytes of Computer Networking',
      'en-US': 'The Bits and Bytes of Computer Networking',
    },
    issuer: 'Google',
    issuedAt: '2025-08',
    category: 'networking',
    credentialId: 'BQH0E8K8QSP3',
  },
  {
    id: 'google-admin',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/records/33ADGVYS3ODP',
    credentialId: '33ADGVYS3ODP',
    name: {
      'pt-BR': 'System Administration and IT Infrastructure Services',
      'en-US': 'System Administration and IT Infrastructure Services',
    },
    issuer: 'Google',
    issuedAt: '2025-12',
    category: 'networking',
  },
  {
    id: 'google-os',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/records/EDNDRHT9KEAK',
    name: {
      'pt-BR': 'Operating Systems and You: Becoming a Power User',
      'en-US': 'Operating Systems and You: Becoming a Power User',
    },
    issuer: 'Google',
    issuedAt: '2025-11',
    category: 'networking',
    credentialId: 'EDNDRHT9KEAK',
  },
  {
    id: 'google-support',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/records/TFAIIXCC082Z',
    name: {
      'pt-BR': 'Technical Support Fundamentals',
      'en-US': 'Technical Support Fundamentals',
    },
    issuer: 'Google',
    issuedAt: '2025-06',
    category: 'networking',
    credentialId: 'TFAIIXCC082Z',
  },
  {
    id: 'react',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-3949d969-deae-45c3-8ad8-3ad7e6659b18/',
    credentialId: 'UC-3949d969-deae-45c3-8ad8-3ad7e6659b18',
    name: {
      'pt-BR': 'React do Zero a Maestria',
      'en-US': 'React do Zero a Maestria',
    },
    issuer: 'Udemy',
    issuedAt: '2025-09',
    category: 'development',
  },
  {
    id: 'python',
    name: {
      'pt-BR': 'Aprendendo com Python',
      'en-US': 'Aprendendo com Python',
    },
    issuer: 'ENAP',
    issuedAt: '2023-08',
    category: 'development',
    credentialId: 'gxci10187095Fkpb',
    expiresAt: '2033-12',
  },
  {
    id: 'javascript',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-fc2e42a2-adc0-4c92-a320-58a24b3306f9/',
    name: {
      'pt-BR': 'JavaScript Begginer',
      'en-US': 'JavaScript Begginer',
    },
    issuer: 'Udemy',
    issuedAt: '2023-05',
    category: 'development',
    credentialId: 'UC-fc2e42a2-adc0-4c92-a320-58a24330619',
  },
  {
    id: 'html-css',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-3197e800-b9f7-4ec2-867a-9a91b27e6104/',
    name: {
      'pt-BR': 'HTML5 e CSS3: Técnicas avançadas',
      'en-US': 'HTML5 e CSS3: Técnicas avançadas',
    },
    issuer: 'Udemy',
    issuedAt: '2023-06',
    category: 'development',
    credentialId: 'UC-3197e800-b9f7-4ec2-867a-9a91b21e6104',
  },
]
export const education: readonly Education[] = [
  {
    id: 'back-end',
    institution: 'Universidade Cruzeiro do Sul',
    qualification: {
      'pt-BR': 'Tecnologia em Desenvolvimento Back-End',
      'en-US': 'Technology Degree in Back-End Development',
    },
    completedAt: '2026',
  },
  {
    id: 'it-technician',
    institution: 'ETEC João Belarmino',
    qualification: {
      'pt-BR': 'Técnico em Informática',
      'en-US': 'Technical Diploma in Information Technology',
    },
    period: { start: '2016', end: '2018' },
  },
]
