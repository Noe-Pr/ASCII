// script.js

// Fonction pour convertir le texte en ASCII
function textToAscii() {
    const inputText = document.getElementById("textInput").value;
    let asciiOutput = "";

    for (let i = 0; i < inputText.length; i++) {
        asciiOutput += inputText.charCodeAt(i) + " ";
    }

    document.getElementById("asciiOutput").value = asciiOutput.trim();
}

// Fonction pour convertir l'ASCII en texte
function asciiToText() {
    const asciiText = document.getElementById("asciiOutput").value.trim();
    const asciiArray = asciiText.split(" ");
    let textOutput = "";

    for (let i = 0; i < asciiArray.length; i++) {
        const asciiCode = parseInt(asciiArray[i]);
        if (!isNaN(asciiCode)) {
            textOutput += String.fromCharCode(asciiCode);
        }
    }

    document.getElementById("textInput").value = textOutput;
}

// Détecter les changements dans le champ "Texte"
document.getElementById("textInput").addEventListener("input", () => {
    textToAscii();
});

// Détecter les changements dans le champ "ASCII"
document.getElementById("asciiOutput").addEventListener("input", () => {
    asciiToText();
});
