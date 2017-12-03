import { HttpService } from '../../util/HttpService';
import { Negociacao } from './Negociacao';
import { ApplicationException } from '../../util/ApplicationException';

const context = 'http://localhost:3000/'

export class NegociacaoService {
    
    constructor(){
        this._http = new HttpService();
    }

    async obtemNegociacoesDaSemana() {
        return this._http.get(`${context}negociacoes/semana`).then(
            (dados) => {
                console.log(dados);
                const negociacoes = dados.map(
                    objeto => new Negociacao(
                        new Date(objeto.data),
                        objeto.quantidade,
                        objeto.valor
                    ));
                return negociacoes;
            },
            (err) => {
                throw new ApplicationException('Não foi possível obter as negociações');
            },
        );
    }

    async obtemNegociacoesDaSemanaAnterior() {
        return this._http.get(`${context}negociacoes/anterior`).then(
            (dados) => {
                console.log(dados);
                const negociacoes = dados.map(
                    objeto => new Negociacao(
                        new Date(objeto.data),
                        objeto.quantidade,
                        objeto.valor
                    ));
                return negociacoes;
            },
            (err) => {
                throw new ApplicationException('Não foi possível obter as negociações da semana anterior');
            },
        );
    }

    async obtemNegociacoesDaSemanaRetrasada() {
        return this._http.get(`${context}negociacoes/retrasada`).then(
            (dados) => {
                console.log(dados);
                const negociacoes = dados.map(
                    objeto => new Negociacao(
                        new Date(objeto.data),
                        objeto.quantidade,
                        objeto.valor
                    ));
                return negociacoes;
            },
            (err) => {
                throw new ApplicationException('Não foi possível obter as negociações da semana retrasada');
            },
        );
    }

    async obtemNegociacoesDoPeriodo() {
        try{
            let periodo = await Promise.all([   
                this.obtemNegociacoesDaSemana(),
                this.obtemNegociacoesDaSemanaAnterior(),
                this.obtemNegociacoesDaSemanaRetrasada()
            ]);
            return periodo
                .reduce((novoArray, item) => novoArray.concat(item), [])
                .sort((a, b) => b.data.getTime() - a.data.getTime());
        }catch(err) {
                console.log(err);
                throw new Error('Não foi possível obter as negociações do período');
        };
    }
}
