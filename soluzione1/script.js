// Prima soluzione utilizzando l'operatore ternario

const lampadina = document.getElementById("immagine");
const bottone = document.getElementById("tasto");

bottone.addEventListener("click", function () { // Aggiungo evento che si attiva al click del bottone
    const accesa = lampadina.classList.toggle('accesa'); // Toggle aggiunge la classe "accesa" se non c'è e la rimuove se c'è
    console.log(accesa);
    lampadina.src = accesa ? "/img/yellow_lamp.png" : "/img/white_lamp.png"; // se è accesa l'img è gialla, altrimenti è bianca
    bottone.innerHTML = accesa ? "Spegni" : "Accendi"; // se è accesa il btn è "Spegni", altrimenti è "Accendi"
});

// All'inizio l'img è bianca(spenta). Dopo il click toggle aggiunge "accesa" che nella condizione corrisponde a giallo e al tasto "Spegni". Se clicco nuovamente toglie la classe "accesa" quindi diventa di nuovo bianca e con il btn "Accendi"