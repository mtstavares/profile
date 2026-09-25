# Sprint 2 — Home profissional

## Entrega

Home contínua: Header → Hero → About → Expertise → Experience → Featured Projects →
GitHub → Publications (condicional) → Certifications → Education → Contact → Footer.
Conteúdo e interface completos em PT-BR/en-US, com preferência persistida da Sprint 1.
Fotografia, tokens, fontes, primitivos e HashRouter preservados. Nenhuma dependência nova.

## Decisões

- Seções pequenas em src/sections; apresentação separada de conteúdo.
- Histórico PMESP em ordem cronológica inversa, períodos exatamente como fornecidos.
  Ypê aparece com menor destaque e sem responsabilidades inventadas.
- Projeto principal Local AI DLP seguido de Incident Management Platform e OSINT
  Network Monitor. Informações editoriais do briefing, sem consulta ou auditoria dos repos.
- GitHub com cinco links locais. Sem API, métricas, service sem uso, PAT ou autenticação.
- ConsultaCredenciais sem descrição. CTAs para cases omitidos enquanto não houver páginas.
- Certificações/cursos sem datas, identificadores ou URLs não fornecidos. Somente
  Cisco Introduction to Cybersecurity tem emissor separado explicitamente informado.
- Formação Back-End com conclusão em 2026; ano de início não inferido.
- Publicações com modelo e renderização prontos, lista vazia oculta.
- /resume é placeholder, não currículo final. Sem PDF.
- Menu mobile disclosure, âncoras com foco, histórico e reduced-motion. Os links
  funcionam a partir da Home, Design System ou currículo.
- TypeScript de ferramentas usa resolução bundler para compartilhar tipos/componentes
  com testes; strict preservado. Teste de publicações usa transformação JSX do Vite.

## Validação

Lint e typecheck sem erros. Build de produção válido. Suite com 18 testes:

- Home e Design System em 360, 390, 768, 1024 e 1440 px; console, foto e overflow.
- Home EN nas mesmas cinco larguras e verificações axe WCAG A/AA.
- Troca de idioma, persistência, fallback e storage bloqueado.
- Teclado, link de salto, foco, menu mobile, Escape, retorno e troca de rota.
- Âncoras, reload, voltar do navegador e navegação repetida ao mesmo destino.
- Links de contato, três projetos destacados, cinco repositórios, expansão de cursos.
- Seção de publicações ausente quando vazia e renderização com dados de teste isolados.
- Reduced motion, rota desconhecida e ausência de erros no console.

JavaScript inicial aproximadamente 122 KB gzip; preview separada aproximadamente
1,8 KB gzip. Foto original 150,58 KB, inalterada. Nenhuma requisição para API externa.

## Limites reais

Não foram fornecidos posts nem metadados completos das certificações; permanecem
ausentes. Currículo final/PDF e cases não implementados por escopo. Lighthouse,
leitores de tela manuais e navegadores além de Edge/Chromium não foram aferidos.
Deploy, SEO completo, analytics e integrações seguem para etapas futuras.
