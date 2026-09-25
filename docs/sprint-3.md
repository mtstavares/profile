# Sprint 3 — projetos e cases

## Implementação

Rotas HashRouter `/projects` e `/projects/:slug`. A listagem representa os cinco
projetos, com dois destaques editoriais. Os três cards da Home abrem cases e um
CTA leva à listagem. A seção GitHub mantém os cinco links e oferece acesso aos
cases. Não há API, PAT, dependência nova ou execução de código remoto.

Project evoluiu com slug, estágio documentado, destaque da listagem, evidência
e caseStudy opcional. Seções e arquitetura compartilham estrutura tipada PT/EN.
O template omite seções sem evidência; aprendizados pessoais não foram inferidos.
Status editorial reviewed é distinto do estágio do software.

O shell continua gerenciando scroll e foco no main. Metadados são atualizados
por rota e idioma. O mapa opcional de canonicals aguarda URLs públicas reais;
HashRouter não resolve indexação individual por fragmentos.

## Evidências consultadas em 24/09/2026

Leitura estática de README, árvore e arquivos relevantes. Não foi feita auditoria
exaustiva, instalação, execução de ferramentas ou validação de produção.
Referências na UI apontam a arquivos em revisões fixas, não a HEAD mutável.

| Repositório         | Revisão                                  | Arquivos/áreas examinados e conclusão                                                                                                                                                                                                                                                                                                                                |
| ------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dlp_local           | ab222594fa59ad53acbe04dd9f4069c26323f628 | README, manifest.json, package.json, build, scanner, validadores, detectores, policy engine/default policy, interceptor, sanitizer, service worker e placeholder store. MV3, JavaScript local, armazenamento mínimo e decisões ALLOW/WARN/MASK/BLOCK. Validação dentro dos detectores. Fail-closed limitado aos caminhos reconhecidos; uploads binários fora do MVP. |
| controle_incidentes | e9ef86dabee19ceb224ba4439b3cd33e68e6fe07 | README, requirements, config, app factory, models, rotas users/incidente/dashboard, permissions e serviços de anexos, sanitização e auditoria. Flask/SQLAlchemy, autenticação, Admin/User/Viewer, CSRF, Bleach e anexos privados. Não foi afirmado uso corporativo em produção.                                                                                      |
| osint_monitor       | 032fc5fa7fb07d1bda6746dc8758313f899e940e | README, requirements.txt e osint_monitor.py. Snapshot no Windows via netstat/tasklist, PID, IP externo, AbuseIPDB/VirusTotal, CSV e HTML. Não é descrito como agente contínuo.                                                                                                                                                                                       |
| telegram-search     | 21a4d9b462859899d3a0e5a5279a326aeb8e94e4 | README e telegram_search.py. Python/Telethon, canais públicos configurados, termo de pesquisa e CSV. Limite de 100 resultados por canal e ausência de paginação no fluxo lido. Sem alegar coleta completa ou acesso privado.                                                                                                                                         |
| ConsultaCredenciais | 2c6551d5dc28831b060f962b04bf851f1ce25e35 | README e ConsultaCredenciais.py: imports, normalização, orquestração, consolidação e escrita. Python/OpenPyXL/Requests/Selenium, planilhas, resolução de identidade e relatórios. Case restrito a finalidade e componentes genéricos.                                                                                                                                |

## OPSEC

Foram encontradas referências de ambiente interno que merecem revisão nos
repositórios analisados. Valores, endereços, configurações de acesso, dados reais
e detalhes institucionais não foram copiados para este projeto. Arquivos-fonte
remotos não foram armazenados no portfólio. Não se afirma ausência de segredos
em toda a história dos repositórios; a revisão foi limitada ao escopo editorial.

## Validação

Preservados os 18 testes existentes. Sete novos testes cobrem os cinco cases em
PT/EN, 360/390/768/1024/1440 px, links GitHub, Home → case → listagem,
próximo projeto, foco por teclado, metadados e rota inexistente. Axe verifica
listagem e case principal em ambos os idiomas e cinco larguras. Os testes
capturam erros do console e do runtime, além de overflow nos cases.

Resultado final: **25/25 testes aprovados** (18 existentes + 7 novos), lint sem
warnings, typecheck strict, build e verificação de formatação aprovados. Nenhuma
violação axe ou erro de console nos cenários cobertos. Capturas da listagem e do
case/fluxo DLP foram inspecionadas em mobile e desktop. Um teste anterior de
teclado recebeu espera pela montagem da página antes de pressionar Tab; todas
as suas verificações foram preservadas. O bundle principal ficou em 132,68 KB gzip.

Varredura direcionada dos arquivos locais não encontrou padrões de tokens,
material de chave privada ou endereços privados. Isso não substitui auditoria.

Sem PDF, currículo final, deploy, analytics, blog ou sprint posterior.
