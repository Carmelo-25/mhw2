const bottone_cerca = document.getElementById("bottone_cerca");
const box_cerca = document.getElementById("box_cerca");

function Click_Cerca() {
    box_cerca.style.display = "block";
    box_cerca.focus();
    console.log("Cliccato");
}

function Focus_Cerca() {
    box_cerca.value = '';
    console.log('Focus');
}

function Blur_Cerca() {
    if (box_cerca.value === '') { 
        box_cerca.style.display = "none";
        console.log('Blur');
    }else{
        console.log ('Blur');
    }
}

bottone_cerca.addEventListener("click", Click_Cerca);
box_cerca.addEventListener("focus", Focus_Cerca);
box_cerca.addEventListener("blur", Blur_Cerca);

const bottone_icona_cerca = document.getElementById("bottone_icona_cerca");
const box_icona_cerca = document.getElementById("box_icona_cerca");

function Click_Icona_Cerca() {
    box_icona_cerca.style.display = "block";
    box_icona_cerca.focus();
    console.log("Cliccato");
}

function Focus_Icona_Cerca() {
    box_icona_cerca.value = '';
    console.log('Focus');
}

function Blur_Icona_Cerca() {
    if (box_icona_cerca.value === '') { 
        box_icona_cerca.style.display = "none";
        console.log('Blur');
    }else{
        console.log ('Blur');
    }
}

bottone_icona_cerca.addEventListener("click", Click_Icona_Cerca);
box_icona_cerca.addEventListener("focus", Focus_Icona_Cerca);
box_icona_cerca.addEventListener("blur", Blur_Icona_Cerca);

document.addEventListener("DOMContentLoaded", function() {
    const bottone_menu = document.getElementById("menu_bottone");
    const lista_menu = document.getElementById("menu_lista");

    function toggleMenu() {
        if (lista_menu.style.display === "block") {
            lista_menu.style.display = "none";
        } else {
            lista_menu.style.display = "block";
        }
    }

    if (bottone_menu && lista_menu) {
        bottone_menu.addEventListener("click", toggleMenu);
    } 
});

document.addEventListener("DOMContentLoaded", function() {
    const pulsantiAggiungi = document.querySelectorAll(".carrello");
    const messaggiAggiunto = document.querySelectorAll(".aggiunto");

    function aggiungiAlCarrello(event) {
        const pulsanteAggiungi = event.target; 
        const messaggioAggiunto = pulsanteAggiungi.nextElementSibling; 

        pulsanteAggiungi.style.display = "none"; 
        messaggioAggiunto.style.display = "flex"; 
        console.log("Aggiunto al carrello!");
    }

    pulsantiAggiungi.forEach(function(pulsante) {
        pulsante.addEventListener("click", aggiungiAlCarrello);
    });
});

document.addEventListener("DOMContentLoaded", function() { 
    const articolo_prefe = document.querySelectorAll(".salva_prefe");

    function aggiungiAlCarrello(event) {
        const pulsanteAggiungi = event.currentTarget; 
        const articolo_salvato = pulsanteAggiungi.querySelector('.prefe'); 

        articolo_salvato.style.display = "flex"; 
        console.log("Articolo salvato");
    }

    articolo_prefe.forEach(function(pulsante) {
        pulsante.addEventListener("click", aggiungiAlCarrello);
    });
});

