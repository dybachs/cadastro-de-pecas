console.log('Bem vindo ao cadastro de Peças');
let listaPecas=0
let pecas=['volante','embreagem','retrovisor','bomba de gasolina','pneu'];
let pesoPeca=(InputDeviceInfo);

function cadastrarPecas()
    if (pesoPeca>100) {
        console.log('Peça fora das especificações');
    }else{
        console.log('Quantas peças você quer cadastrar?');
    let numeroPecas=(InputDeviceInfo);
    if(numeroPecas>10) {
        console.log('Caixa com capacidade insuficiente');
    }else{
        for (let nomePecas = 0; nomePecas < numeroPecas.length; nomePecas++); {
        const element = numeroPecas[nomePecas];
        if (numeroPecas[nomePecas].length<3) {
            console.log('nome da peça muito curto');
        } else {
            console.log('peça cadastrada com sucesso');
            }
        }
    }   
}