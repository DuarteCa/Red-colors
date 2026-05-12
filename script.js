const contentData = {
    esportes: {
        title: "Sua Energia, Seu Esporte",
        desc: "Foco, força e performance em cada desafio. Feito para quem nunca para.",
        // Substitua pelo caminho da imagem laranja
        mainImg: "assets/Orange.jpeg", 
        gallery: ["https://www.redbull.com/energydrink/v1/resources/content/products/br/tropical-edition/can-front.png"]
    },
    fitness: {
        title: "Sua Energia, Sua Melhor Versão",
        desc: "Foco e concentração para manter a disciplina. Mais disposição do início ao fim do treino.",
        // Substitua pelo caminho da imagem verde
        mainImg: "assets/Green.jpeg", 
        gallery: ["https://www.redbull.com/energydrink/v1/resources/content/products/br/sugarfree/can-front.png"]
    },
    lazer: {
        title: "Sua Energia, Seu Momento",
        desc: "Para seus melhores momentos: música, liberdade e diversão sem fim.",
        // Substitua pelo caminho da imagem roxa
        mainImg: "assets/Purple.jpeg", 
        gallery: ["https://www.redbull.com/energydrink/v1/resources/content/products/br/red-edition/can-front.png"]
    },
    default: {
        title: "Red Bull te dá asas.",
        desc: "O clássico que você já conhece, para qualquer hora do dia e qualquer desafio.",
        mainImg: "assets/Blue.jpeg",
        gallery: ["https://www.redbull.com/energydrink/v1/resources/content/products/br/energy-drink/can-front.png"]
    }
};
function changeTheme(theme) {
    document.body.className = 'theme-' + theme;
    const data = contentData[theme] || contentData.default;

    const title = document.getElementById('main-title');
    const desc = document.getElementById('main-description');
    const img = document.getElementById('product-img');
    const grid = document.getElementById('grid-container');

    // Transição de opacidade
    [title, desc, img].forEach(el => el.style.opacity = 0);

    setTimeout(() => {
        title.innerText = data.title;
        desc.innerText = data.desc;
        img.src = data.mainImg;
        [title, desc, img].forEach(el => el.style.opacity = 1);
        
        grid.innerHTML = "";
        data.gallery.forEach(url => {
            grid.innerHTML += `<img src="${url}" style="width:80px; margin:10px; opacity:0.8">`;
        });
    }, 300);
}

function reveal() {
    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

window.onload = () => {
    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach(c => { 
        c.style.opacity = "0"; 
        c.style.transform = "translateY(30px)"; 
        c.style.transition = "0.8s ease-out"; 
    });
    window.addEventListener('scroll', reveal);
    changeTheme('default');
};