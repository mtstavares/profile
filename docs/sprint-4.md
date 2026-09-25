# Sprint 4 — currículo web e PDFs

Atualização de trajetória: `/career` apresenta o histórico completo em PT/EN,
acessível por “Ver mais” na seção de experiência da Home, cuja seleção foi
preservada, com textos e vínculo atual sincronizados com a trajetória completa.
`content/career.ts` compartilha as três fases da PMESP e registra
o vínculo atual sem data de término; acrescenta as experiências anteriores
informadas pelo titular. NR-12, repetida no briefing, aparece uma única vez.
O gerador de PDFs passa a seleção `policeExperiences` ao ResumeDocument:
somente PMESP na experiência profissional dos PDFs, sem alterar a seleção
da versão web ou as demais seções do currículo. A rota participa da geração
estática, metadata e sitemap existentes.

`/resume` apresenta o currículo completo em PT/EN, com download correspondente,
contatos, retorno ao portfólio e impressão clara. Conteúdo compartilha perfil,
experiência, projetos, formação e certificações existentes. `content/resume.ts`
adiciona somente resumo editorial, grupos de competências e rótulos próprios.

`scripts/build-resume.ts` renderiza ResumeDocument a partir dos dados via SSR do
Vite e imprime HTML semântico com Playwright/Chromium, já presentes no projeto.
Não captura a Home, não usa imagem para texto e não adiciona dependência do site.
O CSS de impressão define A4, fundo branco, uma coluna e quebra antes das skills.
Os PDFs ficam na raiz de dist, com links relativos ao base path do Vite.

O build exige Edge instalado no Windows ou Chromium do Playwright em Linux/CI
(`npx playwright install --with-deps chromium`). Node 24 executa o script TS.
Após `npm run build`, `npm run preview` serve também os downloads. O servidor
dev não serve dist; downloads devem ser validados no preview da produção.

Arquivos: `matheus-tavares-cv-pt-br.pdf` e `matheus-tavares-resume-en.pdf`.
Ambos têm duas páginas A4, texto extraível e oito links. Quatro páginas renderizadas
foram inspecionadas com PyMuPDF temporário, removido após a validação. Estrutura
linear sem foto, ícones ou tabelas favorece leitura ATS, sem prometer compatibilidade
com todo fornecedor. Build impede saída superior a duas páginas.

Testes cobrem idiomas, download real e conteúdo servido, assinatura PDF, links,
estrutura, impressão, axe, console e overflow nas cinco larguras existentes.
O teste anterior de navegação foi atualizado apenas para o título real do currículo.
Revisão editorial e busca de padrões nos PDFs não encontraram dados operacionais,
endereços privados ou segredos. Nenhum dado profissional novo foi inferido.

Validação final: 27/27 testes aprovados (25 anteriores + 2 novos), formatter,
lint, typecheck strict e build aprovados. Sem violações axe, overflow ou erros
de console nos cenários testados. Nenhuma dependência adicionada ao package.json.
