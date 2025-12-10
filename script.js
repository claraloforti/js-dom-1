const lampadina = document.getElementById("immagine");
const bottone = document.getElementById("tasto");

// Prima soluzione
bottone.addEventListener("click", function () { // Aggiungo evento che si attiva al click del bottone
    const accesa = lampadina.classList.toggle('accesa'); // Toggle aggiunge la classe "accesa" se c'è e la rimuove se non c'è
    lampadina.src = accesa ? "img/yellow_lamp.png" : "img/white_lamp.png"; // se è accesa l'img è gialla, altrimenti è bianca
    bottone.innerHTML = accesa ? "Spegni" : "Accendi"; // se è accesa il btn è "Spegni", altrimenti è "Accendi"
})



/* Seconda soluzione 
bottone.addEventListener("click", () => {

    if (lampadina.src.includes('img/white_lamp.png')) { // se src è white(spenta) falla diventare yellow(accesa) e scrivi "Spegni"
      lampadina.src = 'img/yellow_lamp.png';
      bottone.innerHTML = "Spegni";
    } else {
        lampadina.src = 'img/white_lamp.png';
        bottone.innerHTML = "Accendi";
    }
});
*/



/* Terza soluzione 
bottone.addEventListener("click", () => {
    const accesa = lampadina.src.includes('img/yellow_lamp.png'); // accesa è quando l'img è gialla

    if (accesa) { // se è accesa, al click diventa bianca e il bottone cambia in "Accendi"
        lampadina.src = 'img/white_lamp.png';
        bottone.innerHTML = "Accendi";
    } else { // se è spenta, al click diventa gialla e il bottone cambia in "Spegni"
        lampadina.src = 'img/yellow_lamp.png';
        bottone.innerHTML = "Spegni";
    }
})
*/