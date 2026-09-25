import type { ProjectCase } from '../../types/content'
export const osintNetworkCase: ProjectCase = {
  sections: [
    {
      id: 'overview',
      paragraphs: {
        'pt-BR': [
          'Script Python que enumera conexões do host Windows, correlaciona PIDs com processos e consulta AbuseIPDB e VirusTotal para endereços externos. Os resultados são exportados em CSV e HTML.',
        ],
        'en-US': [
          'A Python script that enumerates Windows host connections, correlates PIDs with processes and queries AbuseIPDB and VirusTotal for external addresses. Results are exported as CSV and HTML.',
        ],
      },
    },
    {
      id: 'motivation',
      paragraphs: {
        'pt-BR': [
          'Relacionar uma conexão externa ao processo local e a sinais de reputação ajuda a contextualizar atividades de rede para análise. O README apresenta a ferramenta como apoio à identificação de anormalidades.',
        ],
        'en-US': [
          'Linking an external connection to its local process and reputation signals provides context for network analysis. The README presents the tool as support for identifying anomalies.',
        ],
      },
    },
    {
      id: 'solution',
      paragraphs: {
        'pt-BR': [
          'O script executa netstat -ano e usa tasklist para resolver o nome do processo. Para enriquecimento, seleciona conexões TCP ESTABLISHED e exclui endereços privados e loopback via ipaddress.',
          'As consultas HTTP têm timeout e tratamento de erro. O laço registra cada resultado, aguarda entre consultas e gera um relatório HTML ao final. Trata-se de uma coleta por execução, não de um serviço contínuo.',
        ],
        'en-US': [
          'The script runs netstat -ano and uses tasklist to resolve process names. For enrichment it selects ESTABLISHED TCP connections and excludes private and loopback addresses using ipaddress.',
          'HTTP queries use timeouts and error handling. The loop records each result, waits between queries and generates an HTML report at the end. It is a per-run collection, not a continuously running service.',
        ],
      },
    },
    {
      id: 'features',
      bullets: {
        'pt-BR': [
          'Listagem geral das conexões antes do recorte de conexões externas.',
          'Correlação de IP, PID, processo, protocolo e estado.',
          'Score e país da AbuseIPDB; contagens de classificação do VirusTotal.',
          'Relatórios CSV/HTML com timestamp; falhas de consulta são registradas sem inventar resultados.',
        ],
        'en-US': [
          'General connection listing before selecting external connections.',
          'Correlation of IP, PID, process, protocol and state.',
          'AbuseIPDB score and country; VirusTotal classification counts.',
          'Timestamped CSV/HTML reports; query failures are recorded without fabricated results.',
        ],
      },
    },
    {
      id: 'security',
      bullets: {
        'pt-BR': [
          'As chaves das APIs são lidas do ambiente com python-dotenv. Nenhuma chave é necessária para visitar este portfólio.',
          'Endereços externos selecionados são enviados aos provedores de enriquecimento: este projeto não faz classificação inteiramente local.',
          'Os relatórios contêm contexto de rede e processo e precisam de tratamento adequado. Nenhum relatório real é reproduzido no case.',
          'A implementação depende de ferramentas e formato de saída do Windows; reputação externa é um sinal para análise, não um veredito automático.',
        ],
        'en-US': [
          'API keys are read from the environment with python-dotenv. No key is needed to view this portfolio.',
          'Selected external addresses are sent to enrichment providers: this project does not perform entirely local classification.',
          'Reports contain network and process context and require appropriate handling. No real report is reproduced in this case.',
          'The implementation depends on Windows tools and output formats; external reputation is an analysis signal, not an automatic verdict.',
        ],
      },
    },
  ],
  architecture: {
    description: {
      'pt-BR': 'Fluxo de coleta e enriquecimento observado no script.',
      'en-US': 'Collection and enrichment flow observed in the script.',
    },
    steps: [
      {
        label: {
          'pt-BR': 'Conexão',
          'en-US': 'Connection',
        },
        detail: {
          'pt-BR': 'netstat enumera conexões.',
          'en-US': 'netstat enumerates connections.',
        },
      },
      {
        label: {
          'pt-BR': 'Processo',
          'en-US': 'Process',
        },
        detail: {
          'pt-BR': 'PID correlacionado com tasklist.',
          'en-US': 'PID correlated through tasklist.',
        },
      },
      {
        label: {
          'pt-BR': 'IP externo',
          'en-US': 'External IP',
        },
        detail: {
          'pt-BR': 'Recorte TCP e validação do endereço.',
          'en-US': 'TCP selection and address validation.',
        },
      },
      {
        label: {
          'pt-BR': 'Enriquecimento',
          'en-US': 'Enrichment',
        },
        detail: {
          'pt-BR': 'AbuseIPDB e VirusTotal.',
          'en-US': 'AbuseIPDB and VirusTotal.',
        },
      },
      {
        label: {
          'pt-BR': 'Relatório',
          'en-US': 'Report',
        },
        detail: {
          'pt-BR': 'Exportação CSV e HTML.',
          'en-US': 'CSV and HTML export.',
        },
      },
    ],
  },
}
