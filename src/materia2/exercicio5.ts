type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === 'string') {
        console.log(`Resposta do servidor (String): ${resposta}`);
    } else if (typeof resposta === 'boolean') {
        console.log(`Resposta do servidor (Boolean): ${resposta ? 'Sucesso' : 'Falha'}`);
    }
}

processarResposta("Servidor respondido com sucesso!");
processarResposta(true);
processarResposta(false);
