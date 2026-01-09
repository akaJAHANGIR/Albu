// Add confetti effect on button click
document.querySelector('.yes-btn').addEventListener('click', function() {
    // Simple confetti simulation with emojis
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = '🎉';
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.fontSize = '2em';
        confetti.style.animation = 'fall 3s linear';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
});

// CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to { transform: translateY(100vh); }
    }
`;
document.head.appendChild(style);