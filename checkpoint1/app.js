const pratos = {
    1: { nome: 'Pipoca', tempo: 10 },
    2: { nome: 'Macarrao', tempo: 8 },
    3: { nome: 'Carne', tempo: 15 },
    4: { nome: 'Feijao', tempo: 12 },
    5: { nome: 'brigadeiro', tempo: 8}
};


function fazerPrato(nmroPrato, tempo){
    const prato = pratos[nmroPrato];

    if(!prato){
        return console.log('Prato inexistente')
    }

    let mensagem;
    const tempoPadrao = prato.tempo;


if (tempo < tempoPadrao){
    console.log('O prato está pronto. Bom apetite!');
    mensagem = 'Tempo insuficiente';
}else if (tempo >= tempoPadrao * 2 && tempo <= tempoPadrao * 3){
    console.log('O prato está pronto. Bom apetite!');
    mensagem = 'A comida queimou'
}else if (tempo > tempoPadrao * 3){
    console.log('O prato está pronto. Bom apetite!');
    mensagem = 'Kabumm!!'
}
    else{
        mensagem = 'a comida esta pronta! Bom apetite';
    }

    return console.log(mensagem);

}
fazerPrato(3, 40);








