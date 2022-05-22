const inputTexto = document.querySelector(".input-text"); 
const outputTexto = document.querySelector(".output-text");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;

    document.getElementById("dibujo").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.querySelector(".copy-text").style.display = "show";
    document.querySelector(".copy-text").style.display = "inherit"; 
    //jjj
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    outputTexto.value = textoDesencriptado;

    document.getElementById("dibujo").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.querySelector(".copy-text").style.display = "show";
    document.querySelector(".copy-text").style.display = "inherit";
}

function encriptar(textoParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    textoParaEncriptar = textoParaEncriptar.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoParaEncriptar.includes(matrizCodigo[i][0])){ 
            textoParaEncriptar = textoParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    
    return textoParaEncriptar;
    
}


function desencriptar(textoParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    textoParaDesencriptar = textoParaDesencriptar.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoParaDesencriptar.includes(matrizCodigo[i][0])){ 
            textoParaDesencriptar = textoParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return textoParaDesencriptar;
}

function copiar(){
    outputTexto.select();
    document.execCommand("copy");
    alert("¡Se copio!");
}