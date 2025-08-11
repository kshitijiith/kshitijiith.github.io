// Animation and interaction logic
let currentMessage = 1;
let surpriseShown = false;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Start the message sequence after 2 seconds
    setTimeout(startMessageSequence, 2000);
    
    // Add some random floating hearts periodically
    setInterval(createRandomHeart, 3000);
    
    // Setup GIF auto-restart
    setupGifAutoRestart();
});

// Function to restart GIF animation automatically
function setupGifAutoRestart() {
    const pandaGif = document.querySelector('.panda-gif');
    if (pandaGif) {
        // Restart GIF every 4 seconds (adjust this based on your GIF length)
        setInterval(() => {
            const currentSrc = pandaGif.src;
            pandaGif.src = '';
            setTimeout(() => {
                pandaGif.src = currentSrc;
            }, 10);
        }, 4000); // Change 4000 to match your GIF duration in milliseconds
    }
}

function startMessageSequence() {
    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');
    
    // After 3 seconds, transition to second message
    setTimeout(() => {
        message1.style.opacity = '0';
        message1.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            message1.classList.add('hidden');
            message2.classList.remove('hidden');
            message2.style.opacity = '1';
            message2.style.transform = 'translateY(0)';
        }, 500);
    }, 3000);
}

function showSurprise() {
    if (!surpriseShown) {
        surpriseShown = true;
        
        // Create burst of hearts
        createHeartBurst();
        
        // Change button text
        const btn = document.getElementById('specialBtn');
        btn.innerHTML = '✨ Amazing! ✨';
        btn.style.background = 'linear-gradient(45deg, #ff6b9d, #ff9a9e)';
        btn.style.color = 'white';
        
        // Show next button after delay
        setTimeout(() => {
            document.getElementById('nextBtn').classList.remove('hidden');
            document.getElementById('nextBtn').style.opacity = '1';
            document.getElementById('nextBtn').style.transform = 'translateY(0)';
        }, 1500);
        
        // Add special message
        setTimeout(() => {
            const messageCard = document.getElementById('messageCard');
            const specialMessage = document.createElement('div');
            specialMessage.className = 'message';
            specialMessage.innerHTML = '🌟 I know we\'re just friends, but I wanted to make your day special 🌟<br><small>You deserve all the love and happiness in the world 💫</small>';
            specialMessage.style.marginTop = '20px';
            specialMessage.style.fontSize = '16px';
            specialMessage.style.color = '#ff6b9d';
            messageCard.appendChild(specialMessage);
        }, 1000);
    }
}

function createHeartBurst() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = ['💕', '💖', '💗', '💘', '💝'][Math.floor(Math.random() * 5)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = Math.random() * window.innerHeight + 'px';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '100';
            heart.style.animation = 'heartBurst 2s ease-out forwards';
            
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 2000);
        }, i * 100);
    }
}

function createRandomHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = '25px';
    heart.style.pointerEvents = 'none';
    heart.style.color = 'rgba(255, 255, 255, 0.8)';
    heart.style.animation = 'float 8s linear forwards';
    heart.style.zIndex = '5';
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 8000);
}

function goToNext() {
    // Navigate to celebration page
    window.location.href = 'celebrate.html';
}

// Add CSS for heart burst animation
const style = document.createElement('style');
style.textContent = `
    @keyframes heartBurst {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0.8) rotate(360deg) translateY(-100px);
        }
    }
    
    .message {
        transition: all 0.5s ease;
    }
`;
document.head.appendChild(style);

// Add some interactive hover effects
document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.02) { // 2% chance per mouse move
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = '12px';
        sparkle.style.zIndex = '50';
        sparkle.style.animation = 'sparkleTrail 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
});

// Add sparkle trail animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleTrail {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-20px);
        }
    }
`;
document.head.appendChild(sparkleStyle);
