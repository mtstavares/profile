import { localAiDlpCase } from './cases/local-ai-dlp'
import { incidentManagementCase } from './cases/incident-management'
import { osintNetworkCase } from './cases/osint-network-monitor'
import { telegramSearchCase } from './cases/telegram-search'
import { consultaCredenciaisCase } from './cases/consulta-credenciais'
import type { Project } from '../types/content'

// Static editorial content verified against the pinned repository revisions.
export const projects: readonly Project[] = [
  {
    id: 'incident-management',
    slug: 'incident-management',
    caseStudy: incidentManagementCase,
    listingFeatured: true,
    stage: { 'pt-BR': 'Em desenvolvimento', 'en-US': 'In development' },
    evidence: {
      revision: 'e9ef86dabee19ceb224ba4439b3cd33e68e6fe07',
      reviewedAt: '2026-09-24',
      files: [
        'README.md',
        'requirements.txt',
        'app/__init__.py',
        'app/services/permissions.py',
        'app/services/attachment_service.py',
        'app/services/content_sanitizer.py',
      ],
    },
    repository: 'mtstavares/controle_incidentes',
    status: 'reviewed',
    featured: true,
    description: {
      'pt-BR':
        'Plataforma de gestão de incidentes com controle de acesso por papéis, dashboards e registros de auditoria.',
      'en-US':
        'An incident management platform with role-based access control, dashboards and audit logs.',
    },
    highlights: {
      'pt-BR': [
        'RBAC, proteção CSRF, validação de entrada e sanitização de HTML.',
        'Armazenamento privado de anexos.',
      ],
      'en-US': [
        'RBAC, CSRF protection, input validation and HTML sanitization.',
        'Private attachment storage.',
      ],
    },
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'RBAC'],
    name: {
      'pt-BR': 'Incident Management Platform',
      'en-US': 'Incident Management Platform',
    },
    category: {
      'pt-BR': 'SecOps / Incident Response',
      'en-US': 'SecOps / Incident Response',
    },
  },
  {
    id: 'local-ai-dlp',
    slug: 'local-ai-dlp',
    caseStudy: localAiDlpCase,
    listingFeatured: true,
    stage: { 'pt-BR': 'MVP · v0.1.0', 'en-US': 'MVP · v0.1.0' },
    evidence: {
      revision: 'ab222594fa59ad53acbe04dd9f4069c26323f628',
      reviewedAt: '2026-09-24',
      files: [
        'README.md',
        'manifest.json',
        'src/dlp/scanner.js',
        'src/dlp/validators.js',
        'src/policies/policy-engine.js',
        'src/content/interceptor.js',
      ],
    },
    repository: 'mtstavares/dlp_local',
    status: 'reviewed',
    featured: true,
    description: {
      'pt-BR':
        'Extensão Chrome Manifest V3 para proteger prompts de IA contra vazamento de dados, com detecção local de PII e secrets.',
      'en-US':
        'A Chrome Manifest V3 extension protecting AI prompts against data leakage through local PII and secrets detection.',
    },
    highlights: {
      'pt-BR': [
        'Processamento local, sem APIs externas de classificação.',
        'Políticas ALLOW / WARN / MASK / BLOCK.',
        'Privacidade por padrão e permissões mínimas.',
      ],
      'en-US': [
        'Local processing, without external classification APIs.',
        'ALLOW / WARN / MASK / BLOCK policies.',
        'Privacy by default and minimal permissions.',
      ],
    },
    technologies: ['JavaScript', 'Chrome Manifest V3', 'Node.js'],
    name: { 'pt-BR': 'Local AI DLP', 'en-US': 'Local AI DLP' },
    category: {
      'pt-BR': 'Security Engineering / Data Loss Prevention',
      'en-US': 'Security Engineering / Data Loss Prevention',
    },
  },
  {
    id: 'osint-network',
    slug: 'osint-network-monitor',
    caseStudy: osintNetworkCase,
    listingFeatured: false,
    stage: { 'pt-BR': 'Código disponível', 'en-US': 'Source available' },
    evidence: {
      revision: '032fc5fa7fb07d1bda6746dc8758313f899e940e',
      reviewedAt: '2026-09-24',
      files: ['README.md', 'requirements.txt', 'osint_monitor.py'],
    },
    repository: 'mtstavares/osint_monitor',
    status: 'reviewed',
    featured: true,
    description: {
      'pt-BR':
        'Monitoramento de conexões de rede com enriquecimento de IPs externos e correlação entre conexões e processos.',
      'en-US':
        'Network connection monitoring with external IP enrichment and correlation between connections and processes.',
    },
    highlights: {
      'pt-BR': [
        'Análise com AbuseIPDB e VirusTotal.',
        'Relatórios em CSV e HTML.',
      ],
      'en-US': [
        'Analysis with AbuseIPDB and VirusTotal.',
        'CSV and HTML reports.',
      ],
    },
    technologies: ['Python', 'AbuseIPDB', 'VirusTotal'],
    name: {
      'pt-BR': 'OSINT Network Monitor',
      'en-US': 'OSINT Network Monitor',
    },
    category: {
      'pt-BR': 'Security Automation / OSINT',
      'en-US': 'Security Automation / OSINT',
    },
  },
  {
    id: 'telegram-search',
    slug: 'telegram-search',
    caseStudy: telegramSearchCase,
    listingFeatured: false,
    stage: { 'pt-BR': 'Código disponível', 'en-US': 'Source available' },
    evidence: {
      revision: '21a4d9b462859899d3a0e5a5279a326aeb8e94e4',
      reviewedAt: '2026-09-24',
      files: ['README.md', 'telegram_search.py'],
    },
    repository: 'mtstavares/telegram-search',
    technologies: ['Python', 'Telethon', 'CSV'],
    description: {
      'pt-BR':
        'Ferramenta de linha de comando para pesquisar termos em canais públicos configurados e exportar resultados em CSV.',
      'en-US':
        'A command-line tool for searching terms in configured public channels and exporting results to CSV.',
    },
    status: 'reviewed',
    name: { 'pt-BR': 'Telegram Search Tool', 'en-US': 'Telegram Search Tool' },
    category: {
      'pt-BR': 'OSINT / Threat Intelligence',
      'en-US': 'OSINT / Threat Intelligence',
    },
  },
  {
    id: 'credentials',
    slug: 'consulta-credenciais',
    caseStudy: consultaCredenciaisCase,
    listingFeatured: false,
    stage: { 'pt-BR': 'Código disponível', 'en-US': 'Source available' },
    evidence: {
      revision: '2c6551d5dc28831b060f962b04bf851f1ce25e35',
      reviewedAt: '2026-09-24',
      files: ['README.md', 'ConsultaCredenciais.py'],
    },
    repository: 'mtstavares/ConsultaCredenciais',
    name: { 'pt-BR': 'ConsultaCredenciais', 'en-US': 'ConsultaCredenciais' },
    category: {
      'pt-BR': 'Security Automation / OSINT defensivo',
      'en-US': 'Security Automation / Defensive OSINT',
    },
    technologies: ['Python', 'OpenPyXL', 'Requests', 'Selenium'],
    description: {
      'pt-BR':
        'Automação de análise de planilhas de credenciais, resolução de identidades e consolidação de relatórios para uso autorizado.',
      'en-US':
        'Automation for credential spreadsheet analysis, identity resolution and report consolidation within an authorized scope.',
    },
    status: 'reviewed',
  },
]
