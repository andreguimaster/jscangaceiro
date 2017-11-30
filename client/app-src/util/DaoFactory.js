import { ConnectionFactory } from './ConnectionFactory.js';
import { NegociacaoDao } from '../domain/negociacao/NegociacaoDao.js';


export class DaoFactory {
    
    constructor() {
        throw new Error('Não é possível criar instâncias dessa classe');
    }

    static async getNegociacaoDao() {
        const conn = await ConnectionFactory.getConnection();
        return new NegociacaoDao(conn);
    }
}