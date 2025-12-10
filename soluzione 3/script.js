// Terza soluzione utilizzando includes
const lampadina = document.getElementById("immagine");
const bottone = document.getElementById("tasto");

bottone.addEventListener("click", () => {
    const accesa = lampadina.src.includes('img/yellow_lamp.png'); // accesa è quando l'img è gialla

    if (accesa) { // se è accesa, al click diventa bianca e il bottone cambia in "Accendi"
        lampadina.src = 'img/white_lamp.png';
        bottone.innerHTML = "Accendi";
    } else { // se è spenta, al click diventa gialla e il bottone cambia in "Spegni"
        lampadina.src = 'img/yellow_lamp.png';
        bottone.innerHTML = "Spegni";
    }
});