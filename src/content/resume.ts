import { expertise } from './expertise'
import { supportingTechnologies } from './about'
import type { Localized, Locale } from '../types/content'

export const resumeSummary: Localized<string> = {
  'pt-BR':
    'Atuação em Cibersegurança na PMESP, com foco em Blue Team, monitoramento, investigação e resposta a incidentes em endpoints, redes e ambientes Windows/Active Directory. Formação em Desenvolvimento Back-End e base em infraestrutura e redes, aplicadas à engenharia de segurança, criação de ferramentas e automação com Python e PowerShell.',
  'en-US':
    'Cybersecurity work at PMESP focused on Blue Team operations, monitoring, investigation and incident response across endpoints, networks and Windows/Active Directory environments. Back-End Development education and an infrastructure and networking background applied to security engineering, tooling and automation with Python and PowerShell.',
}
export const resumeSkillGroups = [
  {
    name: { 'pt-BR': 'Segurança', 'en-US': 'Security' },
    items: [
      ...expertise.map((s) => s.name['pt-BR']),
      'SIEM',
      'EDR/XDR',
      'IDS/IPS',
      'Firewalls',
      'PCAP',
    ],
  },
  {
    name: { 'pt-BR': 'Sistemas e redes', 'en-US': 'Systems and networks' },
    items: ['Windows', 'Linux', 'Active Directory', 'Network troubleshooting'],
  },
  {
    name: {
      'pt-BR': 'Automação e desenvolvimento',
      'en-US': 'Automation and development',
    },
    items: supportingTechnologies,
  },
] satisfies readonly { name: Localized<string>; items: readonly string[] }[]
export const resumeFiles: Record<Locale, string> = {
  'pt-BR': 'matheus-tavares-cv-pt-br.pdf',
  'en-US': 'matheus-tavares-resume-en.pdf',
}
export const resumeLabels = {
  'pt-BR': {
    summary: 'Resumo Profissional',
    experience: 'Experiência',
    skills: 'Competências Técnicas',
    projects: 'Projetos',
    education: 'Formação',
    certifications: 'Certificações',
    download: 'Baixar PDF PT-BR',
    print: 'Imprimir currículo',
    completed: 'Concluído em',
  },
  'en-US': {
    summary: 'Professional Summary',
    experience: 'Experience',
    skills: 'Technical Skills',
    projects: 'Projects',
    education: 'Education',
    certifications: 'Certifications',
    download: 'Download PDF EN',
    print: 'Print resume',
    completed: 'Completed in',
  },
}
