// Sistema CRM - Atende Cliente
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
    }, 1500);

    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const route = item.dataset.route;
            if (route) {
                // Remove active from all pages
                document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
                // Add active to target page
                const targetPage = document.getElementById(route);
                if (targetPage) targetPage.classList.add('active');
                
                // Update nav items
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                // Update breadcrumb
                const titles = {
                    'dashboard': 'Dashboard',
                    'chat': 'Chat',
                    'agenda': 'Agenda',
                    'fluxo': 'Fluxo & URA',
                    'contatos': 'Contatos',
                    'empresas': 'Empresas',
                    'agentes': 'Agentes',
                    'etiquetas': 'Etiquetas',
                    'disparos': 'Disparos',
                    'campanhas': 'Campanhas',
                    'templates': 'Templates',
                    'relatorios': 'Relatórios',
                    'integracao': 'Integração',
                    'configuracoes': 'Configurações'
                };
                document.getElementById('currentPage').textContent = titles[route] || 'Página';
            }
        });
    });

    // Calendar
    function renderCalendar() {
        const calendarDays = document.getElementById('calendarDays');
        if (!calendarDays) return;

        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        
        calendarDays.innerHTML = '';

        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        // Empty days before month starts
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day other-month';
            calendarDays.appendChild(emptyDay);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;

            const currentDate = new Date(currentYear, currentMonth, day);
            if (currentDate.toDateString() === today.toDateString()) {
                dayElement.classList.add('today');
            }

            dayElement.addEventListener('click', () => {
                showToast(`Dia ${day} selecionado!`, 'info');
            });

            calendarDays.appendChild(dayElement);
        }
    }

    // Chat functionality
    const chatItems = document.querySelectorAll('.chat-item');
    chatItems.forEach(item => {
        item.addEventListener('click', () => {
            chatItems.forEach(chat => chat.classList.remove('active'));
            item.classList.add('active');
        });
    });

    const sendBtn = document.querySelector('.chat-input .btn-primary');
    const chatInput = document.querySelector('.chat-input input');
    
    sendBtn?.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'sent');
            chatInput.value = '';
            setTimeout(() => {
                addMessage('Obrigado pela sua mensagem!', 'received');
            }, 1000);
        }
    });

    function addMessage(text, type) {
        const messagesContainer = document.querySelector('.chat-messages');
        if (!messagesContainer) return;

        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}`;
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        messageElement.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${timeString}</span>
            </div>
        `;

        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Modals
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');

    modalClose?.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    modalOverlay?.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    // Search
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            if (e.target.value.length > 2) {
                showToast(`Buscando por: ${e.target.value}`, 'info');
            }
        });
    }

    // Toast notifications
    function showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const iconMap = {
            'success': 'fas fa-check-circle',
            'error': 'fas fa-exclamation-circle',
            'warning': 'fas fa-exclamation-triangle',
            'info': 'fas fa-info-circle'
        };

        toast.innerHTML = `
            <div class="toast-content">
                <i class="${iconMap[type] || iconMap.info}"></i>
                <span>${message}</span>
            </div>
            <button class="toast-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 5000);
    }

    // Global click handlers
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-primary')) {
            const button = e.target.closest('.btn-primary');
            const text = button.textContent.trim();
            if (text.includes('Novo')) {
                showToast(`${text} clicado!`, 'success');
            }
        }
        
        if (e.target.closest('.btn-icon')) {
            const button = e.target.closest('.btn-icon');
            const title = button.getAttribute('title');
            if (title) {
                showToast(`${title} executado!`, 'info');
            }
        }
    });

    // Initialize calendar
    renderCalendar();

    // Add global styles
    const style = document.createElement('style');
    style.textContent = `
        .form-group { margin-bottom: 1rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--gray-700); }
        .form-input { width: 100%; padding: 0.75rem; border: 1px solid var(--gray-300); border-radius: 0.5rem; font-size: 0.875rem; }
        .form-input:focus { outline: none; border-color: var(--primary-color); box-shadow: 0 0 0 3px rgba(123, 43, 127, 0.1); }
        .form-actions { display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.5rem; }
        .toast-content { display: flex; align-items: center; gap: 0.5rem; }
        .toast-close { background: none; border: none; color: var(--gray-500); cursor: pointer; padding: 0.25rem; margin-left: auto; }
        .toast-success { border-left-color: var(--success-color); }
        .toast-error { border-left-color: var(--error-color); }
        .toast-warning { border-left-color: var(--warning-color); }
        .toast-info { border-left-color: var(--info-color); }
    `;
    document.head.appendChild(style);
});