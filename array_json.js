/**********************************************************************
 * Objetivo: Aprender a trabalhar com estrutura de dados Array e JSON
 * Data 29/09/2023
 * Autor: Vitor Hugo Nunes Nascimento
 * Versão: 1.0
 *********************************************************************/

const introducaoArray = function(){
    let listaDeNomes = ['Jose', 'Will', 'Hugo', 'Andre', 'Fernando', 'Maria']

    //Exibe os dados do arry
    console.log(listaDeNomes);

    //Exibe os dados do array em formato de tabela
    console.table(listaDeNomes);

    //Retorna a quantidade de elementos no array
    console.log(listaDeNomes.length);

    //Adiciona elementos novos no final da lista
    listaDeNomes.push('Roberto');
    
    //Adiciona elementos novos no inicio da lista
    listaDeNomes.unshift('Ricardo');
    console.table(listaDeNomes);

    //Remove o último elemento da tabela
    listaDeNomes.pop();
    console.table(listaDeNomes);

    //Remove o primeiro elemento da tabela
    listaDeNomes.shift();
    console.table (listaDeNomes);

    //Remove um elemento baseado no índice, podendo definir a serem excluídos
    //Ex (2, 3) 2 -> referente a índice e 3 quantidade de itens
    listaDeNomes.splice(2, 3)
    console.table(listaDeNomes)

    listaDeNomes.push('André da Silva', 'Ricardo Borges', 'João da Silva', 10)
    console.log(listaDeNomes);

    //typeof - retorna o tipo de dados de um elemento
    console.log(typeof(listaDeNomes[0]))

    //retorna o tipo de dados fora da tabela
    console.log(listaDeNomes[3])
}
//introducaoArray();


const percorrendoArray = function(){
    listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];

    //while
    // let cont = 0;
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do Produto: ' + listaDeProdutos[cont])
    //     cont +=1;
    // }

    //for 
    // for(let cont=0; cont < listaDeProdutos.length; cont++){
    //     console.log('Nome do Produto: ' + listaDeProdutos[cont]);
    // }

    //forEach
    // listaDeProdutos.forEach(function(produto, indice){
    //     console.log(indice + ' - Nome do Produto:  ' + produto)
    // })

    //Retpora o indice do elemento que foi encontrado
    //Caso não exista o item buscado retornar -1
    // console.log(listaDeProdutos.indexOf('Impressora'));

    //Retorna verdadeiro ou falso
    // console.log(listaDeProdutos.includes('Mouse'));


}

// percorrendoArray();

const filtrarProduto = function(nomeProduto){
    listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];
    let nome = nomeProduto;

    let status = true;

    listaDeProdutos.forEach(function(produto){
        if(produto.toUpperCase() == nome.toUpperCase())
        status = true;
    })
    return status

}

console.log(filtrarProduto('nome'))


// [ ] -> representa a estrutura array
// { } -> representa a estrutura json