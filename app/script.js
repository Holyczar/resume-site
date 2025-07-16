// Анимация при загрузке
        document.addEventListener('DOMContentLoaded', () => {
            const animateElements = document.querySelectorAll('.animate');
            
            animateElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 200);
            });
            
        
        
      
