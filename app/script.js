// Анимация при загрузке
        document.addEventListener('DOMContentLoaded', () => {
            const animateElements = document.querySelectorAll('.animate');
            
            animateElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 200);
            });
            
            // Анимация прогресс-баров
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        });
        
        
      
