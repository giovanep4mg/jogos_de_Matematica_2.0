/**criar duas variáveis,num1 e num2.
 * Math.randon() * 10 > fará 10 números aleatório,em decimais.
 * Math.ceil > pega esses 10 números, e coloca eles em inteiro.
 */
const num1Sub = Math.ceil(Math.random() * 10)
const num2Sub = Math.ceil(Math.random() * 10)


//pega a tag id "questaoSub", salva na var "questaoSubE1"
const questaoSubE1 = document.getElementById("questaoSub");

//pega a tag id "inputSub", salva na var "inputSubE1"
const inputSubE1 = document.getElementById("inputSub");

//pega a tag id "formSub", salva na var "formSubE1"
const formSubE1 = document.getElementById("formSub");

//pega a tag id "pontoSub", salva na var "pontoSubE1"
const pontoSubE1 = document.getElementById("pontoSub")


//
let pontoSub = JSON.parse(localStorage.getItem("pontoSub"));

// se (não ponto)
if (!pontoSub) {
    pontoSub = 0;
}

//pega o valor na var "pontoSubE1" e exibi na tela, com os valores dentro  da "pontoSub"
pontoSubE1.innerText = "ponto :" + pontoSub;

//pega os valores da var "questaoSubE1", e exibi na tela, com algumas modificações nos números.
questaoSubE1.innerText = "Quanto é " + num1Sub + " Menos (-) " + num2Sub + " ? "


//pega os números e multiplica eles, depois salva na var "correctAnsSub"(resposta_correta)
const correctAnsSub = num1Sub - num2Sub;

//adiciona um ouvinte, no botão "submit",quando clicar vai executar esse metodo,função
formSubE1.addEventListener("submit", () => {

    //pega o valor adicionado no "input",e salva na var "userAns"(resposta_usuario)
    const userAnsSub = +inputSubE1.value;

    //se (resposta_usuario é igual a resposta_correta)
    if (userAnsSub == correctAnsSub) {

        //se for igual, adiciona +1 na var "ponto"
        pontoSub++

        //executa a função "updateLocalStorage()"
        updateLocalStorageSub()
        //senão
    } else {
        //se não for igual, retira -1, na var "ponto" 
        pontoSub--
        //executa essa função "updateLocalStorage"
        updateLocalStorageSub()
    }

})

//Função, vai atualizar os pontos
function updateLocalStorageSub() {

    localStorage.setItem("pontoSub", JSON.stringify(pontoSub))
}


