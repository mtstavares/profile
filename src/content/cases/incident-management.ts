import type { ProjectCase } from '../../types/content'
export const incidentManagementCase: ProjectCase = {
  sections: [
    {
      id: 'overview',
      paragraphs: {
        'pt-BR': [
          'Aplicação web Python/Flask para registrar e acompanhar incidentes, observações, anexos, responsáveis e indicadores. O projeto combina fluxos de resposta a incidentes com engenharia de aplicação e controles no backend.',
        ],
        'en-US': [
          'A Python/Flask web application for recording and tracking incidents, notes, attachments, owners and indicators. It combines incident-response workflows with application engineering and backend controls.',
        ],
      },
    },
    {
      id: 'motivation',
      paragraphs: {
        'pt-BR': [
          'O README descreve a necessidade de centralizar informações antes dispersas em planilhas, documentos e controles separados. A aplicação organiza o histórico e o acompanhamento em um mesmo ambiente.',
        ],
        'en-US': [
          'The README describes a need to centralize information previously spread across spreadsheets, documents and separate records. The application brings history and tracking into one environment.',
        ],
      },
    },
    {
      id: 'solution',
      paragraphs: {
        'pt-BR': [
          'Uma app factory registra blueprints por domínio. Rotas autenticadas delegam autorização, auditoria, sanitização e anexos a serviços. Modelos SQLAlchemy representam incidentes e registros relacionados; migrações versionam o banco.',
        ],
        'en-US': [
          'An application factory registers domain-specific blueprints. Authenticated routes delegate authorization, auditing, sanitization and attachments to services. SQLAlchemy models represent incidents and related records; migrations version the database.',
        ],
      },
    },
    {
      id: 'features',
      bullets: {
        'pt-BR': [
          'Autenticação com Flask-Login e perfis Admin, User e Viewer; permissões de mutação verificadas no servidor.',
          'Cadastro, edição, consulta, filtros, observações e dashboards de incidentes.',
          'Auditoria de ações e negações de acesso, com modelo dedicado e contexto de requisição.',
          'Anexos com nomes de armazenamento gerados, hash SHA-256 e associação ao incidente.',
          'Templates Jinja2, JavaScript e gráficos Plotly; SQLAlchemy e Flask-Migrate no backend.',
        ],
        'en-US': [
          'Flask-Login authentication and Admin, User and Viewer roles; mutation permissions checked on the server.',
          'Incident creation, editing, queries, filters, notes and dashboards.',
          'Action and denied-access auditing with a dedicated model and request context.',
          'Attachments with generated storage names, SHA-256 hashes and incident associations.',
          'Jinja2 templates, JavaScript and Plotly charts; SQLAlchemy and Flask-Migrate on the backend.',
        ],
      },
    },
    {
      id: 'security',
      bullets: {
        'pt-BR': [
          'CSRF é verificado antes de operações de alteração, com token de sessão e comparação constante. A checagem tem exceção explícita no modo de testes.',
          'Descrições HTML passam por Bleach com listas de elementos, atributos e protocolos permitidos, além de limites de tamanho.',
          'Anexos passam por limites de quantidade/tamanho, extensão e assinatura. O armazenamento padrão fica em instance, e a entrega usa rotas autenticadas.',
          'A configuração de produção exige segredo de aplicação e URI de banco no ambiente. O case não inclui valores nem configurações de infraestrutura.',
          'O código demonstra controles, não comprova certificação de segurança nem implantação em produção. O README informa desenvolvimento contínuo.',
        ],
        'en-US': [
          'CSRF is checked before state-changing operations using a session token and constant-time comparison. The check explicitly excludes test mode.',
          'HTML descriptions pass through Bleach allowlists for elements, attributes and protocols, together with size limits.',
          'Attachments undergo count/size, extension and signature checks. Default storage is under instance, with delivery through authenticated routes.',
          'Production configuration requires an application secret and database URI from the environment. This case includes no infrastructure values or configurations.',
          'The code demonstrates controls, not security certification or proof of production deployment. The README describes ongoing development.',
        ],
      },
    },
  ],
  architecture: {
    description: {
      'pt-BR':
        'Separação observada entre interface, rotas, serviços de domínio e persistência.',
      'en-US':
        'Observed separation between interface, routes, domain services and persistence.',
    },
    steps: [
      {
        label: {
          'pt-BR': 'Interface',
          'en-US': 'Interface',
        },
        detail: {
          'pt-BR': 'Jinja2, formulários e dashboards.',
          'en-US': 'Jinja2, forms and dashboards.',
        },
      },
      {
        label: {
          'pt-BR': 'Rotas Flask',
          'en-US': 'Flask routes',
        },
        detail: {
          'pt-BR': 'Sessão, CSRF e autorização.',
          'en-US': 'Session, CSRF and authorization.',
        },
      },
      {
        label: {
          'pt-BR': 'Serviços',
          'en-US': 'Services',
        },
        detail: {
          'pt-BR': 'Incidentes, auditoria, sanitização e anexos.',
          'en-US': 'Incidents, auditing, sanitization and attachments.',
        },
      },
      {
        label: {
          'pt-BR': 'Persistência',
          'en-US': 'Persistence',
        },
        detail: {
          'pt-BR': 'SQLAlchemy, migrações e arquivos privados.',
          'en-US': 'SQLAlchemy, migrations and private files.',
        },
      },
    ],
  },
}
