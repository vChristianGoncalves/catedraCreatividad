const particleField = document.getElementById('particleField');
for (let i = 0; i < 500; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
    particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
    particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particleField.appendChild(particle);
}


const botonMagico = document.getElementById('botonMagico');

botonMagico.addEventListener('click', () => {
    window.location.href = "pregunta.html";
});




const musica = document.getElementById("musica");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        toggleBtn.textContent = " Pausar Melodia ⏸️";
    } else {
        musica.pause();
        toggleBtn.textContent = " Reproducir Melodia ▶️";
    }
});