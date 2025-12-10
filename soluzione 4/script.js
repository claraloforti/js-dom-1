// Quarta soluzione utilizzando display none

const spenta = document.getElementById("w-lamp");
const accesa = document.getElementById("y-lamp");
const bottone = document.getElementById("tasto");

bottone.addEventListener("click", function () {
    spenta.classList.toggle("d-none"); // al click su btn spento(Accendi), spenta va in d-none e compare accesa
    accesa.classList.toggle("d-none"); // al click su btn acceso(Spegni), accesa va in d-none e compare spenta

    // Spenta è in d-none? Allora btn mostra "Spegni", altrimenti mostra "Accendi"
    bottone.innerHTML = spenta.classList.contains("d-none") ? "Spegni" : "Accendi";

});