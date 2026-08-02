// ===================================
// MENU MOBILE
// ===================================

const menuButton = document.querySelector("#menu-mobile");
const nav = document.querySelector("nav");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("nav-ativo");
    });
}

// ===================================
// FECHAR MENU AO CLICAR NO LINK
// ===================================

const linksMenu = document.querySelectorAll("nav a");

linksMenu.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("nav-ativo");
    });
});

// ===================================
// HEADER AO ROLAR
// ===================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

// ===================================
// ANO AUTOMÁTICO
// ===================================

const ano = document.querySelector("#ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

// ===================================
// ANIMAÇÃO AO APARECER
// ===================================

const elementos = document.querySelectorAll(
    "section, .card-projeto, .tech-card, .certificado, .stat-card"
);

function aparecer() {
    elementos.forEach(elemento => {
        const topo = elemento.getBoundingClientRect().top;
        if (topo < window.innerHeight - 100) {
            elemento.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", aparecer);
aparecer();

// ===================================
// CONTADORES
// ===================================

const numeros = document.querySelectorAll(".stat-card h2");
let contadorIniciado = false;

function iniciarContador() {
    const area = document.querySelector("#estatisticas");
    if (!area) return;

    const posicao = area.getBoundingClientRect().top;

    if (posicao < window.innerHeight - 100 && !contadorIniciado) {
        contadorIniciado = true;

        numeros.forEach(numero => {
            const texto = numero.innerText;
            const valorFinal = parseInt(texto);
            let valorAtual = 0;

            const intervalo = setInterval(() => {
                valorAtual += Math.ceil(valorFinal / 40);

                if (valorAtual >= valorFinal) {
                    valorAtual = valorFinal;
                    clearInterval(intervalo);
                }

                numero.innerText = texto.includes("%")
                    ? valorAtual + "%"
                    : valorAtual + "+";
            }, 40);
        });
    }
}

window.addEventListener("scroll", iniciarContador);