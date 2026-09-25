# Validação da Sprint 1

Ambiente: Windows, Node 24.18.0, npm 11.16.0, navegador Edge/Chromium via Playwright.

## Qualidade

| Verificação   | Resultado                                                 |
| ------------- | --------------------------------------------------------- |
| ESLint        | passou, sem erros ou warnings                             |
| TypeScript    | passou; strict em aplicação e ferramentas/testes          |
| Build Vite    | passou                                                    |
| Playwright    | 9 testes passaram                                         |
| Axe WCAG A/AA | nenhuma violação nas páginas e larguras verificadas       |
| Console       | nenhum pageerror ou console.error nas duas rotas testadas |
| Foto          | carregamento confirmado; SHA-256 idêntico ao original     |

## Cobertura

- Identidade e Design System em 360, 390, 768, 1024 e 1440 px.
- Sem overflow horizontal e com margens mínimas verificadas.
- Capturas das duas rotas em cada largura, revisadas para composição mobile/tablet/desktop.
- PT/EN, troca entre rotas, preferência após reload e html[lang].
- Fallback para PT-BR com navegador de idioma não suportado e storage bloqueado.
- Link de salto, navegação por Tab/Enter, foco visível e foco após troca de rota.
- Disabled nativo e resposta acessível dos botões demonstrativos.
- Reduced motion: entrada imediata e transições desativadas.
- Rota desconhecida e retorno à identidade.
- Revisão dos arquivos de aplicação: sem credenciais, tokens, endpoints privados,
  dangerouslySetInnerHTML, any, ts-ignore ou supressões indiscriminadas de lint.

Os testes finais usam o build de produção servido pelo Vite preview na porta 4187,
sem reutilizar um servidor existente. A porta deve estar livre antes de executar.
Screenshots são locais, em test-results/, e não fazem parte do código publicado.

## Artefatos de produção

| Artefato             | Tamanho aproximado         |
| -------------------- | -------------------------- |
| JavaScript inicial   | 350,98 KB / 114,43 KB gzip |
| Preview lazy         | 5,98 KB / 1,90 KB gzip     |
| CSS                  | 17,69 KB / 4,73 KB gzip    |
| Foto JPEG            | 150,58 KB                  |
| Inter variável WOFF2 | 48,25 KB                   |
| IBM Plex Mono WOFF2  | 14,70 KB                   |

## Limites e trabalho futuro

Axe e testes de teclado não substituem uma auditoria completa com leitores de tela.
Lighthouse, Safari/Firefox, SEO completo e deploy real no GitHub Pages não foram
validados nesta sprint. As metas Lighthouse 95+ continuam objetivos futuros.
O roteamento usa hash; URLs públicas e prerender precisam ser decididos antes do lançamento.

Conteúdo de experiência, formação, certificações e projetos aguarda revisão editorial.
Home completa, integrações, PDF e CI/CD não foram implementados, conforme escopo.
Não há bloqueio conhecido da fundação entregue.
