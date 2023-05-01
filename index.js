/**criar duas variáveis,num1 e num2.
 * Math.randon() * 10 > fará 10 números aleatório,em decimais.
 * Math.ceil > pega esses 10 números, e coloca eles em inteiro.
 */
const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const fimJogo = false ;

//pega a tag id "questao", salva na var "questaoE1"
const questaoE1 = document.getElementById("questao");

//pega a tag id "input", salva na var "inputE1"
const inputE1 = document.getElementById("input");

//pega a tag id "form", salva na var "formE1"
const formE1 = document.getElementById("form");

//pega a tag id "ponto", salva na var "pontoE1"
const pontoE1 = document.getElementById("ponto")


//
let ponto = JSON.parse(localStorage.getItem("ponto"));

// se (não ponto)
if (!ponto) {
    ponto = 0;
}

//pega o valor na var "pontoE1" e exibi na tela
pontoE1.innerText = "ponto :" + ponto;

//pega os valores da var "questaoE1", e exibi na tela, com algumas modificações nos números.
questaoE1.innerText = "Quanto é " + num1 + " multiplicado por " + num2 + " ? "


//pega os números e multiplica eles, depois salva na var "correctAns"(resposta_correta)
const correctAns = num1 * num2;

//adiciona um ouvinte, no botão "submit"
formE1.addEventListener("submit", () => {

    //pega o valor adicionado no "input",e salva na var "userAns"(resposta_usuario)
    const userAns = +inputE1.value;

    //se (resposta_usuario é igual a resposta_correta)
    if (userAns == correctAns) {

        //se for igual, adiciona +1 na var "ponto"
        ponto++

        //executa a função "updateLocalStorage()"
        updateLocalStorage()
        //senão
    } else {
        //se não for igual, retira -1, na var "ponto" 
        ponto--
        //executa essa função "updateLocalStorage"
        updateLocalStorage()
    }

})

//Função, vai atualizar os pontos
function updateLocalStorage() {

    localStorage.setItem("ponto", JSON.stringify(ponto))
}
 

            // fazer a verificação para mostrar o placar de vencedor
            if(ponto == 10){
                gameOver();
                localStorage.removeItem('ponto');
                fimJogo = false; 
                formE1 = "";
            } else if (ponto == -10 ) {
                gameMenos();
                localStorage.removeItem('ponto');
                fimJogo = false; 
                formE1 = "";
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

