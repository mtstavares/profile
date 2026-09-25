# Matheus Tavares · Portfolio

Fundação do portfólio bilíngue de Matheus Tavares, Cybersecurity Analyst.
**Sprint 3:** Home integrada à listagem de cinco projetos e cases técnicos em PT/EN,
baseados em documentação e código dos repositórios. Foundation e Design System
preservados. **Sprint 4:** currículo web e PDFs PT/EN gerados no build.
Analytics e deploy permanecem fora do escopo.

## Executar

Node.js 24 LTS e npm. Versões resolvidas no package-lock.json.

```sh
npm ci
npm run dev
```

No PowerShell com scripts bloqueados, use `npm.cmd` em vez de `npm`.
Abra a URL informada pelo Vite. Rotas: `/`, `/design-system` e `/resume`
`/projects` e `/projects/:slug`. Âncoras da Home: `/#about`, `/#experience`, `/#projects`,
`/#credentials` e `/#contact`.

| Script                 | Finalidade                                        |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Servidor local                                    |
| `npm run lint`         | ESLint, sem warnings                              |
| `npm run typecheck`    | TypeScript strict, aplicação e ferramentas/testes |
| `npm run build`        | Tipos + produção em dist                          |
| `npm run preview`      | Servir build localmente                           |
| `npm run format`       | Formatar com Prettier                             |
| `npm run format:check` | Conferir formatação                               |
| `npm run test:e2e`     | Navegador, acessibilidade e comportamento         |

Execute build antes dos testes E2E. No Windows os testes usam Edge instalado.
Em outros sistemas, execute `npx playwright install chromium` uma vez.
Screenshots são gerados em test-results/, ignorado pelo Git.

## Stack e dependências

- React 19 + TypeScript 6 + Vite 8: renderização, tipos e build.
- Tailwind CSS 4 + plugin oficial Vite: tokens e utilitários de layout.
- React Router 8: shell, navegação e fallback 404.
- Framer Motion 13: fade discreto via LazyMotion, sem efeitos contínuos.
- Lucide React: ícones funcionais. Sem pacote adicional de marcas.
- Fontsource: Inter variável e IBM Plex Mono 400, hospedadas localmente.
- ESLint, typescript-eslint, plugins Hooks/Refresh e Prettier: qualidade.
- Playwright + axe-core: E2E e acessibilidade; somente em desenvolvimento.

Versões estáveis resolvidas pelo npm, sem prereleases e com lockfile.
Nenhuma dependência de backend ou biblioteca pronta de componentes.

## Estrutura

```text
src/
  assets/images/       fotografia original copiada
  components/
    ui/                botões, superfícies, badges, tags e links
    common/            idioma, retrato e links sociais
    layout/            Header
  config/              inventário da preview visual
  content/             perfil, trajetória, projetos, currículo e credenciais
  i18n/                provider, mensagens e seleção de conteúdo
  layouts/             shell, landmarks, foco e título por rota
  pages/               Home, Design System, currículo, projetos/cases e 404
  sections/            seções da Home
  lib/                 navegação por âncora e formatação de datas
  styles/              tokens semânticos e estilos compartilhados
  types/               modelos independentes de React
tests/                  contratos de comportamento e acessibilidade
docs/                   decisões e validação
```

Sections e lib foram adicionadas com uso concreto na Sprint 2. Services, hooks e
assets/icons continuam sem diretórios vazios: não há integração externa ou hook
genérico necessário. Componentes pequenos relacionados compartilham arquivos,
por exemplo Button/IconButton e Container/Section.

## Conteúdo e arquitetura

`src/content/profile.ts` é a fonte dos dados públicos. Nome, contato e URLs
profissionais não são duplicados nos componentes. `src/types/content.ts` modela
Profile, Contact, SocialLink, Experience, Education, Certification, Skill, Project
e Certification. Períodos aceitam ano ou mês; fim ausente significa em curso.

Experience suporta organização, função, período, descrição opcional, highlights,
localização pública e IDs de competências. Datas de certificação e emissores são
opcionais; Education aceita somente completedAt quando o início não foi informado.
Os dados da Sprint 2 vieram do briefing do autor, sem inferir responsabilidades,
datas de emissão, IDs, URLs de certificados ou métricas profissionais.

`src/content/projects.ts` contém os cinco repositórios, resumos, slugs, tecnologias,
estágio documentado e revisões consultadas. `src/content/cases/` contém seções
localizadas e fluxos tipados. `reviewed` indica revisão editorial do código e
documentação, não certificação de segurança. A Home destaca três projetos; a
listagem prioriza editorialmente dois. GitHub continua estático, sem métricas,
requisições de API ou autenticação. Veja [docs/sprint-3.md](docs/sprint-3.md).

Sprint 5: Publications foi removido. `/credentials` reúne 17 credenciais
com filtros de área, emissores, datas e IDs fornecidos. A Home destaca seis;
o currículo seleciona sete relevantes. Veja [docs/sprint-5.md](docs/sprint-5.md).

Os modelos alimentam /resume e PDFs A4 de duas páginas, texto selecionável e
links clicáveis em PT/EN. Build gera os dois assets estáticos com Playwright já
instalado. Windows utiliza Edge; Linux/CI exige `npx playwright install --with-deps chromium`.
Use build + preview para validar downloads. Veja [docs/sprint-4.md](docs/sprint-4.md).

## Internacionalização

React Context + dicionários tipados, sem biblioteca adicional. Messages exige
as mesmas chaves em PT/EN. Conteúdo profissional usa Localized<T>; localize retorna
o idioma escolhido ou PT-BR quando a tradução está ausente.

Prioridade: preferência válida no localStorage → navegador (inglês → en-US) → pt-BR.
Valores inválidos são ignorados. Storage bloqueado permite seleção em memória.
Chave: mt-portfolio.locale. O provider atualiza html[lang]; o shell atualiza o título.
PT/EN compartilham componentes e rotas. Termos profissionais fornecidos em inglês
são preservados. Apenas a preferência de idioma é persistida.

## Design System e acessibilidade

Veja [docs/design-system.md](docs/design-system.md). A preview inclui cores,
tipografia, botões, foco por Tab, badges, tags, cards, links, ícones, fotografia e
espaçamento. Botões de amostra atualizam uma mensagem acessível.

Landmarks, link de salto, títulos hierárquicos, idioma correto, nomes acessíveis,
foco visível, links externos identificados e estados além da cor. Trocas de rota
focam o conteúdo. Animações respeitam prefers-reduced-motion.

## Performance e segurança

Fontes locais com swap e subset latino. Foto JPEG de 150,58 KB, sem modificação;
proporção reservada evita layout shift. Retrato principal eager; preview lazy.
Não foi adicionada ferramenta para recomprimir um arquivo já pequeno.

Preview com code splitting e animação via LazyMotion. Bundle inicial de aproximadamente
133 KB gzip na Sprint 3. Lighthouse não foi aferido; metas futuras de 95+ não são resultados desta sprint.

Sem secrets, PATs, APIs privadas ou env client-side. .env.example não é necessário.
Links externos usam noopener noreferrer. Apenas dados públicos fornecidos; nenhum
endereço residencial. Contato inclui mailto, tel, WhatsApp e perfis profissionais.
Sem analytics nesta etapa.

## GitHub Pages e SEO futuro

BrowserRouter e HTML pré-renderizado por rota permitem URLs limpas e refresh em
hospedagem estática. O build gera 404.html, sitemap, robots, favicons e imagem OG.
Configure VITE_SITE_URL com a URL HTTPS real do Pages; a base deriva do caminho
do repositório. Sem URL, o build é noindex e não inventa canonical.

Veja [docs/sprint-6.md](docs/sprint-6.md) e [.env.example](.env.example) para
configuração, testes de subpasta e limites de indexação PT/EN. Nenhum deploy
ou analytics foi implementado.

Integração conforme [Tailwind Vite](https://tailwindcss.com/docs/installation/using-vite)
e [documentação Vite](https://vite.dev/guide/).

## Validação da Sprint 2

Histórico da fundação em [docs/validation.md](docs/validation.md). Decisões e resultados
da Home em [docs/sprint-2.md](docs/sprint-2.md). Testes existentes foram preservados
e adaptados aos novos CTAs, com cobertura adicional de menu, âncoras, links,
credenciais, conteúdo EN e publicações condicionais. A Sprint 3 preserva esses
18 testes e adiciona navegação dos cases, metadados, PT/EN, responsividade e axe.
