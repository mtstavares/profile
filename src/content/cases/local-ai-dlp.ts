import type { ProjectCase } from '../../types/content'
export const localAiDlpCase: ProjectCase = {
  sections: [
    {
      id: 'overview',
      paragraphs: {
        'pt-BR': [
          'Extensão Chrome Manifest V3 que analisa prompts textuais no ChatGPT antes do envio pelos caminhos de interação monitorados. O motor de DLP é JavaScript local, sem API de classificação ou dependências externas no manifesto de pacotes.',
        ],
        'en-US': [
          'A Chrome Manifest V3 extension that analyzes textual ChatGPT prompts before submission through monitored interaction paths. Its DLP engine runs locally in JavaScript, without a classification API or external package dependencies.',
        ],
      },
    },
    {
      id: 'motivation',
      paragraphs: {
        'pt-BR': [
          'Trechos de código, configurações e registros copiados para uma IA podem conter dados pessoais ou credenciais. O README propõe reduzir esse compartilhamento acidental no ponto de interação, antes do envio.',
        ],
        'en-US': [
          'Code, configuration and log excerpts copied into an AI tool may contain personal data or credentials. The README proposes reducing accidental disclosure at the point of interaction, before submission.',
        ],
      },
    },
    {
      id: 'solution',
      paragraphs: {
        'pt-BR': [
          'Um content script captura colagem e tentativas de envio. O adaptador do editor lê o texto, o scanner reúne achados e o motor de políticas escolhe a ação mais restritiva. MASK altera o campo com placeholders e exige revisão antes de um novo envio.',
          'A política recebe todos os achados antes da resolução de sobreposições: eliminar uma sobreposição para mascaramento não pode rebaixar uma decisão BLOCK. O build Node.js reúne os módulos e incorpora a política ao bundle.',
        ],
        'en-US': [
          'A content script captures paste and submission attempts. An editor adapter reads the text, the scanner collects findings and the policy engine selects the most restrictive action. MASK replaces values with placeholders and requires review before another submission.',
          'The policy receives all findings before overlap resolution: removing an overlap for masking must not downgrade a BLOCK decision. A Node.js build assembles the modules and embeds the policy in the bundle.',
        ],
      },
    },
    {
      id: 'features',
      bullets: {
        'pt-BR': [
          'CPF/CNPJ com dígitos verificadores; cartões com Luhn; parsing e classificação de IPv4/IPv6.',
          'Detectores de JWT, padrões de API keys, chaves privadas, senhas em contexto, cookies, identificadores de sessão e connection strings com credenciais.',
          'Secrets genéricos combinam contexto, comprimento, classes de caracteres e entropia de Shannon. Entropia isolada não basta.',
          'ALLOW, WARN, MASK e BLOCK, com precedência explícita. A configuração padrão não permite ignorar WARN para enviar o texto original.',
          'Placeholders consistentes durante a sanitização; o mapa temporário é limpo ao final.',
        ],
        'en-US': [
          'CPF/CNPJ check digits, Luhn validation for cards, and IPv4/IPv6 parsing and classification.',
          'Detectors for JWTs, API key patterns, private keys, contextual passwords, cookies, session identifiers and credential-bearing connection strings.',
          'Generic secrets combine context, length, character classes and Shannon entropy. Entropy alone is insufficient.',
          'ALLOW, WARN, MASK and BLOCK with explicit precedence. The default configuration does not allow overriding WARN to send the original text.',
          'Consistent placeholders during sanitization; the temporary mapping is cleared afterwards.',
        ],
      },
    },
    {
      id: 'security',
      bullets: {
        'pt-BR': [
          'O manifesto solicita apenas storage e restringe o content script a chatgpt.com. A CSP das páginas da extensão bloqueia conexões externas.',
          'Prompt e valores detectados não são persistidos. O service worker armazena somente contagem agregada em storage de sessão; a preferência enabled é local.',
          'Fail-closed é o padrão em falhas dos caminhos reconhecidos. A extensão não equivale a um bloqueio de rede universal.',
          'Uploads binários ficam fora deste MVP. Mudanças no editor do ChatGPT podem exigir atualização do adaptador.',
          'O README relata testes durante o desenvolvimento, mas os arquivos de teste não constam na revisão analisada; não são apresentados resultados reproduzidos.',
        ],
        'en-US': [
          'The manifest requests only storage and limits the content script to chatgpt.com. Extension-page CSP blocks external connections.',
          'Prompts and detected values are not persisted. The service worker stores only an aggregate counter in session storage; the enabled preference is local.',
          'Fail-closed is the default for failures on recognized paths. This is not a universal network-level blocking control.',
          'Binary uploads are outside this MVP. ChatGPT editor changes may require adapter updates.',
          'The README reports development testing, but test files are absent from the reviewed revision; no reproduced test results are claimed.',
        ],
      },
    },
  ],
  architecture: {
    description: {
      'pt-BR':
        'Fluxo lógico do scanner e da interceptação. A validação ocorre dentro dos detectores, não como um serviço separado.',
      'en-US':
        'Logical scanner and interception flow. Validation takes place inside detectors, not in a separate service.',
    },
    steps: [
      {
        label: {
          'pt-BR': 'Entrada',
          'en-US': 'Input',
        },
        detail: {
          'pt-BR': 'Texto do editor e colagem.',
          'en-US': 'Editor text and paste.',
        },
      },
      {
        label: {
          'pt-BR': 'Detecção',
          'en-US': 'Detection',
        },
        detail: {
          'pt-BR': 'Candidatos por formato e contexto.',
          'en-US': 'Candidates by format and context.',
        },
      },
      {
        label: {
          'pt-BR': 'Validação',
          'en-US': 'Validation',
        },
        detail: {
          'pt-BR': 'Dígitos, parsing e sinais de secret.',
          'en-US': 'Check digits, parsing and secret signals.',
        },
      },
      {
        label: {
          'pt-BR': 'Política',
          'en-US': 'Policy',
        },
        detail: {
          'pt-BR': 'Todos os achados; ação mais restritiva.',
          'en-US': 'All findings; most restrictive action.',
        },
      },
      {
        label: {
          'pt-BR': 'Ação',
          'en-US': 'Action',
        },
        detail: {
          'pt-BR': 'ALLOW / WARN / MASK / BLOCK.',
          'en-US': 'ALLOW / WARN / MASK / BLOCK.',
        },
      },
    ],
    note: {
      'pt-BR':
        'MASK sanitiza e pede revisão. A decisão é refeita para o texto e editor atuais antes do envio controlado.',
      'en-US':
        'MASK sanitizes and requests review. The decision is refreshed for the current text and editor before controlled submission.',
    },
  },
}
