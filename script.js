const textArea = document.querySelector(".text-area");
const mensajeDesencriptado = document.querySelector(".texto-desencriptado");
const imagen = document.querySelector(".mensaje");
const areaEncriptar = document.querySelector(".mensajeOculto");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    // console.log(textArea.value);
    if (textArea.value != "") {

        const textoEncriptado = encriptar(textArea.value);
        // console.log(textoEncriptado);
        imagen.style.display = "none";
        areaEncriptar.style.display = "block";
        mensajeDesencriptado.value = textoEncriptado;
    } else {
        console.log("Escriba algo");
        imagen.style.display = "block";
        areaEncriptar.style.display = "none";
    }

}

function encriptar(textoEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    // console.table(matrizCodigo);

    textoEncriptar = textoEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoEncriptar.includes(matrizCodigo[i][0])) {
            textoEncriptar = textoEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo
            [i][1]);
            // console.log(textoEncriptar);
        }
    }
    return textoEncriptar;

}


function btnDesencriptar() {
    // console.log(textArea.value);
    if (textArea.value != "") {

        const textoDesencriptado = desencriptar(textArea.value);
        // console.log(textoDesencriptado);
        imagen.style.display = "none";
        areaEncriptar.style.display = "block";
        mensajeDesencriptado.value = textoDesencriptado;
    } else {
        console.log("Escriba algo");
        imagen.style.display = "block";
        areaEncriptar.style.display = "none";
    }

}

function desencriptar(textoDesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    // console.table(matrizCodigo);

    textoDesencriptar = textoDesencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoDesencriptar.includes(matrizCodigo[i][1])) {
            textoDesencriptar = textoDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo
            [i][0]);
            // console.log(textoDesencriptar);
        }
    }
    return textoDesencriptar;

}

function btnCopiar() {
    console.log("Copiando...");
    let resultado = document.getElementById("desencriptado").value;

    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = resultado;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Se ha copiado el texto al portapaeles...")
}