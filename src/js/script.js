// Type
// const text = "Hisyam Santoso";
// let index = 0;
// let direction = 1;
// const typingTextElement = document.getElementById('auto-type');

// function typeText() {
//     typingTextElement.textContent = text.substring(0, index);

//     if (index === text.length) {
//         direction = -1;
//     } else if (index === 0) {
//         direction = 1;
//     }

//     index += direction;
//     setTimeout(typeText, direction === 1 ? 100 : 300);
// }

// // Mulai animasi ketik teks
// typeText();

const dynamicText = document.querySelector('#auto-type');
const words = ['Hisyam Santoso', 'a Student', 'in College'];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    if(dynamicText) {
        dynamicText.textContent = currentChar || '\u200B';
        dynamicText.classList.add('stop-blinking');
    }

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        if(dynamicText) dynamicText.classList.remove('stop-blinking');
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
};

typeEffect();

// --- UX Enhancements ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animations
    // Select elements to animate: section headers, cards, about text
    const revealElements = document.querySelectorAll('section > .container > div:first-child, .grid > div, .grid > portfolio-card, #about .lg\\:w-1\\/2, #about .lg\\:w-7\\/12');
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // 2. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Portfolio Filtering
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioCards = document.querySelectorAll('#portfolio-grid > portfolio-card');

    if (filterButtons.length && portfolioCards.length) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');

                // Update active states
                filterButtons.forEach(b => {
                    b.classList.remove('bg-primary', 'text-dark', 'border-primary');
                    b.classList.add('border-slate-200', 'text-slate-600');
                });
                btn.classList.add('bg-primary', 'text-dark', 'border-primary');
                btn.classList.remove('border-slate-200', 'text-slate-600');

                // Filter cards
                portfolioCards.forEach(card => {
                    const category = card.getAttribute('category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.classList.remove('hidden');
                        // Briefly timeout to allow transition to trigger
                        setTimeout(() => {
                            card.classList.add('reveal-visible');
                        }, 50);
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // 4. 3D Tilt Effect on Hero Avatar
    const tiltElement = document.querySelector('.tilt-element');
    if (tiltElement) {
        tiltElement.addEventListener('mousemove', (e) => {
            const rect = tiltElement.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate rotation values (-15 to +15 degrees)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;
            
            tiltElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        tiltElement.addEventListener('mouseleave', () => {
            tiltElement.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    }

    // 5. Click to Copy Contact Info
    const copyTriggers = document.querySelectorAll('.copy-trigger');
    copyTriggers.forEach(trigger => {
        trigger.addEventListener('click', async () => {
            const copyText = trigger.getAttribute('data-copy');
            if (copyText) {
                try {
                    await navigator.clipboard.writeText(copyText);
                    const tooltip = trigger.querySelector('.copy-tooltip');
                    if (tooltip) {
                        tooltip.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
                        tooltip.classList.add('opacity-100', 'translate-y-0');
                        
                        setTimeout(() => {
                            tooltip.classList.remove('opacity-100', 'translate-y-0');
                            tooltip.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
                        }, 2000);
                    }
                } catch (err) {
                    console.error('Failed to copy!', err);
                }
            }
        });
    });
});
