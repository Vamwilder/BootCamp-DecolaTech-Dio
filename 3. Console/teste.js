console.log("3. Executando um arquivo JS");         // Dividindo conteudo
function returnEvenValues(array) {                  // Declarando a função, solicitando um array
    let evenNums = [];                              // Declarando um array vazio
    for (let i=0; i<array.length; i++) {            // Enquanto i for menor que a quantidade de itens no Array
        if(array[i] %2 == 0) {                      // Verificando se o resto da divisão resta 2
            evenNums.push(array[i]);                // Empurra este valor para dentro do array evenNums
        }
    }
    console.log("Os Numeros pares sõ: "+evenNums);  // Apresenta o Array declarado dentro da função
}

let array = [1,2,4,5,7,8];                          // Colocando numeros no array,
returnEvenValues(array);                            // Chamando a função, informando o array declarado como array
