# Changelog

## [1.2.0] - 2026-07-01

### Adicionado
- Datas nos cards de projetos (mês/ano)
- Repositórios do GitHub como novos cards de projeto (Conversor, SalvusPet, Decodificador, Dra. Quantum)
- Links de deploy (GitHub Pages) para projetos com site publicado
- Cache-bust no script do currículo para evitar cache do navegador

### Alterado
- Cards reorganizados do mais novo ao mais antigo
- Botões dos cards alinhados com flex-column e mt-auto
- WhatsApp alterado para @edigelson.dev
- Projetos do currículo PDF agora incluem data, repositório e link de deploy

## [1.1.0] - 2026-06-19

### Adicionado
- Seção de contato com layout em duas colunas (formulário à esquerda, informações à direita)
- Informações de contato com ícones (e-mail, WhatsApp, localização)
- Seção "Vamos trabalhar juntos?" com botões de WhatsApp e e-mail
- Geração dinâmica de currículo em PDF via jsPDF ao clicar em "Baixar Currículo"
- Script `assets/js/gerar-curriculo.js` para montagem do PDF com dados pessoais, habilidades e projetos
- Script `assets/js/ano.js` para atualizar automaticamente o ano no rodapé
- Bootstrap Icons para ícones em toda a página
- Informações pessoais no cabeçalho (localização, estado civil, nacionalidade)

### Alterado
- Texto "Sobre" reescrito
- Botão "Baixar Currículo" movido para o cabeçalho, ao lado das redes sociais
- Placeholders de contato substituídos por dados reais
- Footer agora com ano dinâmico via JavaScript
- README e CHANGELOG adicionados/atualizados

## [1.0.0] - 2026-06-19

### Adicionado
- Página inicial do portfólio com seções Sobre, Projetos e Contato
- Layout responsivo com Bootstrap 5
- Cards de projetos com links para os módulos de estudo
- Formulário de contato acessível
- Botão "Voltar ao topo"
- Módulos de estudo: Fundamentos JS, DOM, API, Storage, CSS Grid, Temas
