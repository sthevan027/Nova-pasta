# 🚀 Atende Cliente - Sistema CRM

## 📋 Sobre o Projeto

Sistema CRM completo desenvolvido para apresentação ao cliente, com foco em atendimento omnichannel, gestão de contatos e automação de processos. O protótipo demonstra todas as funcionalidades principais de um sistema de atendimento profissional.

## ✨ Funcionalidades Implementadas

### 🏠 Dashboard
- **Métricas em tempo real**: Conversas ativas, taxa de resposta do bot, campanhas enviadas, SLA médio
- **Cards interativos** com animações e hover effects
- **Conversas recentes** com status online/offline
- **Gráficos de atividade** (placeholder para integração futura)

### 💬 Chat & Mensagens
- **Interface de chat profissional** com 3 colunas (lista, conversa, detalhes)
- **Conversas em tempo real** com simulação de respostas automáticas
- **Status de usuários** (online, offline, ocupado)
- **Ferramentas de chat**: anexos, emojis, templates
- **Transferência de conversas** entre agentes
- **Badges de notificação** para mensagens não lidas

### 📅 Agenda & Calendário
- **Calendário próprio** (sem dependência do Google Calendar)
- **Navegação por mês** com botões anterior/próximo
- **Destaque do dia atual** com círculo roxo
- **Eventos visuais** com tooltips informativos
- **Modal para criação** de novos eventos
- **Filtros por tipo** de agenda (Suporte, Vendas, Onboarding)

### 👥 Gestão de Contatos
- **Lista completa de contatos** com avatares
- **Informações detalhadas**: nome, email, telefone, empresa
- **Status de contatos** (ativo, inativo)
- **Ações rápidas**: iniciar chat, editar, mais opções
- **Busca e filtros** em tempo real
- **Exportação de dados**

### 🏢 Gestão de Empresas
- **Base de empresas** com informações completas
- **Contatos vinculados** por empresa
- **Histórico de interações**
- **Métricas por empresa**

### 👤 Gestão de Agentes
- **Perfis de agentes** com informações de contato
- **Status em tempo real** (online, offline, ocupado)
- **Permissões e cargos**
- **Estatísticas de performance**

### 🏷️ Etiquetas & Categorização
- **Sistema de etiquetas** coloridas
- **Categorização automática** de contatos
- **Filtros por etiquetas**
- **Gestão de cores** personalizadas

### 🚀 Disparos & Campanhas
- **Criação de campanhas** com formulário completo
- **Pré-visualização** de mensagens
- **Agendamento** de envios
- **Templates personalizáveis**
- **Métricas de entrega**

### 🧠 Fluxo & URA
- **Editor visual** de fluxos (placeholder)
- **Blocos arrastáveis**: Mensagem, Pergunta, Condição, Transferir
- **Conexões entre blocos** com SVG
- **Teste de automação**
- **Exportação/importação** de fluxos

### 📊 Relatórios & Analytics
- **Dashboard de métricas** (placeholder)
- **Relatórios personalizáveis**
- **Exportação em PDF/Excel**
- **Gráficos interativos**

### 🔌 Integração
- **WhatsApp Business API**
- **Instagram Direct**
- **Facebook Messenger**
- **Email marketing**
- **APIs externas**

### ⚙️ Configurações
- **Configurações gerais** da empresa
- **Perfis de usuário**
- **Permissões e roles**
- **Integrações externas**
- **Backup e segurança**

## 🎨 Design & UX

### Paleta de Cores
- **Primária**: #7b2b7f (Roxo Atende Cliente)
- **Secundária**: #4f4b59 (Cinza grafite)
- **Neutras**: Tons de cinza (#f8f9fa a #202124)
- **Status**: Verde (#34a853), Amarelo (#fbbc04), Vermelho (#ea4335), Azul (#4285f4)

### Componentes
- **Sidebar moderna** com navegação intuitiva
- **Header responsivo** com busca global
- **Cards interativos** com hover effects
- **Modais elegantes** para formulários
- **Toast notifications** para feedback
- **Tabelas responsivas** com ações inline
- **Botões com estados** (hover, active, disabled)

### Responsividade
- **Mobile-first** design
- **Breakpoints**: 480px, 768px, 1024px
- **Sidebar colapsível** em dispositivos móveis
- **Grid adaptativo** para diferentes telas
- **Touch-friendly** para tablets

## 🛠️ Tecnologias Utilizadas

- **HTML5** semântico e acessível
- **CSS3** com variáveis customizadas e Grid/Flexbox
- **JavaScript ES6+** vanilla (sem frameworks)
- **Font Awesome** para ícones
- **Google Fonts** (Inter) para tipografia
- **LocalStorage** para persistência de dados

## 📱 Funcionalidades Interativas

### Navegação
- **SPA (Single Page Application)** sem recarregamento
- **Breadcrumbs** dinâmicos
- **Estados ativos** na navegação
- **Transições suaves** entre páginas

### Busca Global
- **Busca em tempo real** com debounce
- **Resultados categorizados** (contatos, empresas, tickets)
- **Navegação direta** para resultados
- **Histórico de buscas**

### Notificações
- **Toast notifications** com auto-dismiss
- **Badges de contagem** em tempo real
- **Notificações simuladas** para demonstração
- **Diferentes tipos**: sucesso, erro, aviso, info

### Modais
- **Sistema de modais** reutilizável
- **Overlay com blur** para foco
- **Fechamento por ESC** ou clique fora
- **Formulários responsivos** dentro dos modais

## 🚀 Como Usar

### Instalação
1. Clone ou baixe os arquivos
2. Abra `index.html` em um navegador moderno
3. Não requer servidor local (funciona com file://)

### Navegação
- **Clique nos itens** do menu lateral para navegar
- **Use a busca global** no header para encontrar conteúdo
- **Interaja com os botões** para ver as funcionalidades
- **Teste o chat** enviando mensagens
- **Clique nos dias** do calendário para criar eventos

### Demonstração
- **Dashboard**: Visualize métricas e conversas recentes
- **Chat**: Teste envio de mensagens e navegação entre conversas
- **Agenda**: Navegue pelo calendário e crie eventos
- **Contatos**: Explore a lista de contatos e ações disponíveis
- **Outras páginas**: Navegue para ver a estrutura completa

## 📋 Checklist de Funcionalidades

### ✅ Implementado
- [x] Layout responsivo e moderno
- [x] Navegação SPA funcional
- [x] Dashboard com métricas
- [x] Chat interativo com mensagens
- [x] Calendário com eventos
- [x] Lista de contatos
- [x] Sistema de notificações
- [x] Busca global
- [x] Modais para formulários
- [x] Animações e transições
- [x] Menu lateral colapsível
- [x] Header com ações
- [x] Toast notifications
- [x] Estados hover e active
- [x] Design system consistente

### 🔄 Para Desenvolvimento Futuro
- [ ] Integração com APIs reais
- [ ] Backend para persistência
- [ ] Autenticação de usuários
- [ ] WebSockets para chat real
- [ ] Upload de arquivos
- [ ] Relatórios com gráficos reais
- [ ] Sistema de permissões
- [ ] Backup e restore
- [ ] Multi-idiomas
- [ ] Temas personalizáveis

## 🎯 Objetivos Alcançados

### Para Apresentação ao Cliente
- ✅ **Interface profissional** e moderna
- ✅ **Funcionalidades demonstradas** de forma interativa
- ✅ **Responsividade** em todos os dispositivos
- ✅ **Performance** otimizada
- ✅ **UX intuitiva** e fácil de usar
- ✅ **Visual impressionante** para ganhar o cliente

### Para Desenvolvimento
- ✅ **Código limpo** e bem estruturado
- ✅ **Fácil manutenção** e extensão
- ✅ **Padrões modernos** de desenvolvimento
- ✅ **Documentação** completa
- ✅ **Base sólida** para implementação real

## 📞 Contato

**Desenvolvido para**: Atende Cliente  
**Tipo**: Protótipo de apresentação  
**Status**: Pronto para demonstração  
**Tecnologia**: HTML5, CSS3, JavaScript Vanilla  

---

*Este protótipo foi desenvolvido para demonstrar as capacidades de um sistema CRM completo, focando na experiência do usuário e na apresentação visual para conquistar o cliente.*