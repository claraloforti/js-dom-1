// Seconda soluzione utilizzando includes
const lampadina = document.getElementById("immagine");
const bottone = document.getElementById("tasto");

bottone.addEventListener("click", () => {

    if (lampadina.src.includes('/img/white_lamp.png')) { // se src è white(spenta) falla diventare yellow(accesa) e scrivi "Spegni"
      lampadina.src = '/img/yellow_lamp.png';
      bottone.innerHTML = "Spegni";
    } else { // altrimenti (quindi se non è white) falla diventare white(spenta) e scrivi "Accendi"
        lampadina.src = '/img/white_lamp.png';
        bottone.innerHTML = "Accendi";
    }
});