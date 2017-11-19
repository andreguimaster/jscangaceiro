class NegociacaoService {
    
    obtemNegociacoesDaSemana(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if (xhr.status == 200){
                    console.log('Obtendo as negociações do servidor');
                    const negociacoes = JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(
                        new Date(objeto.data),
                        objeto.quantidade,
                        objeto.valor
                        )
                    );
                    callback(null, negociacoes);
                } else {
                    callback('Não foi possível obter as negociações da semana', null);
                }
            }
        };
        xhr.send();
    }
}