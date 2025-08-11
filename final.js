// Final page JavaScript functionality
let isCardOpen = false;

document.addEventListener('DOMContentLoaded', function() {
    initializeFinalPage();
    createFloatingElements();
});

function initializeFinalPage() {
    const birthdayCard = document.getElementById('birthdayCard');
    
    if (birthdayCard) {
        birthdayCard.addEventListener('click', toggleCard);
    }
    
    // Create welcome effect
    setTimeout(() => {
        createWelcomeEffect();
    }, 500);
}

function toggleCard() {
    const birthdayCard = document.getElementById('birthdayCard');
    
    if (!isCardOpen) {
        // Open the card
        birthdayCard.classList.add('opening');
        birthdayCard.classList.add('open');
        isCardOpen = true;
        
        // Create celebration effect when opening
        createCardOpenEffect();
        
        // Remove animation class after animation completes
        setTimeout(() => {
            birthdayCard.classList.remove('opening');
        }, 800);
        
    } else {
        // Close the card
        birthdayCard.classList.add('closing');
        birthdayCard.classList.remove('open');
        isCardOpen = false;
        
        // Remove animation class after animation completes
        setTimeout(() => {
            birthdayCard.classList.remove('closing');
        }, 800);
    }
}

function createCardOpenEffect() {
    // Create burst of hearts when card opens
    const heartColors = ['💕', '💖', '💗', '💝', '💓', '💌', '❤️'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = heartColors[Math.floor(Math.random() * heartColors.length)];
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = Math.random() * 20 + 15 + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '100';
            heart.style.transform = 'translate(-50%, -50%)';
            
            document.body.appendChild(heart);
            
            // Random direction for burst
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 150 + 100;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            heart.animate([
                {
                    transform: 'translate(-50%, -50%) scale(0)',
                    opacity: 0
                },
                {
                    transform: 'translate(-50%, -50%) scale(1.2)',
                    opacity: 1,
                    offset: 0.3
                },
                {
                    transform: `translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(0.5)`,
                    opacity: 0
                }
            ], {
                duration: 2500,
                easing: 'ease-out'
            }).onfinish = () => {
                heart.remove();
            };
        }, i * 80);
    }
}

function createWelcomeEffect() {
    // Create sparkles around the card when page loads
    const sparkles = ['✨', '⭐', '💫', '🌟'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.fontSize = Math.random() * 15 + 10 + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '50';
            
            document.body.appendChild(sparkle);
            
            sparkle.animate([
                {
                    transform: 'scale(0) rotate(0deg)',
                    opacity: 0
                },
                {
                    transform: 'scale(1) rotate(180deg)',
                    opacity: 1,
                    offset: 0.5
                },
                {
                    transform: 'scale(0) rotate(360deg)',
                    opacity: 0
                }
            ], {
                duration: 3000,
                easing: 'ease-out'
            }).onfinish = () => {
                sparkle.remove();
            };
        }, i * 150);
    }
}

function createFloatingElements() {
    // Periodically create new floating hearts
    setInterval(() => {
        if (Math.random() < 0.3) {
            createRandomHeart();
        }
    }, 2000);
    
    // Periodically create balloon effects
    setInterval(() => {
        if (Math.random() < 0.2) {
            createExtraBalloon();
        }
    }, 5000);
}

function createRandomHeart() {
    const heartTypes = ['💕', '💖', '💗', '💝', '💓'];
    const heart = document.createElement('div');
    
    heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = Math.random() * 15 + 20 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '5';
    heart.style.opacity = '0.8';
    
    document.body.appendChild(heart);
    
    // Animate heart floating up
    heart.animate([
        {
            transform: 'translateY(0) rotate(0deg)',
            opacity: 0.8
        },
        {
            transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 3000 + 4000,
        easing: 'ease-out'
    }).onfinish = () => {
        heart.remove();
    };
}

function createExtraBalloon() {
    const balloonColors = ['🎈', '🎈', '🎈'];
    const balloon = document.createElement('div');
    
    balloon.innerHTML = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.position = 'fixed';
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.bottom = '-60px';
    balloon.style.fontSize = Math.random() * 10 + 35 + 'px';
    balloon.style.pointerEvents = 'none';
    balloon.style.zIndex = '3';
    
    document.body.appendChild(balloon);
    
    // Animate balloon floating up with slight swaying
    balloon.animate([
        {
            transform: 'translateY(0) translateX(0)',
            opacity: 1
        },
        {
            transform: `translateY(-${window.innerHeight + 100}px) translateX(${Math.random() * 100 - 50}px)`,
            opacity: 0.5
        }
    ], {
        duration: Math.random() * 2000 + 6000,
        easing: 'ease-out'
    }).onfinish = () => {
        balloon.remove();
    };
}

// Add card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const birthdayCard = document.getElementById('birthdayCard');
    
    if (birthdayCard) {
        birthdayCard.addEventListener('mouseenter', function() {
            if (!isCardOpen) {
                createHoverSparkles();
            }
        });
    }
});

function createHoverSparkles() {
    const sparkles = ['✨', '💫'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'fixed';
            sparkle.style.left = (window.innerWidth / 2 + Math.random() * 200 - 100) + 'px';
            sparkle.style.top = (window.innerHeight / 2 + Math.random() * 200 - 100) + 'px';
            sparkle.style.fontSize = '15px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '25';
            
            document.body.appendChild(sparkle);
            
            sparkle.animate([
                {
                    transform: 'scale(0)',
                    opacity: 0
                },
                {
                    transform: 'scale(1)',
                    opacity: 1,
                    offset: 0.5
                },
                {
                    transform: 'scale(0)',
                    opacity: 0
                }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => {
                sparkle.remove();
            };
        }, i * 100);
    }
}
