// Quarta soluzione utilizzando display none

const spenta = document.getElementById("w-lamp");
const accesa = document.getElementById("y-lamp");
const bottone = document.getElementById("tasto");

bottone.addEventListener("click", function () {
    spenta.classList.toggle("d-none"); // al click, spenta scompare e compare accesa
    accesa.classList.toggle("d-none"); // al click, accesa scompare e compare spenta

    // Spenta è in d-none? Allora btn mostra "Spegni", altrimenti mostra "Accendi"
    bottone.innerHTML = spenta.classList.contains("d-none") ? "Spegni" : "Accendi";

});