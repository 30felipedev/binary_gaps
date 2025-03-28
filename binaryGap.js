function solution(N) {

    //declaração de variaveis 
    var quantZero = 0, maiorGap = 0;
    //transformando valor digitado em binario e separando os caracteres em um array
    var arrayBin = (parseInt(N)).toString(2).split("");
    //loop que percorre o array
    for (var i = 0; i < arrayBin.length; i++) {

        //inicia a lógica de contagem quando identifica um valor igual a 1
        if (arrayBin[i] == 1) {


            var f = i + 1;

            while (f < arrayBin.length && arrayBin[f] == 0) { //contagem até encontrar outro valor igual a 1

                quantZero++;
                f++
            }

            if (f < arrayBin.length && arrayBin[f] == 1) {

                if (quantZero > maiorGap) {

                    maiorGap = quantZero;//compara os gaps e armaneza o maior

                }
            }
            quantZero = 0;//reseta o contador pra iniciar uma nova contagem caso necessário
        }

    }
    console.log(maiorGap);
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); //adicionando interação via terminal

rl.question("Digite algo: ", (N) => {

    solution(N);
    rl.close();
});