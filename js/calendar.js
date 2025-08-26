// Calendário para a página de horários
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const currentMonthEl = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    
    if (calendarEl && currentMonthEl && prevMonthBtn && nextMonthBtn) {
        let currentDate = new Date();
        
        function renderCalendar(date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            
            // Nome do mês e ano
            const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                               "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            currentMonthEl.textContent = `${monthNames[month]} ${year}`;
            
            // Dias da semana
            const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
            
            // Limpar calendário
            calendarEl.innerHTML = '';
            
            // Adicionar cabeçalhos dos dias da semana
            weekdays.forEach(day => {
                const dayEl = document.createElement('div');
                dayEl.className = 'calendar-day header';
                dayEl.textContent = day;
                calendarEl.appendChild(dayEl);
            });
            
            // Primeiro dia do mês
            const firstDay = new Date(year, month, 1);
            // Último dia do mês
            const lastDay = new Date(year, month + 1, 0);
            
            // Dias em branco antes do primeiro dia
            for (let i = 0; i < firstDay.getDay(); i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'calendar-day';
                calendarEl.appendChild(emptyDay);
            }
            
            // Dias do mês
            for (let i = 1; i <= lastDay.getDate(); i++) {
                const dayEl = document.createElement('div');
                dayEl.className = 'calendar-day';
                dayEl.textContent = i;
                
                // Verificar se é hoje
                const today = new Date();
                if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
                    dayEl.classList.add('today');
                }
                
                // Marcar dias de stream (segundas, quartas e sextas)
                const dayOfWeek = new Date(year, month, i).getDay();
                if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
                    dayEl.classList.add('stream-day');
                }
                
                calendarEl.appendChild(dayEl);
            }
        }
        
        // Renderizar calendário inicial
        renderCalendar(currentDate);
        
        // Navegação do calendário
        prevMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
        });
        
        nextMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
        });
    }
});
