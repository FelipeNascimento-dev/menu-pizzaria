const menuCategorias = document.getElementById("menu-categorias");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        menuCategorias.classList.add("active");
    } else {
        menuCategorias.classList.remove("active");
    }
});

const pizzas = [
    {
        nome: "Margherita Premium",
        preco: "R$ 42,90",
        desc: "Tomate San Marzano, manjericão fresco e mozzarella artesanal.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "Calabresa Artesanal",
        preco: "R$ 48,90",
        desc: "Calabresa artesanal premium, cebola roxa e queijo especial.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "Quatro Queijos Gold",
        preco: "R$ 52,90",
        desc: "Blend de gruyère, parmesão, gorgonzola e mozzarella fresca.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "Pepperoni Supreme",
        preco: "R$ 58,90",
        desc: "Pepperoni premium crocante e muito queijo.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "Frango com Catupiry Original",
        preco: "R$ 49,90",
        desc: "Frango artesanal desfiado e Catupiry verdadeiro.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "Portuguesa Tradizionale",
        preco: "R$ 47,90",
        desc: "Presunto, ovos, cebola, azeitonas e ervilhas frescas.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "Bacon Lovers",
        preco: "R$ 55,90",
        desc: "Bacon crocante e queijo premium derretido.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "Carne Seca Nordestina",
        preco: "R$ 59,90",
        desc: "Carne seca premium, abóbora cabotiá e cebola caramelizada.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "Veggie Garden",
        preco: "R$ 46,90",
        desc: "Vegetais frescos, pesto artesanal e tomate cereja.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "Pizza Trufada Premium",
        preco: "R$ 69,90",
        desc: "Cogumelos frescos e azeite trufado.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "A Moda do Chef",
        preco: "R$ 62,90",
        desc: "Criação especial do chef com ingredientes selecionados.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
    {
        nome: "Chocolate Belga",
        preco: "R$ 44,90",
        desc: "Chocolate belga derretido com morangos.",
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=80"
    },
];

const esfihas = [
    {
        nome: "Esfiha de Carne",
        preco: "R$ 8,90",
        desc: "Carne temperada com especiarias árabes.",
        img: "https://amopaocaseiro.com.br/wp-content/uploads/2021/12/yt-051_esfiha-de-queijo_receita.jpg"
    },
    {
        nome: "Esfiha de Frango",
        preco: "R$ 9,90",
        desc: "Frango desfiado e tempero especial.",
        img: "https://amopaocaseiro.com.br/wp-content/uploads/2021/12/yt-051_esfiha-de-queijo_receita.jpg"
    },
    {
        nome: "Esfiha de Queijo",
        preco: "R$ 8,50",
        desc: "Queijo derretido e massa artesanal.",
        img: "https://amopaocaseiro.com.br/wp-content/uploads/2021/12/yt-051_esfiha-de-queijo_receita.jpg"
    }
];

const bebidas = [
    {
        nome: "Refrigerante Lata",
        preco: "R$ 6,00",
        desc: "350ml",
        img: "https://padarialider.loji.com.br/storage/uploads/vZ9kvbBPGgSgVD1kdZLReIOm1DXXXtqOUsg7fHHk.jpg"
    },
    {
        nome: "Refrigerante 600ml",
        preco: "R$ 10,00",
        desc: "600ml",
        img: "https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/623affe9779bf.webp"
    },
    {
        nome: "Água Mineral",
        preco: "R$ 4,00",
        desc: "Sem gás",
        img: "https://abir.org.br/abir2022/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-30-at-15.26.58.jpeg"
    }
];


function renderMenu(lista, containerId) {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    lista.forEach(item => {
        grid.innerHTML += `
            <div class="item">
                <img src="${item.img}">
                <h3>${item.nome}</h3>
                <p>${item.desc}</p>
                <span>${item.preco}</span>
            </div>
        `;
    });
}

renderMenu(pizzas, "menu-pizzas");
renderMenu(esfihas, "menu-esfihas");
renderMenu(bebidas, "menu-bebidas");


const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navbar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        navbar.classList.remove("active");
        menuBtn.classList.remove("active");
    }
});

