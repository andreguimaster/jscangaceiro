import { NegociacaoController } from './controllers/NegociacaoController.js';
const controller = new NegociacaoController();


const $ = document.querySelector.bind(document);
$('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
$('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller));
$('#botao-importa')
    .addEventListener('click',controller.importaNegociacoes.bind(controller));

/* Exemplo de um POST */
/*
import { Negociacao } from './domain/index.js';

const negociacao = new Negociacao(new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');
const body = JSON.stringify(negociacao);
const method = 'POST';

const config = {
    method,
    headers,
    body
};

fetch('/negociacoes', config)
    .then((res)=>res.json())
    .then((dados)=>console.log(dados));
*/