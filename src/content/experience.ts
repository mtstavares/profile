import type { Experience } from '../types/content'
const pmesp = {
  'pt-BR': 'Polícia Militar do Estado de São Paulo — PMESP',
  'en-US': 'São Paulo State Military Police — PMESP',
}
export const experiences: readonly Experience[] = [
  {
    id: 'cybersecurity',
    organization: pmesp,
    period: { start: '2024' },
    role: {
      'pt-BR': 'Divisão de Cibersegurança — DTIC',
      'en-US': 'Cybersecurity Division — DTIC',
    },
    description: {
      'pt-BR':
        'Atuação em Blue Team, monitoramento de segurança e investigação e resposta a incidentes, com foco em endpoints, redes e ambientes Windows/Active Directory.',
      'en-US':
        'Blue Team operations, security monitoring and incident investigation and response, focused on endpoints, networks and Windows/Active Directory environments.',
    },
    highlights: {
      'pt-BR': [
        'Análise e correlação de eventos de SIEM, EDR/XDR, IDS/IPS e firewalls.',
        'Investigação de tráfego de rede e eventos de segurança em endpoints.',
        'Automação com Python e PowerShell aplicada à segurança.',
      ],
      'en-US': [
        'Analysis and correlation of SIEM, EDR/XDR, IDS/IPS and firewall events.',
        'Investigation of network traffic and endpoint security events.',
        'Python and PowerShell automation applied to security.',
      ],
    },
    skillIds: [
      'blue-team',
      'incident-response',
      'security-monitoring',
      'network-security',
      'security-automation',
    ],
  },
  {
    id: 'network-administration',
    organization: pmesp,
    period: { start: '2022', end: '2024' },
    role: {
      'pt-BR': 'Telemática e Administração de Redes — 23º BPM/M',
      'en-US':
        'IT & Network Administration — 23rd Metropolitan Military Police Battalion',
    },
    description: {
      'pt-BR':
        'Administração da infraestrutura de rede e suporte à continuidade dos serviços tecnológicos do batalhão.',
      'en-US':
        'Network infrastructure administration and support for the continuity of the battalion’s technology services.',
    },
    highlights: {
      'pt-BR': [
        'Disponibilidade de rede, conectividade e troubleshooting.',
        'Suporte à infraestrutura e administração de ativos.',
      ],
      'en-US': [
        'Network availability, connectivity and troubleshooting.',
        'Infrastructure support and asset administration.',
      ],
    },
    skillIds: ['network-security'],
  },
  {
    id: 'emergency-response',
    organization: pmesp,
    period: { start: '2020', end: '2022' },
    role: {
      'pt-BR': 'Atendimento de Emergência — 190',
      'en-US': 'Emergency Response — 190',
    },
    description: {
      'pt-BR':
        'Atuação no atendimento de ocorrências emergenciais em ambiente de alta responsabilidade. A função exigiu preparo técnico, mental e físico, comunicação objetiva, disciplina, trabalho em equipe, tomada de decisão sob pressão e capacidade de lidar com situações críticas.',
      'en-US':
        'Worked in emergency response in a high-responsibility environment requiring technical, mental and physical preparedness, clear communication, discipline, teamwork, decision-making under pressure and the ability to handle critical situations.',
    },
    highlights: { 'pt-BR': [], 'en-US': [] },
    skillIds: [],
  },
  {
    id: 'ype',
    organization: {
      'pt-BR': 'Química Amparo (Ypê)',
      'en-US': 'Química Amparo (Ypê)',
    },
    period: { start: '2019-09', end: '2020-10' },
    role: {
      'pt-BR': 'Operações logísticas e liderança de equipe',
      'en-US': 'Logistics Operations and Team Leadership',
    },
    description: {
      'pt-BR':
        'Trajetória em centro de distribuição, iniciada como auxiliar de armazém, com progressão para operação de transpaleteira e empilhadeira, liderança de equipe e conferência de cargas.',
      'en-US':
        'Worked in distribution centre operations, progressing from warehouse assistant to pallet truck and forklift operator, team leader and load checker.',
    },
    highlights: {
      'pt-BR': [
        'Capacitação em NR-35, NR-33, NR-12 e NR-11 ao longo da trajetória na empresa.',
      ],
      'en-US': [
        'Completed NR-35, NR-33, NR-12 and NR-11 training during this period.',
      ],
    },
    secondary: true,
    skillIds: [],
  },
]
