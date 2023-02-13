let sliderElement = document.getElementById('slider');
let buttonElement = document.getElementById('button');

let sizePassword= document.getElementById('valor');
let password = document.getElementById('password');

let containerPassword = document.querySelector('.container-password');  

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*-+";
let novaSenha = "";



//
//  FUNÇÃO PARA A SPAN DO Nº APARECER DE ACORDO COM OQ O USUARIO ESCOLHER NO RANGE
//
sizePassword.innerHTML = sliderElement.value
slider.oninput = function(){
    //AQUI ESTÁ PEGANDO DE ACORDO COM O VALUE QUE O USÚARIO ESCOLHER E PRINTANDO NA TELA COM O CÓDIGO ACIMA
    sizePassword.innerHTML = this.value
}

//
//  FUNÇÃO QUE AO CLICAR NO BOTÃO VAI PEGAR Nºs ALEATORIOS DO //CHARSET E APARECER EM BAIXO
//
function generatePassword(){
    
    let pass = ""

    //AQUI ESTÁ FALANDO PRA PEGAR UM Nª QUE COMEÇE DO 0 E CONTINUE ATÉ O Nº MENOR QUE O ///// SLIDER ELEMENT ////
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){

        //AQUI VAI GERAR UM NÚMERO ALEATÓRIO DE ACORDO COM A QUANTIDADE DE NÚMEROS QUE HÁ NO  //////// CHARSET ////////
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    
    containerPassword.style.display="flex";
    password.innerHTML = pass
    novaSenha = pass
}


function copyPassword(){
    alert("Senha Copiada Com Sucesso!")
    navigator.clipboard.writeText(novaSenha);
}


buttonElement.addEventListener('click', generatePassword);
containerPassword.addEventListener('click', copyPassword);
