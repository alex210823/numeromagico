function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numero = numeroRandom(1, 100);
let tentativi = 5;

while (tentativi > 0) {
    const inputUtente = prompt("Indovina il numero (1-100):");
    const numeroUtente = parseInt(inputUtente);

    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100) {
        console.log("Inserisci un numero da 1 a 100.");
        continue;
    }

    if (numeroUtente > numero) {
        console.log("Troppo grande");
    } else if (numeroUtente < numero) {
        console.log("Troppo piccolo");
    } else if (numeroUtente === numero) {
        console.log("Sei un bombone hai vinto!");
        break;
    }

    tentativi--;
    console.log(`Tentativi rimasti: ${tentativi}`);
}

if (tentativi === 0) {
    console.log(`Hai perso! Il numero segreto era ${numero}.`);
}