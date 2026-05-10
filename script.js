/* ALERTA */

window.onload = () => {

    setTimeout(() => {

        alert(
            "Seja bem-vindo à US Consultoria Farmacêutica!\n\nEspecialistas em regularização, segurança e crescimento para farmácias e drogarias."
        );

    },800);

};

/* SCROLL SUAVE */

const links =
document.querySelectorAll('.menu a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const id =
        this.getAttribute('href');

        const secao =
        document.querySelector(id);

        secao.scrollIntoView({
            behavior:'smooth'
        });

    });

});

/* ANIMAÇÃO AO ROLAR */

const cards =
document.querySelectorAll('.card');

window.addEventListener('scroll', mostrarCards);

function mostrarCards(){

    cards.forEach(card => {

        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight - 50){

            card.classList.add('show');

        }

    });

}

mostrarCards();

/* CLIQUE WHATSAPP */

const whats =
document.querySelectorAll("a[href*='wa.me']");

whats.forEach(link => {

    link.addEventListener('click', () => {

        console.log(
            "Cliente clicou no WhatsApp"
        );

    });

});