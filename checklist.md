# Checklist site profissional — status de implementação

Este documento cruza o checklist completo que você trouxe com o que o site
já tem, o que acabei de implementar, e o que ainda falta — separando o que
é **código** (eu faço) do que é **decisão/conta/documento** (só você pode
fazer, porque depende de dados da clínica, contas próprias ou assinatura).

**Legenda**

- ✅ **Já pronto** — está no site.
- 🔧 **Implementado agora** — acabei de colocar no código nesta rodada.
- 🧍 **Você precisa fazer** — decisão, conta ou informação que só você tem.
- 🔮 **Fase 2** — vale a pena, mas não é essencial para lançar.
- ❌ **Fora de escopo** — decidido que não entra (com o motivo).

---

## Resumo — o que fazer AGORA antes de publicar

Isto é o que bloqueia o lançamento. Tudo o resto pode esperar.

1. **Me passar o número real de WhatsApp** da clínica → hoje está com um
   placeholder (`5554999999999`) em `js/main.js` (linha `WHATSAPP_NUMBER`)
   e em `404.html`.
2. **Confirmar o horário de funcionamento** (dias/horas) → hoje o site só
   diz "consulte pelo WhatsApp".
3. **Escolher domínio e hospedagem** (ex: `nathaliamouraestetica.com.br`)
   → sem isso o site não tem endereço público nem HTTPS.
4. **Ler o rascunho de Política de Privacidade e Termos de Uso**
   (`privacidade.html`, `termos.html`) — são um ponto de partida, mas
   recomendo revisão por um advogado antes de publicar oficialmente.
5. **Criar/reivindicar o perfil no Google Meu Negócio** com o mesmo
   endereço do site.
6. Quando tiver o domínio, **atualizar as URLs** em `robots.txt`,
   `sitemap.xml` e nas tags `<link rel="canonical">` / dados estruturados
   do `index.html` (estão todos com `https://www.nathaliamouraestetica.com.br/`
   como placeholder).

Tudo isso está detalhado item a item abaixo.

---

## 1. Estrutura de páginas

| Item | Status | Observação |
|---|---|---|
| Home | ✅ | Seção hero no topo do `index.html` |
| Sobre | ✅ | Seção `#sobre` (dentro da home, não é página separada — combina com o pedido original de "site institucional único") |
| Serviços | ✅ | Seção `#servicos`, 6 procedimentos |
| Antes & Depois | ❌ (removido a pedido) | Cheguei a criar a seção com placeholders, mas foi removida a seu pedido. Fica como item de 🔮 fase 2: quando tiver fotos reais **com autorização por escrito das clientes**, é só pedir que eu recrio a seção |
| Depoimentos | ✅ / 🧍 | Seção existe, mas os textos foram extraídos de comentários públicos do Instagram sem nome de cliente. **Recomendo** trocar por depoimentos que você colete diretamente (print autorizado ou Google) |
| Blog / Conteúdo | 🔮 | Bom para SEO a médio prazo, não essencial agora |
| Cursos / Formação | ❌ | Você confirmou no levantamento original que o site é só institucional, sem separar essa frente — não implementado |
| Contato | ✅ | Seção `#localizacao` com endereço, mapa e WhatsApp |
| Política de Privacidade | 🔧 | `privacidade.html` — rascunho LGPD, **revisar com advogado** |
| Termos de Uso | 🔧 | `termos.html` — rascunho, **revisar com advogado** |
| Página 404 personalizada | 🔧 | `404.html` — note que alguns provedores de hospedagem precisam de configuração extra para usar esse arquivo automaticamente em erros 404 (Netlify reconhece sozinho; outros exigem ajuste no painel) |

---

## 2. Cabeçalho (header)

| Item | Status |
|---|---|
| Logo clicável para home | ✅ |
| Menu ≤ 7 itens | ✅ (6: Sobre, Serviços, Depoimentos, Dúvidas, Contato + botão Agendar) |
| Botão "Agendar"/WhatsApp sempre visível | ✅ |
| Menu responsivo (hambúrguer no celular) | ✅ |
| Ícones de redes sociais no header | ❌ | Mantidos só no rodapé, prática mais comum e evita poluir o header |

---

## 3. Rodapé (footer)

| Item | Status | Observação |
|---|---|---|
| Endereço completo | ✅ | |
| Mapa incorporado | ✅ | Está na seção de Contato, não duplicado no rodapé (evita repetir o mesmo iframe pesado duas vezes na página) |
| WhatsApp clicável | ✅ | |
| Telefone para ligação (`tel:`) | 🧍 | Só implemento se você quiser expor um número separado para chamadas (hoje só há o WhatsApp) |
| E-mail de contato | 🧍 | Me passe o e-mail que eu adiciono |
| Horário de funcionamento | 🧍 | Pendente (ver resumo acima) |
| Redes sociais | ✅ / 🧍 | Instagram já linkado; me avise se houver Facebook/TikTok |
| Links legais (Privacidade/Termos) | 🔧 | Adicionados no rodapé |
| CNPJ / dados da empresa | 🧍 | Só exibir se a clínica for formalizada — me informe os dados |
| Créditos de desenvolvimento | — | Opcional, fica a seu critério incluir ou não |
| Copyright com ano atual | ✅ | Atualiza sozinho via JavaScript |

---

## 4. Conteúdo essencial de cada página

### Home
| Item | Status |
|---|---|
| Título de impacto | ✅ |
| Subtítulo | ✅ |
| Foto profissional de alta qualidade | 🧍 | Hoje a foto real está só na seção Sobre; o hero é só texto. Se quiser, me envie mais uma foto e eu incorporo no hero também |
| CTA acima da dobra | ✅ |
| Resumo dos principais serviços | ✅ | Pilares no hero + seção completa de Serviços |
| Prova social (nº clientes, anos de experiência) | 🧍 | Preciso que você me diga números reais (ex: "500+ clientes atendidas", "X anos de experiência") — não quis inventar números |
| Antes/depois em miniatura | 🔮 | Removido por ora a seu pedido; volta a entrar quando houver fotos reais autorizadas |
| Selo de confiança (formação/certificações) | ✅ parcial | Menção à UPF no texto. Se quiser, posso montar uma seção "Formação" com fotos dos certificados que já estão na parede da clínica |
| "Como funciona" (passo a passo) | 🔧 | Nova seção `#como-funciona`: Avaliação → Procedimento → Acompanhamento |
| Mapa/localização resumida | ✅ | Presente na seção de Contato |
| Último CTA antes do rodapé | 🔧 | Faixa final "Pronta para recuperar suas sobrancelhas..." antes do rodapé |

### Serviços
| Item | Status |
|---|---|
| Nome, descrição, para quem é indicado | ✅ | |
| Duração aproximada da sessão | 🧍 | Não tenho esse dado — me informe se quiser exibir |
| Frequência recomendada (nº sessões) | 🧍 | Idem |
| Fotos de antes/depois por serviço | 🧍 | Depende das fotos reais (item 1) |
| FAQ | 🔧 | Implementei um FAQ geral (`#faq`) em vez de um por serviço — mais simples de manter e cobre as dúvidas mais comuns |
| Preços | ❌ (decisão já tomada) | Conforme definido no levantamento original: não exibir valores, CTA sempre leva ao WhatsApp |

### Sobre
| Item | Status |
|---|---|
| Fotos (várias) | 🧍 | Hoje só há 1 foto real. Me envie mais se quiser variar (no atendimento, no espaço) |
| História pessoal | ✅ | Resumo da trajetória 2013–2025 |
| Formação/certificações | ✅ | Menção à UPF; fotos de diploma/certificados ficam como 🧍 se quiser adicionar |
| Valores / forma de trabalho | ✅ | Seção Diferenciais |
| Fotos do espaço físico | 🧍 | Ainda não temos — me envie quando tiver |

### Contato
| Item | Status |
|---|---|
| Formulário de contato | ❌ / 🧍 | Site é 100% estático (HTML/CSS/JS), sem servidor próprio — um formulário funcional precisa de um serviço externo (ex: Formspree, EmailJS, Web3Forms). Não implementei porque isso exige criar uma conta em um desses serviços e decidir para onde as respostas vão. Se quiser, é rápido de adicionar depois que você escolher o serviço |
| Botão direto WhatsApp | ✅ | Com mensagem pré-preenchida |
| Endereço + mapa interativo | ✅ | |
| Horário por dia da semana | 🧍 | Pendente |
| Telefone `tel:` clicável | 🧍 | Ver item no rodapé |
| Link para Instagram | ✅ | |

---

## 5. Elementos de conversão

| Item | Status |
|---|---|
| CTA visível | ✅ | Em várias seções + faixa final |
| Botão flutuante de WhatsApp | ✅ | Fixo no canto, com animação sutil |
| Formulário de agendamento simples | ❌ / 🧍 | Ver "Contato" acima — depende de serviço externo |
| Prova social | ✅ parcial | Depoimentos existem; idealmente trocar por reais (item 1) |
| Senso de urgência ("vagas limitadas") | ✅ | Já presente no texto da Avaliação Gratuita, como no discurso real dela |
| Galeria antes/depois | 🔮 | Removida a seu pedido por enquanto; recriamos quando houver fotos reais autorizadas |
| FAQ | 🔧 | Implementado |
| Google Meu Negócio no site | 🧍 | Depende de você criar o perfil primeiro (item 5 do resumo) |

---

## 6. Identidade visual e design

| Item | Status |
|---|---|
| Paleta consistente (rosa/branco/dourado) | ✅ | |
| Tipografia ≤ 2 famílias | ✅ | Cormorant Garamond + Poppins |
| Fotos profissionais | 🧍 parcial | 1 foto real hoje, resto é placeholder estilizado |
| Espaçamento generoso | ✅ | |
| Ícones consistentes | ✅ | |
| Responsivo (mobile/tablet/desktop) | ✅ | Testado nos três formatos |
| Contraste e área de toque em botões | ✅ | |
| Favicon | 🔧 | Monograma "NM" gerado por código — **troque por um logo real** quando tiver um pronto (é só um placeholder de marca) |

---

## 7. Performance e aspectos técnicos

| Item | Status |
|---|---|
| Velocidade otimizada | ✅ | Site é HTML/CSS/JS puro, sem frameworks pesados nem dependências externas além de 1 fonte do Google |
| Imagens comprimidas | ✅ | Foto principal já otimizada (~135KB) |
| HTTPS/SSL | 🧍 | Depende da hospedagem escolhida (a maioria oferece grátis: Netlify, Vercel, Hostinger, etc.) |
| Domínio próprio | 🧍 | Precisa comprar (ex: registro.br) |
| Hospedagem confiável | 🧍 | Precisa escolher/contratar |
| Cross-browser | ✅ | CSS padrão, sem recursos exclusivos de um navegador |
| Mobile-first responsivo | ✅ | |
| Backup automático | 🧍 | Depende da hospedagem escolhida |
| Formulários testados | — | Não há formulário ainda (ver item 4) |
| Links sem erro 404 | ✅ | Revisado |

---

## 8. SEO

| Item | Status |
|---|---|
| Title/meta description únicos | ✅ | Home e páginas legais têm title próprio |
| URLs amigáveis | ✅ parcial | Site é uma página só com âncoras (`#servicos`, `#sobre`...); se no futuro quiser páginas próprias por serviço para SEO mais avançado, é uma reestruturação de fase 2 |
| Hierarquia H1/H2/H3 | ✅ | |
| Alt text em imagens | ✅ | Foto real já tem descrição; placeholders não são `<img>` então não precisam |
| Palavras-chave naturais | ✅ | "Arvorezinha", "sobrancelhas", "nanofios", "exossomos" já aparecem no texto |
| Google Meu Negócio | 🧍 | Você precisa criar/reivindicar |
| Sitemap.xml | 🔧 | Criado (`sitemap.xml`) — **atualizar URL quando tiver domínio** |
| Robots.txt | 🔧 | Criado (`robots.txt`) — mesma observação |
| Dados estruturados (Schema.org) | 🔧 | Adicionado `LocalBusiness` no `<head>` do `index.html` — ajuda o Google a entender que é um negócio local |
| Conteúdo original | ✅ | |
| Link building local | 🔮 | Ação de marketing (parcerias, diretórios locais), fora do escopo de código |

---

## 9. Integrações

| Item | Status |
|---|---|
| WhatsApp Business | ✅ / 🧍 | Botão pronto, falta só o número real |
| Instagram feed ao vivo | 🔮 | Precisa de token/API do Instagram — mais complexo, fase 2 |
| Google Maps | ✅ | Já incorporado |
| Google Analytics / Meta Pixel | 🧍 | Crie a conta e me passe o ID de medição que eu integro o código de rastreamento |
| Sistema de agendamento online | 🧍 | Você já usa o link `maapp.com.br/nathaliamouraestetica` — me avise se quer que os botões apontem para lá em vez de (ou além do) WhatsApp direto |
| Google Reviews no site | 🔮 | Precisa de chave de API do Google Places, fase 2 |
| Newsletter | 🔮 | Opcional, fase 2 |

---

## 10. Aspectos legais (Brasil)

| Item | Status |
|---|---|
| Política de Privacidade (LGPD) | 🔧 | Rascunho pronto, **revisar com advogado** antes de publicar oficialmente |
| Aviso de cookies | 🔧 | Banner implementado (aparece uma vez, lembra a escolha no navegador) |
| Termos de Uso | 🔧 | Rascunho pronto, **revisar com advogado** |
| CNPJ no rodapé | 🧍 | Só se a clínica for formalizada |
| Autorização de imagem de clientes | 🧍 | **Importante**: antes de me enviar qualquer foto de antes/depois ou depoimento com nome, confirme que a cliente autorizou o uso no site |
| Linguagem regulatória (evitar termos médicos) | ✅ | Revisei o texto atual — não usa termos que soem como tratamento médico sem ser profissional habilitado (CRM/CRF) |

---

## 11. Acessibilidade

| Item | Status |
|---|---|
| Contraste de cores adequado | ✅ | |
| Textos redimensionáveis | ✅ | Unidades relativas (`rem`/`em`) |
| Navegação por teclado | ✅ | Links e botões nativos + link "Pular para o conteúdo" adicionado |
| Alt text em imagens | ✅ | |
| Vídeos com legenda | — | Não há vídeos no site ainda |

---

## 12. Conteúdo de apoio

| Item | Status |
|---|---|
| FAQ | 🔧 | Implementado (`#faq`) |
| Blog | 🔮 | Fase 2 |
| Certificados/diplomas | 🧍 | Me envie fotos se quiser uma seção "Formação" |
| Vídeos curtos | 🧍 | Pode reaproveitar reels do Instagram, se quiser incorporar |
| "Perguntas antes de agendar" | 🔧 | Incorporado dentro do próprio FAQ |

---

## 13. Pós-lançamento (isso é rotina sua, não código)

- Atualizar a galeria de antes/depois periodicamente.
- Revisar informações de contato e horário sempre que mudarem.
- Acompanhar o Google Analytics (depois de configurado) para entender a
  origem dos visitantes.
- Testar o botão de WhatsApp de vez em quando.
- Renovar domínio e hospedagem em dia.
- Fazer backup do site periodicamente (verifique se a hospedagem já faz
  isso automaticamente).

---

## Arquivos novos criados nesta rodada

```
privacidade.html   → Política de Privacidade (rascunho LGPD)
termos.html        → Termos de Uso (rascunho)
404.html           → Página de erro personalizada
robots.txt         → Configuração para buscadores
sitemap.xml        → Mapa do site para o Google
checklist.md       → Este documento
```

## O que mudou em arquivos existentes

```
index.html    → + favicon, dados estruturados (Schema.org), link "pular
                para o conteúdo", seções novas (Como Funciona, FAQ, CTA
                final), rodapé com links legais, banner de cookies
css/styles.css → estilos para todas as seções/páginas novas
js/main.js     → lógica do banner de cookies
```
