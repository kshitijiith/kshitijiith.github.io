// Cake page JavaScript functionality
let candlesBlown = 0;
const totalCandles = 2;

// Initialize cake page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCakePage();
    generateDynamicHearts();
});

function initializeCakePage() {
    // Add click listeners to all candles
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        candle.addEventListener('click', () => blowCandle(index + 1));
    });
    
    // Add click listener to final button
    const finalButton = document.getElementById('finalBtn');
    if (finalButton) {
        finalButton.addEventListener('click', goToFinalPage);
    }
    
    // Hide celebration message and button initially
    const celebrationMessage = document.getElementById('celebrationMsg');
    const finalButtonEl = document.getElementById('finalBtn');
    
    if (celebrationMessage) {
        celebrationMessage.classList.add('hidden');
    }
    if (finalButtonEl) {
        finalButtonEl.classList.add('hidden');
    }
}

function blowCandle(candleNumber) {
    const flame = document.querySelector(`.candle${candleNumber} .flame`);
    
    if (flame && !flame.classList.contains('blown-out')) {
        // Add blow animation
        flame.classList.add('blowing');
        
        // Create blow effect
        createBlowEffect(flame);
        
        setTimeout(() => {
            flame.classList.add('blown-out');
            candlesBlown++;
            
            // Check if all candles are blown out
            if (candlesBlown === totalCandles) {
                setTimeout(() => {
                    showCelebration();
                }, 500);
            }
        }, 500);
    }
}

function createBlowEffect(flameElement) {
    // Create sparkle effect when candle is blown
    const rect = flameElement.getBoundingClientRect();
    const sparkles = 8;
    
    for (let i = 0; i < sparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = rect.left + 'px';
        sparkle.style.top = rect.top + 'px';
        sparkle.style.fontSize = '12px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '100';
        
        document.body.appendChild(sparkle);
        
        // Animate sparkle
        const angle = (i / sparkles) * 2 * Math.PI;
        const distance = 50 + Math.random() * 30;
        const endX = rect.left + Math.cos(angle) * distance;
        const endY = rect.top + Math.sin(angle) * distance;
        
        sparkle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${endX - rect.left}px, ${endY - rect.top}px) scale(0.5)`,
                opacity: 0
            }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => {
            sparkle.remove();
        };
    }
}

function showCelebration() {
    const celebrationMessage = document.getElementById('celebrationMsg');
    const finalButton = document.getElementById('finalBtn');
    
    // Show celebration message
    if (celebrationMessage) {
        celebrationMessage.classList.remove('hidden');
    }
    
    // Show final button after a delay
    setTimeout(() => {
        if (finalButton) {
            finalButton.classList.remove('hidden');
        }
    }, 1000);
    
    // Create celebration heart burst
    createCelebrationHeartBurst();
    
    // Change instruction text
    const instruction = document.querySelector('.instruction');
    if (instruction) {
        instruction.innerHTML = 'Perfect! All candles are blown out! 🎉';
    }
}

function createCelebrationHeartBurst() {
    const colors = ['❤️', '💖', '💕', '💗', '💓', '💝'];
    const burstCount = 20;
    
    for (let i = 0; i < burstCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = colors[Math.floor(Math.random() * colors.length)];
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = Math.random() * 20 + 15 + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '50';
            heart.style.transform = 'translate(-50%, -50%)';
            
            document.body.appendChild(heart);
            
            // Random direction for burst
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 200 + 100;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            heart.animate([
                {
                    transform: 'translate(-50%, -50%) scale(0)',
                    opacity: 0
                },
                {
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 1,
                    offset: 0.3
                },
                {
                    transform: `translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(0.5)`,
                    opacity: 0
                }
            ], {
                duration: 2000,
                easing: 'ease-out'
            }).onfinish = () => {
                heart.remove();
            };
        }, i * 100);
    }
}

function generateDynamicHearts() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance to create a heart
            createDynamicHeart();
        }
    }, 500);
}

function createDynamicHeart() {
    const heartRain = document.querySelector('.heart-rain');
    if (!heartRain) return;
    
    const heart = document.createElement('div');
    const heartTypes = ['💖', '💕', '💗', '💓', '💝', '❤️'];
    
    heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    heart.className = 'dynamic-heart';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '-50px';
    heart.style.fontSize = Math.random() * 10 + 15 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.pointerEvents = 'none';
    
    heartRain.appendChild(heart);
    
    // Animate the heart falling
    const duration = Math.random() * 2000 + 3000;
    heart.animate([
        {
            transform: 'translateY(-50px) rotate(0deg)',
            opacity: heart.style.opacity
        },
        {
            transform: `translateY(${window.innerHeight + 50}px) rotate(360deg)`,
            opacity: 0
        }
    ], {
        duration: duration,
        easing: 'linear'
    }).onfinish = () => {
        heart.remove();
    };
}

function goToFinalPage() {
    // Create a beautiful transition effect before going to final page
    createTransitionEffect();
    
    setTimeout(() => {
        // For now, we'll create the final page
        // You can replace this with navigation to an actual final page
        window.location.href = 'http://anya25thbirthday.me/final.html';
    }, 1000);
}

function createTransitionEffect() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'radial-gradient(circle, rgba(255,182,193,0) 0%, rgba(255,182,193,0.8) 50%, rgba(255,182,193,1) 100%)';
    overlay.style.zIndex = '1000';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    
    document.body.appendChild(overlay);
    
    overlay.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 1000,
        easing: 'ease-in-out'
    });
    
    // Create floating hearts during transition
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const transitionHeart = document.createElement('div');
            transitionHeart.innerHTML = '💖';
            transitionHeart.style.position = 'fixed';
            transitionHeart.style.left = Math.random() * 100 + '%';
            transitionHeart.style.top = '100%';
            transitionHeart.style.fontSize = Math.random() * 30 + 20 + 'px';
            transitionHeart.style.pointerEvents = 'none';
            transitionHeart.style.zIndex = '1001';
            
            document.body.appendChild(transitionHeart);
            
            transitionHeart.animate([
                {
                    transform: 'translateY(0) scale(0) rotate(0deg)',
                    opacity: 0
                },
                {
                    transform: 'translateY(-50px) scale(1) rotate(180deg)',
                    opacity: 1,
                    offset: 0.5
                },
                {
                    transform: 'translateY(-100vh) scale(0.5) rotate(360deg)',
                    opacity: 0
                }
            ], {
                duration: 2000,
                easing: 'ease-out'
            }).onfinish = () => {
                transitionHeart.remove();
            };
        }, i * 50);
    }
}

// Add some interactive cake shake effect when clicked
document.addEventListener('DOMContentLoaded', function() {
    const cakeBase = document.querySelector('.cake-base');
    if (cakeBase) {
        cakeBase.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'cakeFloat 3s ease-in-out infinite, cakeShake 0.5s ease-in-out';
            }, 10);
            
            setTimeout(() => {
                this.style.animation = 'cakeFloat 3s ease-in-out infinite';
            }, 500);
        });
    }
});

// Add cake shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes cakeShake {
        0%, 100% { transform: translateX(0) translateY(0); }
        25% { transform: translateX(-5px) translateY(-5px); }
        50% { transform: translateX(5px) translateY(0); }
        75% { transform: translateX(-3px) translateY(-3px); }
    }
`;
document.head.appendChild(style);
