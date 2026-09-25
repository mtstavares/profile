import type { ProjectCase } from '../../types/content'
export const consultaCredenciaisCase: ProjectCase = {
  sections: [
    {
      id: 'overview',
      paragraphs: {
        'pt-BR': [
          'Automação Python para análise de planilhas de credenciais obtidas via OSINT, correlação de identidades e consolidação de resultados. O README descreve o uso defensivo na identificação de credenciais expostas.',
        ],
        'en-US': [
          'Python automation for analyzing credential spreadsheets obtained through OSINT, correlating identities and consolidating results. The README describes defensive use in identifying exposed credentials.',
        ],
      },
    },
    {
      id: 'motivation',
      paragraphs: {
        'pt-BR': [
          'A documentação aponta tarefas repetitivas de conferência de identificadores, resolução de identidade, validação autorizada de acesso e manutenção de relatórios. A proposta é padronizar esse processamento.',
        ],
        'en-US': [
          'The documentation identifies repetitive tasks involving identifier checks, identity resolution, authorized access validation and report maintenance. The proposal is to standardize this processing.',
        ],
      },
    },
    {
      id: 'solution',
      paragraphs: {
        'pt-BR': [
          'Um script organiza leitura e normalização, consultas para resolução de identidade, automação de navegador e saída em planilhas. OpenPyXL trabalha os arquivos; Requests trata consultas HTTP; Selenium executa a interação com navegador.',
          'A consolidação mensal faz atualização de registros, evita duplicações e preserva campos manuais. O fluxo lido gera resultados para acompanhamento; não é apresentado como bloqueio automático de contas.',
        ],
        'en-US': [
          'One script organizes ingestion and normalization, identity-resolution queries, browser automation and spreadsheet output. OpenPyXL handles files, Requests handles HTTP queries and Selenium drives browser interaction.',
          'Monthly consolidation updates records, avoids duplicates and preserves manually maintained fields. The reviewed flow produces results for follow-up; it is not presented as automatic account blocking.',
        ],
      },
    },
    {
      id: 'features',
      bullets: {
        'pt-BR': [
          'Normalização e validação de identificadores antes da correlação.',
          'Cache durante a execução e retentativa em resultados técnicos inconclusivos.',
          'Relatórios individuais, consolidação mensal e logs de execução/auditoria.',
          'Gravação de planilha por arquivo temporário, verificação de leitura e substituição do destino.',
        ],
        'en-US': [
          'Identifier normalization and validation before correlation.',
          'Per-run caching and retries for inconclusive technical results.',
          'Individual reports, monthly consolidation and execution/audit logs.',
          'Spreadsheet writes through a temporary file, readability verification and destination replacement.',
        ],
      },
    },
    {
      id: 'security',
      bullets: {
        'pt-BR': [
          'O processamento envolve credenciais e dados pessoais e deve permanecer restrito a análises autorizadas. Não há exemplos reais, instruções operacionais ou configurações de acesso neste case.',
          'O resumo público limita-se à finalidade e aos componentes genéricos. Não descreve sistemas de destino, infraestrutura ou integrações institucionais.',
          'A existência de funções de mascaramento não comprova eliminação de dados sensíveis de todas as saídas; relatórios e logs exigem controle de acesso e retenção.',
        ],
        'en-US': [
          'Processing involves credentials and personal data and must remain limited to authorized analysis. This case contains no real examples, operational instructions or access configuration.',
          'The public summary is limited to purpose and generic components. It does not describe target systems, infrastructure or institutional integrations.',
          'The presence of masking functions does not establish removal of sensitive data from every output; reports and logs require access and retention controls.',
        ],
      },
    },
  ],
}
