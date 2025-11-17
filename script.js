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


const grid = document.getElementById("menu-grid");
pizzas.forEach(p => {
    grid.innerHTML += `
    <div class="item">
      <img src="${p.img}">
      <h3>${p.nome}</h3>
      <p>${p.desc}</p>
      <span>${p.preco}</span>
    </div>
  `;
});

function enviarMensagem() {
    document.getElementById("retorno").textContent = "Mensagem enviada!";

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
}

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