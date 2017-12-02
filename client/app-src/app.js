import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import 'bootstrap/js/modal.js';

import '../css/meucss.css';

import { NegociacaoController } from './controllers/NegociacaoController.js';
const controller = new NegociacaoController();


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

fetch('http://localhost:3000/negociacoes', config)
    .then((res)=>res.json())
    .then((dados)=>console.log(dados));
*/