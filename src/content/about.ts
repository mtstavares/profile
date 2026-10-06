import type { Localized } from '../types/content'
export const positioning: Localized<string> = {
  'pt-BR':
    'Segurança defensiva, investigação de incidentes e engenharia de soluções. Redes e ambientes Windows como contexto; código e automação como ferramentas de trabalho.',
  'en-US':
    'Defensive security, incident investigation and solution engineering. Networks and Windows environments provide the context; code and automation are tools of the trade.',
}
export const about: Localized<readonly string[]> = {
  'pt-BR': [
    'Atuo em Cibersegurança na Polícia Militar do Estado de São Paulo (PMESP), com foco em Blue Team, monitoramento, análise e resposta a incidentes. Meu trabalho envolve investigação de endpoints e eventos de segurança em redes e ambientes Windows/Active Directory.',
    'A análise conecta eventos de SIEM, EDR/XDR, IDS/IPS e firewalls ao contexto do ambiente: tráfego de rede e PCAP, autenticação, correlação de eventos e investigação de atividades anômalas.',
    'Minha formação em Desenvolvimento Back-End, a pós-graduação em andamento em Engenharia de Redes de Computadores e a formação Pentest Profissional, da Desec Security, complementam essa atuação. Esses estudos aprofundam minha compreensão de arquiteturas, protocolos, análise de tráfego e técnicas ofensivas, ampliando minha capacidade de investigar incidentes, aperfeiçoar detecções e desenvolver automações e ferramentas aplicadas à engenharia de segurança.',
  ],
  'en-US': [
    'I work in cybersecurity at the São Paulo State Military Police (PMESP), focusing on Blue Team operations, monitoring, analysis and incident response. My work includes investigating endpoints and security events across networks and Windows/Active Directory environments.',
    'Analysis connects SIEM, EDR/XDR, IDS/IPS and firewall events with their environment: network traffic and PCAP, authentication, event correlation and the investigation of anomalous activity.',
    'My education in Back-End Development, ongoing postgraduate studies in Computer Network Engineering and Desec Security’s Pentest Profissional training complement this work. These studies deepen my understanding of architectures, protocols, traffic analysis and offensive techniques, strengthening my ability to investigate incidents, improve detections and develop automation and tools for security engineering.',
  ],
}
export const supportingTechnologies = [
  'Python',
  'PowerShell',
  'JavaScript / TypeScript',
  'React',
  'Node.js',
  'REST APIs',
  'SQL',
] as const
