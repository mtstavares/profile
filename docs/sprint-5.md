# Sprint 5 — certificações e cursos

## Atualização: links do LinkedIn

Em 24/09/2026, os destinos dos botões “Exibir credencial” foram lidos diretamente
na seção de licenças e certificados do perfil autenticado do autor. Foram
cadastrados 16 links diretos (sem redirecionador/tracking do LinkedIn) para 17
registros, incluindo o diploma de Back-End recém-identificado. ENAP não exibia
URL. Sophos usa o arquivo Google Drive compartilhado pelo autor no LinkedIn.
Cinco IDs antes ausentes foram incorporados, além do ID do diploma.

JavaScript e HTML/CSS possuem divergências entre ID exibido e código da URL
no próprio LinkedIn; ambos foram preservados literalmente, sem inferir correções.
As URLs foram extraídas do perfil, não se afirma validação independente de todos
os emissores. A data de CPPS também diverge do briefing anterior (LinkedIn: dez/2025);
foi mantida a data fornecida pelo autor, pois a atualização solicitada era de links.

## Entrega inicial

Atualização XPSec: os dois links foram substituídos por
`https://xpsec.academy/certificates/validate`. Em 24/09/2026, o teste com
`?code=f6b4695244` manteve o campo vazio e Validar desabilitado. O componente
público usa a propriedade de servidor searchedCode e envia code via POST;
não foi identificado suporte a preenchimento por query string. Não foi
implementada promessa de preenchimento automático ou manipulação entre domínios.

16 credenciais cadastradas: seis Cybersecurity, seis Networking & Infrastructure
e quatro Development. Os sete registros anteriores foram preservados e enriquecidos;
nove foram adicionados conforme os dados fornecidos pelo autor nesta sprint.
Não havia outras credenciais comprovadas no cadastro nem arquivos de certificados
em public/assets. Nenhuma consulta ao LinkedIn ou inferência de URL pelo ID.

Nomes oficiais são preservados em ambos os idiomas, inclusive títulos em português
e a grafia fornecida “JavaScript Begginer”. Rótulos, categorias e datas são localizados.
ISO/IEC 27001 preserva precisão anual; as demais datas têm precisão mensal.
Somente ENAP possui expiração informada. Dez IDs foram fornecidos.

Cards usam nomes dos oito emissores em tratamento tipográfico monocromático;
não são apresentados como logos oficiais. Não foram fornecidos assets oficiais
com procedência/condições de uso verificadas. O modelo suporta logo local com
alt/dimensões e lazy loading, URL oficial e arquivo local de certificado.
Após a sprint, o autor forneceu o badge SkillFront 33204241563890, cadastrado
como ID e URL. IDs com credentialUrl são links seguros em nova aba, sem CTA
duplicado. Os demais aguardam URLs oficiais; nenhum certificado local foi
fornecido. Novos arquivos devem ser cadastrados como caminhos relativos a public.

Filtros nativos por botões aria-pressed, contagem anunciada e grid responsivo.
Home destaca seis e oferece CTA. O currículo mantém sete por resumeSelected,
sem redesign. Publications foi removido dos componentes, conteúdo, modelo,
rótulos e dependências de numeração; docs históricos permanecem como registro.

Os 27 cenários anteriores foram mantidos ou adaptados ao escopo: o teste do
componente Publications removido passou a verificar ações condicionais dos cards;
o teste de expansão da Home agora valida seus seis destaques. Um novo cenário
abrange catálogo, dez IDs, filtros, idiomas, teclado, axe, larguras e console.

Validação final: 28/28 testes aprovados; formatter, lint, typecheck e build
aprovados. PDFs PT/EN continuam com duas páginas. Sem violações axe, overflow
ou erros de console nos cenários cobertos.
