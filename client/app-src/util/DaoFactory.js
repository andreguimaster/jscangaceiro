import { ConnectionFactory } from './ConnectionFactory.js';
import { NegociacaoDao } from '../domain/negociacao/NegociacaoDao.js';


export class DaoFactory {
    
    constructor() {
        throw new Error('Não é possível criar instâncias dessa classe');
    }

    static getNegociacaoDao() {
        return ConnectionFactory
            .getConnection()
            .then(conn => new NegociacaoDao(conn));
    }
}