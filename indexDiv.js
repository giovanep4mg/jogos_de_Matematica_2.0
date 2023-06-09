/**criar duas variáveis,num1Div e num2Div.
 * Math.randon() * 50 > fará 10 números aleatório,em decimais.
 * vai dividir somento por 2,para facilitar a vida do usuário
 */


const num1Div = Math.ceil(Math.random() * 20)
const num2Div = 2

const fimJogo = false ;

//pega a tag id "questaoDiv", salva na var "questaoDivE1"
const questaoDivE1 = document.getElementById("questaoDiv");

//pega o valor dentro da tag id "inputDiv", salva na var "inputDivE1"
const inputDivE1 = document.getElementById("inputDiv");

//pega a tag id "formDiv", salva na var "formDivE1"
const formDivE1 = document.getElementById("formDiv");

//pega a tag id "pontoDiv", salva na var "pontoDivE1"
const pontoDivE1 = document.getElementById("pontoDiv")

//
let pontoDiv = JSON.parse(localStorage.getItem("pontoDiv"));

// se (não ponto)
if (!pontoDiv) {
    pontoDiv = 0;
}

//pega o valor na var "pontoDivE1" e exibi na tela,mostrando os pontos
pontoDivE1.innerText = "ponto :" + pontoDiv;

//pega os valores da var "questaoDivE1", e exibi na tela, com algumas modificações nos números.
questaoDivE1.innerText = "Quanto é " + num1Div + " dividido por " + num2Div + " ? "


//pega os números e multiplica eles, depois salva na var "correctAns"(resposta_correta)
const correctAnsDiv = num1Div / num2Div;

//adiciona um ouvinte, no botão "submit"
formDivE1.addEventListener("submit", () => {

    //pega o valor adicionado no "inputDiv",e salva na var "userAns"(resposta_usuario)
    const userAnsDiv = +inputDivE1.value;

    //se (resposta_usuario é igual a resposta_correta)
    if (userAnsDiv == correctAnsDiv) {

        //se for igual, adiciona +1 na var "pontoDiv"
        pontoDiv++

        //executa a função "updateLocalStorageDiv()"
        updateLocalStorageDiv()
        //senão
    } else {
        //se não for igual, retira -1, na var "pontoDiv" 
        pontoDiv--
        //executa essa função "updateLocalStorageDiv()"
        updateLocalStorageDiv()
    }

})

//Função, vai atualizar os pontos
function updateLocalStorageDiv() {

    localStorage.setItem("pontoDiv", JSON.stringify(pontoDiv))
}

 // fazer a verificação para mostrar o placar de vencedor
 if(pontoDiv == 10){
    gameOver();
    localStorage.removeItem('pontoDiv');
    fimJogo = false; 
    formSomaE1 = "";
} else if (pontoDiv == -10 ) {
    gameMenos();
    localStorage.removeItem('pontoDiv');
    fimJogo = false; 
    formSomaE1 = "";
}


function gameOver() {

    var gameOverAlertElement = "<b>FIM DE JOGO</b><br><br> PARABÉNS !!!Você fez 10 pontos !!  <br><br> <input  id='reniciar' type='button' value='Reiniciar' onClick='window.location.reload(true)'> ";

    var div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = gameOverAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    window.fimJogo = true;
    moves = 0;

}


function gameMenos() {


    var gameOverAlertElement = "<b>FIM DE JOGO</b><br><br> Perdeu !!! <br> Você fez -10 pontos !! <br><br> <input id='reniciar' type='button' value='Reiniciar' onClick='window.location.reload(true)'>";

    var div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = gameOverAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    window.fimJogo = true;
    moves = 0;

}





function resetGame() {

}




// animaçao
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
loop: true
});

typewriter.typeString('Faça 10 pontos')
.pauseFor(2500)
.deleteAll()
.typeString(' para ganhar ou ')
.pauseFor(2500)
.deleteChars(15)
.typeString(' para perder...')
.start();


