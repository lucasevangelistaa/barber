const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.link')

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

// Adiciona um event listener para cada link
links.forEach(link => {
    link.addEventListener("click", () => {
        // Fecha o menu removendo a classe "active"
        nav.classList.remove("active");
    });
});