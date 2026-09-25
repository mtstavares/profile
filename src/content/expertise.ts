import type { Skill } from '../types/content'
export const expertise: readonly Skill[] = [
  {
    id: 'blue-team',
    name: { 'pt-BR': 'Blue Team', 'en-US': 'Blue Team' },
    category: 'security',
    description: {
      'pt-BR':
        'Segurança defensiva orientada ao contexto de endpoints, redes e identidades.',
      'en-US':
        'Defensive security informed by endpoint, network and identity context.',
    },
  },
  {
    id: 'incident-response',
    name: { 'pt-BR': 'Incident Response', 'en-US': 'Incident Response' },
    category: 'security',
    description: {
      'pt-BR':
        'Análise de evidências, investigação de atividades anômalas e resposta a incidentes.',
      'en-US':
        'Evidence analysis, investigation of anomalous activity and incident response.',
    },
  },
  {
    id: 'security-engineering',
    name: { 'pt-BR': 'Security Engineering', 'en-US': 'Security Engineering' },
    category: 'engineering',
    description: {
      'pt-BR':
        'Desenvolvimento de ferramentas e controles aplicados a problemas de segurança.',
      'en-US': 'Building tools and controls for practical security problems.',
    },
  },
  {
    id: 'network-security',
    name: { 'pt-BR': 'Network Security', 'en-US': 'Network Security' },
    category: 'security',
    description: {
      'pt-BR':
        'Análise de tráfego e PCAP, firewalls e eventos relacionados à rede.',
      'en-US':
        'Network traffic and PCAP analysis, firewalls and network-related events.',
    },
  },
  {
    id: 'security-monitoring',
    name: { 'pt-BR': 'Security Monitoring', 'en-US': 'Security Monitoring' },
    category: 'security',
    description: {
      'pt-BR':
        'Monitoramento e correlação de eventos com SIEM, EDR/XDR e IDS/IPS.',
      'en-US':
        'Monitoring and event correlation with SIEM, EDR/XDR and IDS/IPS.',
    },
  },
  {
    id: 'security-automation',
    name: { 'pt-BR': 'Security Automation', 'en-US': 'Security Automation' },
    category: 'software',
    description: {
      'pt-BR':
        'Python e PowerShell aplicados a rotinas de análise e ferramentas de segurança.',
      'en-US':
        'Python and PowerShell applied to analysis workflows and security tooling.',
    },
  },
]
