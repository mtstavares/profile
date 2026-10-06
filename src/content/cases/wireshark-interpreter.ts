import type { ProjectCase } from '../../types/content'

export const wiresharkInterpreterCase: ProjectCase = {
  sections: [
    {
      id: 'overview',
      paragraphs: {
        'pt-BR': [
          'Aplicação web que transforma capturas PCAP e PCAPNG em análises de segurança legíveis, reproduzíveis e vinculadas às evidências originais. O projeto foi desenvolvido como laboratório de apoio aos estudos e à interpretação das atividades da formação Pentest Profissional, da Desec Security.',
        ],
        'en-US': [
          'A web application that turns PCAP and PCAPNG captures into readable, reproducible security analyses linked to the original evidence. The project was developed as a study lab supporting the interpretation of activities from Desec Security’s Pentest Profissional training.',
        ],
      },
    },
    {
      id: 'motivation',
      paragraphs: {
        'pt-BR': [
          'Capturas de rede podem reunir milhares de pacotes, hosts e protocolos. A proposta é reduzir o esforço inicial de triagem sem ocultar a evidência técnica nem substituir a validação humana no Wireshark.',
        ],
        'en-US': [
          'Network captures may contain thousands of packets, hosts and protocols. The goal is to reduce initial triage effort without hiding technical evidence or replacing human validation in Wireshark.',
        ],
      },
    },
    {
      id: 'solution',
      paragraphs: {
        'pt-BR': [
          'O backend em FastAPI valida e armazena capturas, executa extração offline com TShark, normaliza eventos e fluxos e aplica detectores determinísticos. Os resultados alimentam uma interface React e relatórios JSON, HTML e PDF.',
          'Zeek e Suricata podem complementar a análise. Cada finding permanece associado a horário, origem, destino, severidade, confiança e referências de evidência.',
        ],
        'en-US': [
          'The FastAPI backend validates and stores captures, runs offline extraction with TShark, normalizes events and flows, and applies deterministic detectors. Results feed a React interface and JSON, HTML and PDF reports.',
          'Zeek and Suricata can complement the analysis. Each finding remains associated with time, source, destination, severity, confidence and evidence references.',
        ],
      },
    },
    {
      id: 'features',
      bullets: {
        'pt-BR': [
          'Upload validado de arquivos PCAP e PCAPNG.',
          'Inventário de hosts, serviços, comunicações e contexto de ativos.',
          'Detecção de varreduras, abuso de autenticação, DNS suspeito, possível beaconing e protocolos inseguros.',
          'Enriquecimento offline com referências CWE e MITRE ATT&CK.',
          'Relatórios determinísticos com hash de integridade, sem dependência de LLM.',
        ],
        'en-US': [
          'Validated PCAP and PCAPNG uploads.',
          'Inventory of hosts, services, communications and asset context.',
          'Detection of scans, authentication abuse, suspicious DNS, possible beaconing and insecure protocols.',
          'Offline enrichment with CWE and MITRE ATT&CK references.',
          'Deterministic reports with integrity hashes and no LLM dependency.',
        ],
      },
    },
    {
      id: 'security',
      bullets: {
        'pt-BR': [
          'A aplicação auxilia a investigação e não trata um alerta isolado como comprovação de comprometimento.',
          'Capturas e relatórios podem conter dados sensíveis e exigem armazenamento e controle de acesso adequados.',
          'A validação TCP opcional opera sem payload, com allowlist, dupla aprovação, trilha de auditoria e política deny-by-default.',
          'Credenciais observadas em protocolos sem criptografia são tratadas como evidência forense sensível e não são reproduzidas neste portfólio.',
        ],
        'en-US': [
          'The application supports investigation and does not treat an isolated alert as proof of compromise.',
          'Captures and reports may contain sensitive data and require appropriate storage and access control.',
          'Optional TCP validation sends no payload and uses an allowlist, dual approval, an audit trail and a deny-by-default policy.',
          'Credentials observed in clear-text protocols are treated as sensitive forensic evidence and are not reproduced in this portfolio.',
        ],
      },
    },
    {
      id: 'lessons',
      paragraphs: {
        'pt-BR': [
          'O projeto aproxima análise de tráfego, resposta a incidentes e engenharia de software. A implementação reforça que automação útil precisa preservar contexto, limitações e rastreabilidade para apoiar decisões técnicas.',
        ],
        'en-US': [
          'The project connects traffic analysis, incident response and software engineering. Its implementation reinforces that useful automation must preserve context, limitations and traceability to support technical decisions.',
        ],
      },
    },
  ],
  architecture: {
    description: {
      'pt-BR': 'Pipeline determinístico documentado no repositório.',
      'en-US': 'Deterministic pipeline documented in the repository.',
    },
    steps: [
      {
        label: { 'pt-BR': 'Captura', 'en-US': 'Capture' },
        detail: {
          'pt-BR': 'Validação e armazenamento de PCAP/PCAPNG.',
          'en-US': 'PCAP/PCAPNG validation and storage.',
        },
      },
      {
        label: { 'pt-BR': 'Extração', 'en-US': 'Extraction' },
        detail: {
          'pt-BR': 'TShark, com Zeek e Suricata opcionais.',
          'en-US': 'TShark, with optional Zeek and Suricata.',
        },
      },
      {
        label: { 'pt-BR': 'Normalização', 'en-US': 'Normalization' },
        detail: {
          'pt-BR': 'Pacotes convertidos em eventos e fluxos.',
          'en-US': 'Packets converted into events and flows.',
        },
      },
      {
        label: { 'pt-BR': 'Detecção', 'en-US': 'Detection' },
        detail: {
          'pt-BR': 'Regras determinísticas geram findings.',
          'en-US': 'Deterministic rules produce findings.',
        },
      },
      {
        label: { 'pt-BR': 'Relatório', 'en-US': 'Report' },
        detail: {
          'pt-BR': 'Interface web e saídas JSON, HTML e PDF.',
          'en-US': 'Web interface and JSON, HTML and PDF outputs.',
        },
      },
    ],
  },
}
