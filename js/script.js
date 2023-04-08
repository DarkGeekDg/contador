//Atribuindo
let setaCima = document.querySelector('.seta-cima');
let setaBaixo = document.querySelector('.seta-baixo');
let emojis = document.querySelector('.emojis');
let contadorNumero = document.querySelector('#contador-numero');

let guardaNum = localStorage.getItem('numero');

contadorNumero.innerHTML = guardaNum;

//Botões de edição

let btn_editar_numero = document.querySelector('.editar-numero'); 
let btn_deletar = document.querySelector('.deletar');
let btn_trocar_numero = document.querySelector('.btn-edicao-numero');

//objetos com os emojis
let emojis_list = {
    pessimo : '💩',
    ruim : '😑',
    menos_ruim : '😐',
    ficando_bom : '🤔',
    bom: '🙂',
    melhor: '😄',
    otimo : '😁',
    perfeito: '🤑',
    insano: 'Ta tudo bem??'
}

numeroEmojis(guardaNum);


//Eventos do contador
setaCima.addEventListener('click', ()=>{
    guardaNum++

    salvarLocalStorage();
    contadorNumero.innerHTML = guardaNum;
    
    numeroEmojis(guardaNum);  
        
});


setaBaixo.addEventListener('click', ()=>{
    guardaNum--
    
    
    salvarLocalStorage();
    contadorNumero.innerHTML = guardaNum;

    numeroEmojis(guardaNum)

    if(guardaNum <= 0){
        guardaNum = 0;
        contadorNumero.innerHTML = 0;
    }

});



//Eventos Edição

btn_editar_numero.addEventListener('click', () => {

    let editar_numeros = document.querySelector('#editar-numeros');

    if(editar_numeros.classList.contains('esconder')){
        editar_numeros.classList.toggle('mostrar');
    }

});





btn_deletar.addEventListener('click', () => {
    zerandoStorage();
    
});



//Funções

function salvarLocalStorage(){

    localStorage.setItem('numero',verificador(guardaNum));
    var numero_localStorage = localStorage.getItem('numero');
    contadorNumero.value = numero_localStorage;

}

function verificador(num) {

    if(num < 0){
        return num = 0;
    }else{
        return num;
    }

}


function zerandoStorage(){

    localStorage.setItem('numero',0);
    guardaNum = 0;
    contadorNumero.value = 0;
    contadorNumero.innerHTML = 0;

}


function numeroEmojis(numero){

    let emojis = document.querySelector('.emojis');

    if(numero < 15){
        emojis.innerHTML = emojis_list.pessimo;
    }
    if(numero > 15 && numero < 25){
        emojis.innerHTML = emojis_list.ruim;
    }
    if(numero > 25 && numero < 35){
        emojis.innerHTML = emojis_list.menos_ruim;
    }
    if(numero > 35 && numero < 50){
        emojis.innerHTML = emojis_list.ficando_bom;
    }
    if(numero > 50 && numero < 60){
        emojis.innerHTML = emojis_list.bom;
    }
    if(numero > 60 && numero < 70){
        emojis.innerHTML = emojis_list.melhor;
    }
    if(numero > 70 && numero < 95){
        emojis.innerHTML = emojis_list.otimo;
    }
    if(numero > 95 && numero < 150){
        emojis.innerHTML = emojis_list.perfeito;
    }
    if(numero >= 150){
        emojis.innerHTML = emojis_list.insano;
    }

}
