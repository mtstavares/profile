# Sprint 6 — rotas, SEO e compartilhamento

## Rotas e hospedagem

BrowserRouter usa o mesmo basename do Vite. O build gera HTML completo nas nove
rotas públicas: Home, Projects, cinco cases, Credentials e Resume. Cada rota tem
seu diretório/index.html, portanto acessos diretos e refresh não dependem de
redirecionamento via 404. Links antigos com hash são convertidos com replaceState.
Uma única lista publicRoutes orienta indexação e geração de sitemap.

GitHub Pages serve diretórios estáticos e o 404.html personalizado. Para caminhos
desconhecidos, esse arquivo inicia a aplicação na URL original, exibe a página de
erro e mantém noindex. Assets absolutos em relação à base funcionam mesmo em
caminhos profundos. `.nojekyll` preserva o comportamento estático. Não há script
de redirecionamento nem URL temporária com query string.

Referências: [BrowserRouter/basename](https://reactrouter.com/api/declarative-routers/BrowserRouter)
e [404 personalizado no GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site).

## Configuração

Defina `VITE_SITE_URL` com a URL HTTPS real, incluindo o caminho do repositório
quando aplicável. `VITE_BASE_PATH` é opcional: deriva do pathname dessa URL, ou
fica `/` no desenvolvimento. Se configurada explicitamente, deve coincidir com
o caminho de SITE_URL e terminar com `/`. Consulte `.env.example`.

URL ausente: build local válido, páginas noindex, sem canonical/og:url/URLs de
imagem absoluta; sitemap XML vazio e robots sem referência de sitemap. Não há
domínio inventado. URL inválida, privada ou localhost interrompe o build.
Produção configurada: canonical com barra final, nove URLs únicas no sitemap,
robots permitindo assets e páginas, referência absoluta ao sitemap.

Node 24 e Edge no Windows ou Chromium instalado pelo Playwright no Linux são
necessários para build/PDF/pré-render. Execute `npm run build` e publique dist
inteiro futuramente. Nenhuma edição manual dos artefatos é necessária.

## Metadata e assets

Título e descrição compartilham conteúdo existente. Open Graph e Twitter/X
possuem título, descrição e imagem; OG inclui URL, tipo website, locale e dimensões.
Home tem JSON-LD Person limitado a nome, cargo, URL quando conhecida, email público
e perfis sociais. Nenhuma classificação, empregador ou endereço privado.

HTML pré-renderizado contém texto legível, heading e metadata própria antes de
React. Crawlers/compartilhadores recebem PT-BR; troca PT/EN atualiza metadata no
cliente e mantém a URL canônica comum. Não se promete indexação independente de
EN sem URLs próprias. Design System e erros usam noindex e não entram no sitemap.

Imagem JPEG 1200x630, favicon SVG MT. preservado, PNG 32x32 e apple-touch-icon
180x180 gerados com Playwright existente, fonte Inter local e tokens atuais.
O JPEG final tem aproximadamente 39 KB e foi inspecionado visualmente.
Sem dependências novas, analytics ou serviços externos durante geração.

## Validação

Os 28 testes anteriores conservam seus cenários e usam agora URLs limpas.
Novos testes verificam metadata, idiomas, histórico, links antigos, arquivos
estáticos e validação da configuração. Uma fixture isolada de build em
`tmp/pages-fixture` usa domínio reservado de exemplo e subpasta `/Profile/`.
Servidor estático sem fallback de sucesso reproduz acesso a diretórios e
404.html: verifica HTTP 200 nas nove rotas, HTTP 404 em desconhecidas, refresh,
back/forward, canonical, OG, sitemap, robots e PDFs. Crawlers são simulados com
JavaScript desativado. O domínio de fixture nunca é usado como fallback do site.

O preview Vite mantém seu fallback de desenvolvimento; o teste estático é a
validação específica do comportamento esperado no Pages. Deploy não realizado.

Resultado final: 31/31 testes aprovados, incluindo os 28 cenários anteriores
adaptados às URLs limpas. Formatter, lint, typecheck strict e build aprovados.
PDFs PT/EN mantidos em duas páginas. Fixture de subpasta e navegação sem
JavaScript aprovadas; sem erros de runtime nos cenários cobertos.
