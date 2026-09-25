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
    'Minha formação em Desenvolvimento Back-End e a base em infraestrutura e redes complementam essa atuação. Aplico desenvolvimento à automação, à criação de ferramentas e à engenharia de segurança.',
  ],
  'en-US': [
    'I work in cybersecurity at the São Paulo State Military Police (PMESP), focusing on Blue Team operations, monitoring, analysis and incident response. My work includes investigating endpoints and security events across networks and Windows/Active Directory environments.',
    'Analysis connects SIEM, EDR/XDR, IDS/IPS and firewall events with their environment: network traffic and PCAP, authentication, event correlation and the investigation of anomalous activity.',
    'My education in Back-End Development and technical background in infrastructure and networks support this work. I apply software development to automation, tooling and security engineering.',
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
