import type { ProjectCase } from '../../types/content'
export const telegramSearchCase: ProjectCase = {
  sections: [
    {
      id: 'overview',
      paragraphs: {
        'pt-BR': [
          'Ferramenta CLI em Python que pesquisa um termo em uma lista predefinida de canais públicos do Telegram e exporta mensagens encontradas para CSV. O posicionamento é de tooling para OSINT e Threat Intelligence.',
        ],
        'en-US': [
          'A Python CLI tool that searches a term across a predefined list of public Telegram channels and exports matching messages to CSV. Its focus is OSINT and threat-intelligence tooling.',
        ],
      },
    },
    {
      id: 'solution',
      paragraphs: {
        'pt-BR': [
          'Telethon abre uma sessão persistente, executa SearchRequest por canal e reúne os resultados. O argumento da linha de comando fornece o termo de busca; mensagens são normalizadas para uma linha antes da exportação.',
        ],
        'en-US': [
          'Telethon opens a persistent session, executes SearchRequest for each channel and collects the results. A command-line argument supplies the search term; message text is normalized to a single line before export.',
        ],
      },
    },
    {
      id: 'features',
      bullets: {
        'pt-BR': [
          'CSV com canal, data, identificador do remetente e mensagem.',
          'Tratamento de erro por canal, retornando lista vazia quando a consulta falha.',
          'A implementação solicita até 100 mensagens por canal, sem paginação no fluxo lido. Não é apresentada como coleta exaustiva.',
        ],
        'en-US': [
          'CSV with channel, date, sender identifier and message.',
          'Per-channel error handling, returning an empty list when a query fails.',
          'The implementation requests up to 100 messages per channel without pagination in the reviewed flow. It is not presented as exhaustive collection.',
        ],
      },
    },
    {
      id: 'security',
      bullets: {
        'pt-BR': [
          'Credenciais de aplicação são lidas do ambiente; a sessão persistente deve ser protegida. O case não inclui credenciais, sessões nem resultados reais.',
          'O escopo documentado é a busca em canais públicos configurados. Não há alegação de acesso a conversas privadas ou invasão de contas.',
          'Mensagens exportadas podem conter dados pessoais; a exposição pública de resultados não faz parte deste portfólio.',
        ],
        'en-US': [
          'Application credentials are read from the environment; the persistent session must be protected. This case includes no credentials, sessions or real results.',
          'The documented scope is searching configured public channels. No access to private conversations or account compromise is claimed.',
          'Exported messages may contain personal data; publishing collected results is outside this portfolio.',
        ],
      },
    },
  ],
  architecture: {
    description: {
      'pt-BR': 'Fluxo sequencial presente no script.',
      'en-US': 'Sequential flow present in the script.',
    },
    steps: [
      {
        label: {
          'pt-BR': 'Termo',
          'en-US': 'Term',
        },
        detail: {
          'pt-BR': 'Argumento da CLI.',
          'en-US': 'CLI argument.',
        },
      },
      {
        label: {
          'pt-BR': 'Sessão',
          'en-US': 'Session',
        },
        detail: {
          'pt-BR': 'Cliente Telethon autenticado.',
          'en-US': 'Authenticated Telethon client.',
        },
      },
      {
        label: {
          'pt-BR': 'Busca',
          'en-US': 'Search',
        },
        detail: {
          'pt-BR': 'SearchRequest por canal configurado.',
          'en-US': 'SearchRequest per configured channel.',
        },
      },
      {
        label: {
          'pt-BR': 'CSV',
          'en-US': 'CSV',
        },
        detail: {
          'pt-BR': 'Campos estruturados das mensagens.',
          'en-US': 'Structured message fields.',
        },
      },
    ],
  },
}
