document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                
                // Scroll to target with offset for fixed header
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Parallax effect for hero image
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
    
    // Comment form submission (placeholder for actual implementation)
    const commentForm = document.querySelector('.comment-form');
    
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const commentInput = document.getElementById('comment');
            
            if (nameInput.value && emailInput.value && commentInput.value) {
                // In a real implementation, this would send data to a server
                alert('Comentário enviado com sucesso! Em uma implementação real, este comentário seria salvo em um banco de dados.');
                
                // Clear form
                nameInput.value = '';
                emailInput.value = '';
                commentInput.value = '';
            }
        });
    }
    
    // Reply button functionality (placeholder)
    const replyButtons = document.querySelectorAll('.btn-reply');
    
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const commentAuthor = this.closest('.comment').querySelector('.comment-author').textContent;
            const commentForm = document.querySelector('.comment-form');
            
            // Scroll to comment form
            commentForm.scrollIntoView({ behavior: 'smooth' });
            
            // Pre-fill comment with reply format
            document.getElementById('comment').value = `@${commentAuthor} `;
            document.getElementById('comment').focus();
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.article-section, .image-divider, .quote-block');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('.article-section, .image-divider, .quote-block').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();
});

