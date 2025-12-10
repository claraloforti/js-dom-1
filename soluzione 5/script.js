// Quinta soluzione utilizzando includes (Miglioramento della terza soluzione)
const lampadina = document.getElementById("immagine");
const bottone = document.getElementById("tasto");
let accesa = false; // parto da questa variabile

bottone.addEventListener("click", () => {

    if (accesa) { // se è accesa, al click diventa bianca, il bottone cambia in "Accendi" e accesa diventa false
        lampadina.src = '/img/white_lamp.png';
        bottone.innerHTML = "Accendi";
        accesa = false;
    } else { // se è spenta, al click diventa gialla e il bottone cambia in "Spegni" e accesa diventa true
        lampadina.src = '/img/yellow_lamp.png';
        bottone.innerHTML = "Spegni";
        accesa = true;
    }
});