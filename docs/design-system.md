# Design System v1

## Direção

Dark, técnico, minimalista e editorial. Cybersecurity é a área principal;
engenharia e software são diferenciais aplicados. Sem metáforas de terminal,
elementos de SOC, neon ou efeitos contínuos.

## Tokens

Fonte de verdade: src/styles/tokens.css. Cores expostas ao Tailwind por @theme;
componentes reutilizam variáveis semânticas. A preview referencia nomes dos tokens,
sem duplicar hexadecimais.

| Token              | Valor     | Uso                    |
| ------------------ | --------- | ---------------------- |
| background         | #080B0F   | fundo                  |
| surface            | #0D1117   | cards                  |
| elevated           | #111820   | camada elevada         |
| border             | #202A35   | divisórias decorativas |
| border-interactive | #526171   | contorno de controles  |
| primary            | #F3F6F8   | texto principal        |
| secondary          | #98A6B5   | texto de apoio         |
| muted              | #8593A2   | legendas legíveis      |
| accent / focus     | #36D1C4   | ação, foco e detalhes  |
| accent-hover       | #69DED4   | hover principal        |
| success            | #8BCCAA   | sucesso                |
| warning            | #E2BD7C   | atenção                |
| danger             | #ED999B   | erro                   |
| overlay            | #080B0FCC | sobreposição reservada |

Muted foi clareado em relação à referência #687583 para preservar contraste em
texto pequeno. Bordas de controles são mais claras que divisórias decorativas.
Estados incluem texto, sem depender apenas da cor.

## Tipografia e identidade

Inter variável local para conteúdo; IBM Plex Mono 400 local para rótulos e detalhes.
Nenhum parágrafo longo em monospace. Font-display swap e subset latino; nenhuma
requisição externa de fontes. Títulos fluidos, textos e espaçamentos com tokens.
Pesos 400, 500 e 550 atendidos por um arquivo variável.

MT. usa letras claras, tracking fechado e ponto cyan. Favicon SVG próprio com
fundo escuro e fallback sans-serif. Identidade tipográfica, sem logo ilustrado.

## Layout

Container máximo 1248 px, margem mínima 24 px e 48 px a partir de 768 px.
Classe site-container evita colisão com o utilitário container do Tailwind.
Uma coluna mobile; duas na identidade a partir de 768 px, com conteúdo antes do retrato.
Assimetria e espaço negativo estabelecem hierarquia.

Escala em px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, implementada em rem.
Radius 4/8 px; bordas de 1 px; sem sombras grandes ou gradientes.
Dimensões funcionais (bordas, foco e ponto de status) são exceções intencionais.

## Fotografia

Cópia integral do arquivo fornecido, em assets/images, com SHA-256 igual ao original:
8968F8A280C4B76307A7AE10BABA9C79A9285926381501C5484459F6971BDC0F.
Proporção 4:5, borda discreta, object-fit cover, sem filtros, inversão ou avatar circular.
A orientação original direciona o olhar para o texto no desktop.
Width/height e aspect-ratio reservam espaço; alt traduzido.

## Primitivos

- Button: primary, secondary, ghost; hover, active, focus-visible, disabled nativo.
- IconButton: label obrigatório; alvo de 48 px.
- Container, Section, SectionHeader: composição e associação semântica ao título.
- Card: superfície e borda, sem aparentar ação inexistente.
- Badge: neutro, accent, success, warning, danger com texto.
- Tag: metadado sem comportamento interativo implícito.
- ExternalLink: nova aba, aviso acessível e rel seguro.
- SocialLink: dados centralizados e ícone funcional acompanhado de texto.
- LanguageSwitcher: PT/EN com aria-pressed e teclado.
- Divider: hr semântico; Eyebrow: rótulo editorial.
- Portrait: asset centralizado, carregamento apropriado à posição.

Navegação com aparência de botão continua sendo anchor. Button é reservado para
ações. Sem div clicável, link vazio ou botão de currículo indisponível.

## Foco e movimento

Outline cyan 2 px, offset 5 px. Link de salto visível ao focar; mudanças de rota
focam main. Links têm sublinhado, contexto ou estilo de controle. Ícones decorativos
ficam fora da árvore de acessibilidade.

LazyMotion faz somente fade de 250 ms. Transições de controles duram 160 ms.
MotionConfig reducedMotion=user e CSS desativam transições e tornam a entrada
imediata quando o usuário reduz movimento. Leitura não depende de animação ou hover.

## Preview e evolução

/#/design-system é uma ferramenta interna de desenvolvimento com interação real.
Tecnologias na amostra são rótulos demonstrativos, não níveis de competência.
ProjectCard e TimelineItem foram implementados na Sprint 2 com os dados do briefing.

## Aplicação na Home — Sprint 2

Paleta, fotografia, fontes e primitivos preservados. home.css acrescenta somente
composições de seções: timeline, grade de expertise, projetos, credenciais e contato.
Local AI DLP ocupa a largura principal, com a borda superior em accent; os dois
projetos seguintes compartilham uma linha no desktop. Nenhuma métrica ou escala de skills.

Header sticky opaco, sem efeitos de vidro. Até 1023 px, navegação por disclosure:
botão nomeado, aria-expanded/controls, Escape com retorno ao botão, fechamento por
seleção ou saída do foco. Não é um modal e não prende o teclado.
Âncoras usam o fragmento interno do HashRouter, preservando links, reload e histórico.
Após navegar, a seção recebe foco sem salto intermediário e scroll com margem para
o header. Smooth scroll respeita reduced-motion. Os links selecionados pelo fragmento
recebem indicação sutil; não é feito tracking automático de scroll.

Quatro certificações/cursos visíveis, demais em details nativo. A seção de publicações
é condicional e não ocupa espaço quando vazia. Footer com ano obtido programaticamente.

## Cases técnicos — Sprint 3

As páginas de projetos reutilizam Container, Section, Card, Tag, Eyebrow e
ExternalLink. A listagem distingue destaques editorialmente, sem ranking ou
filtros artificiais. Cases usam títulos laterais no desktop e uma coluna no
mobile, com linhas de leitura limitadas e divisores discretos.

Fluxos são listas ordenadas HTML com rótulos e explicações, sem dependências ou
animação. Notas usam borda neutra; accent permanece reservado a links e foco.
Tecnologias, estágio e fontes são metadados secundários. Não há screenshots
artificiais ou código decorativo. Tokens, fontes e paleta anteriores permanecem.
