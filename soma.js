/**criar duas variáveis,num1 e num2.
 * Math.randon() * 10 > fará 10 números aleatório,em decimais.
 * Math.ceil > pega esses 10 números, e coloca eles em inteiro.
 */
const num1s = Math.ceil(Math.random() * 10)
const num2s = Math.ceil(Math.random() * 10)

const fimJogo = false ;

//pega o que está no id "questaoSoma" e salva na variável "questaoSomaE1".
const questaoSomaE1 = document.getElementById("questaoSoma");

//pega o que está no id "inputSoma" e salva na variável "inputSomaE1".
const inputSomaE1 = document.getElementById("inputSoma");

//pega o que está no id "formSoma" e salva na variável "formSomaE1".
const formSomaE1 = document.getElementById("formSoma");

//pega o que está no id "pontoS" e salva na variável "pontoSE1".
const pontoSomaE1 = document.getElementById("pontoS")


//
let pontoS = JSON.parse(localStorage.getItem("pontoS"));


/*
Se dentro da variável "ponto",
não estiver em zero.
adicione um zero
 */
if (!pontoS) {
    pontoS = 0;
}

//pega o valor na var "pontoE1" e exibi na tela
pontoSomaE1.innerText = "ponto :" + pontoS;

//pega os valores da var "questaoE1", e exibi na tela, com algumas modificações nos números.
questaoSomaE1.innerText = "Quanto é " + num1s + " Mais " + num2s + " ? "

//pega os números e multiplica eles, depois salva na var "correctAns"(resposta_correta)
const correctSomaAns = num1s + num2s;

//adiciona um ouvinte, no botão "submit"
formSomaE1.addEventListener("submit", () => {

    //pega o valor adicionado no "input",e salva na var "userAns"(resposta_usuario)
    const userAnsSoma = +inputSomaE1.value;

    //se (resposta_usuario é igual a resposta_correta)
    if (userAnsSoma == correctSomaAns) {

        //se for igual, adiciona +1 na var "ponto"
        pontoS++;

        //executa a função "updateLocalStorage()"
        updateLocalStorageSoma()
        //senão
    } else {

        //se não for igual, retira -1, na var "ponto"
        pontoS--;

        //executa a função "updateLocalStorage()"
        updateLocalStorageSoma()
    }

})

function updateLocalStorageSoma() {
    localStorage.setItem("pontoS", JSON.stringify(+pontoS))
}



            // fazer a verificação para mostrar o placar de vencedor
            if(pontoS == 10){
                gameOver();
                localStorage.removeItem('pontoS');
                fimJogo = false; 
                formSomaE1 = "";
            } else if (pontoS == -10 ) {
                gameMenos();
                localStorage.removeItem('pontoS');
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
      