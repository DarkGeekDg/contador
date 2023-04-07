//Atribuindo
let setaCima = document.querySelector('.seta-cima');
let setaBaixo = document.querySelector('.seta-baixo');
let emojis = document.querySelector('.emojis');
let numero = localStorage.getItem('numero');

if(numero < 0){
    numero = localStorage.setItem('numero',0)
}



document.querySelector('#contador-numero').innerHTML = numero;

//Botões de edição

let btn_editar_numero = document.querySelector('.editar-numero'); 
let btn_deletar = document.querySelector('.deletar');


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


numeroEmojis(numero);


//Eventos do contador
setaCima.addEventListener('click', ()=>{

    numero++

    salvarLocalStorage();
    document.querySelector('#contador-numero').innerHTML = numero;

    numeroEmojis(numero)        
        
    
});


setaBaixo.addEventListener('click', ()=>{
    numero--
    
    salvarLocalStorage();

    document.querySelector('#contador-numero').innerHTML = numero;

    numeroEmojis(numero)

    if(numero < 0){
        numero = 0;
        document.querySelector('#contador-numero').innerHTML = 0;
    }

});

//Eventos Edição

btn_editar_numero.addEventListener('click', () => {

    

});

btn_deletar.addEventListener('click', () => {
    zerandoStorage();
    
});



//Funções

function salvarLocalStorage(){
    
    localStorage.setItem('numero',numero);
    var numero_localStorage = localStorage.getItem('numero');
    document.querySelector('#contador-numero').value = numero_localStorage;

}


function zerandoStorage(){
    localStorage.setItem('numero',0);
    numero = 0;
    document.querySelector('#contador-numero').innerHTML = 0;
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

};






