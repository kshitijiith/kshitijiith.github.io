// Celebration page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create more heart rain periodically
    setInterval(createMoreHearts, 500); // Very frequent heart generation
    
    // Add extra sparkle effects
    addSparkleEffects();
    
    // Create heart clusters occasionally
    setInterval(createHeartCluster, 2000);
});

function createMoreHearts() {
    const heartRain = document.querySelector('.heart-rain');
    const hearts = ['💕', '💖', '💗', '💘', '💝', '💞', '💓', '💌', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤍', '🖤'];
    
    for (let i = 0; i < 8; i++) { // 8 hearts per batch for intense rain
        const heart = document.createElement('div');
        heart.className = 'dynamic-heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.fontSize = (Math.random() * 15 + 18) + 'px'; // Bigger hearts
        heart.style.animation = `heartFall ${Math.random() * 2 + 2.5}s linear forwards`; // Faster falling
        heart.style.opacity = '0.9';
        heart.style.zIndex = '2';
        
        heartRain.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 4500);
    }
}

function createHeartCluster() {
    const heartRain = document.querySelector('.heart-rain');
    const hearts = ['💕', '💖', '💗', '💘', '💝'];
    const centerX = Math.random() * 80 + 10; // Random position but not too close to edges
    
    // Create cluster of 5 hearts around the center position
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = hearts[i];
        heart.style.position = 'absolute';
        heart.style.left = (centerX + (Math.random() * 10 - 5)) + '%'; // Clustered around center
        heart.style.top = '-50px';
        heart.style.fontSize = (Math.random() * 8 + 20) + 'px';
        heart.style.animation = `heartFall ${Math.random() * 1 + 3}s linear forwards`;
        heart.style.opacity = '0.8';
        heart.style.zIndex = '3';
        heart.style.animationDelay = (i * 0.1) + 's'; // Slight delay between cluster hearts
        
        heartRain.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 4000);
    }
}

function addSparkleEffects() {
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '5';
        sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }, 1000); // Sparkles every second
}

let celebrationCount = 0;

function celebrateMore() {
    celebrationCount++;
    
    // Create massive burst of love effects
    createMassiveLoveBurst();
    
    // Change button text
    const btn = document.querySelector('.celebrate-button');
    
    if (celebrationCount === 1) {
        btn.innerHTML = '💕 Amazing! 💕';
        btn.style.animation = 'none';
        btn.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            btn.innerHTML = '� Let\'s Cut the Cake! �';
            btn.style.animation = 'buttonPulse 2s infinite';
            btn.style.transform = 'scale(1)';
        }, 2000);
    } else {
        // Navigate to cake page after second click
        btn.innerHTML = '🎂 Going to Cake! 🎂';
        btn.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            window.location.href = 'http://anya25thbirthday.me/cake.html';
        }, 1000);
    }
    
    // Add special message
    setTimeout(() => {
        if (celebrationCount === 1) {
            showSpecialMessage();
        } else {
            showCakeMessage();
        }
    }, 1000);
    
    // Create extra heart shower
    createHeartShower();
}

function createMassiveLoveBurst() {
    const loveSymbols = ['💕', '💖', '💗', '💘', '💝', '💞', '💓', '💌', '❤️', '💜', '💙', '💚', '💛', '🧡', '🤍'];
    
    for (let i = 0; i < 30; i++) { // Increased from 20 to 30
        setTimeout(() => {
            const love = document.createElement('div');
            love.innerHTML = loveSymbols[Math.floor(Math.random() * loveSymbols.length)];
            love.style.position = 'fixed';
            love.style.left = Math.random() * window.innerWidth + 'px';
            love.style.top = Math.random() * window.innerHeight + 'px';
            love.style.fontSize = (Math.random() * 20 + 25) + 'px'; // Bigger hearts
            love.style.pointerEvents = 'none';
            love.style.zIndex = '100';
            love.style.animation = 'loveBurst 3s ease-out forwards';
            
            document.body.appendChild(love);
            
            setTimeout(() => {
                if (love.parentNode) {
                    love.parentNode.removeChild(love);
                }
            }, 3000);
        }, i * 50); // Faster sequence
    }
}

function createHeartShower() {
    // Create intense heart shower for 5 seconds
    const showerInterval = setInterval(() => {
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = ['💕', '💖', '💗', '💘', '💝'][Math.floor(Math.random() * 5)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-50px';
            heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '50';
            heart.style.animation = 'heartFall 2s linear forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 2000);
        }
    }, 200);
    
    // Stop shower after 5 seconds
    setTimeout(() => {
        clearInterval(showerInterval);
    }, 5000);
}

function showSpecialMessage() {
    const specialDiv = document.createElement('div');
    specialDiv.style.position = 'fixed';
    specialDiv.style.top = '20px';
    specialDiv.style.left = '50%';
    specialDiv.style.transform = 'translateX(-50%)';
    specialDiv.style.background = 'rgba(255, 107, 157, 0.9)';
    specialDiv.style.color = 'white';
    specialDiv.style.padding = '15px 30px';
    specialDiv.style.borderRadius = '20px';
    specialDiv.style.fontSize = '16px';
    specialDiv.style.textAlign = 'center';
    specialDiv.style.zIndex = '1000';
    specialDiv.style.animation = 'slideDown 0.5s ease-out';
    specialDiv.innerHTML = '🌟 You make every day brighter, Aanuu! 🌟';
    
    document.body.appendChild(specialDiv);
    
    setTimeout(() => {
        specialDiv.style.animation = 'slideUp 0.5s ease-in forwards';
        setTimeout(() => {
            if (specialDiv.parentNode) {
                specialDiv.parentNode.removeChild(specialDiv);
            }
        }, 500);
    }, 3000);
}

function showCakeMessage() {
    const specialDiv = document.createElement('div');
    specialDiv.style.position = 'fixed';
    specialDiv.style.top = '20px';
    specialDiv.style.left = '50%';
    specialDiv.style.transform = 'translateX(-50%)';
    specialDiv.style.background = 'rgba(255, 107, 157, 0.9)';
    specialDiv.style.color = 'white';
    specialDiv.style.padding = '15px 30px';
    specialDiv.style.borderRadius = '20px';
    specialDiv.style.fontSize = '16px';
    specialDiv.style.textAlign = 'center';
    specialDiv.style.zIndex = '1000';
    specialDiv.style.animation = 'slideDown 0.5s ease-out';
    specialDiv.innerHTML = '🎂 Time to make a wish and cut the cake! 🎂';
    
    document.body.appendChild(specialDiv);
    
    setTimeout(() => {
        specialDiv.style.animation = 'slideUp 0.5s ease-in forwards';
        setTimeout(() => {
            if (specialDiv.parentNode) {
                specialDiv.parentNode.removeChild(specialDiv);
            }
        }, 500);
    }, 3000);
}

function showCakeMessage() {
    const specialDiv = document.createElement('div');
    specialDiv.style.position = 'fixed';
    specialDiv.style.top = '20px';
    specialDiv.style.left = '50%';
    specialDiv.style.transform = 'translateX(-50%)';
    specialDiv.style.background = 'rgba(255, 107, 157, 0.9)';
    specialDiv.style.color = 'white';
    specialDiv.style.padding = '15px 30px';
    specialDiv.style.borderRadius = '20px';
    specialDiv.style.fontSize = '16px';
    specialDiv.style.textAlign = 'center';
    specialDiv.style.zIndex = '1000';
    specialDiv.style.animation = 'slideDown 0.5s ease-out';
    specialDiv.innerHTML = '🎂 Time to make a wish and cut the cake! 🎂';
    
    document.body.appendChild(specialDiv);
    
    setTimeout(() => {
        specialDiv.style.animation = 'slideUp 0.5s ease-in forwards';
        setTimeout(() => {
            if (specialDiv.parentNode) {
                specialDiv.parentNode.removeChild(specialDiv);
            }
        }, 500);
    }, 3000);
}

// Add CSS for dynamic animations
const style = document.createElement('style');
style.textContent = `
    @keyframes loveBurst {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) rotate(360deg) translateY(-100px);
        }
    }
    
    @keyframes sparkleFloat {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg) translateY(-50px);
        }
    }
    
    @keyframes slideDown {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(-100px);
        }
        100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-100px);
        }
    }
`;
document.head.appendChild(style);
