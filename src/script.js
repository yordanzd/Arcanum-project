const texto_inicio = "Cruza el umbral hacia un mundo magico donde la magia responde a tus decisiones - narrado, en tiempo real, por una inteligencia que nunca cuenta la misma historia";

const elemento = document.getElementById('texto-escrito');
const pluma = document.querySelector('.pluma');

let indice = 0;
const velocidad = 60;

function escribir_texto(){
    if(indice<texto_inicio.length){
        elemento.textContent+=texto_inicio.charAt(indice);
        indice++;

        const ancho = elemento.offsetWidth;
        if(pluma){
            pluma.computedStyleMap.left = (ancho+10)+'px';
        }
        
        const tiempo = texto_inicio.charAt(indice-1) === '' ? velocidad * 1.5:velocidad;
        setTimeout(escribir_texto, tiempo);
    }
}

if(document.readyState==='complete'){
    setTimeout(escribir_texto, 1000);
}else{
    window.addEventListener('load', () => {
        setTimeout(escribir_texto, 1000);
    })
}