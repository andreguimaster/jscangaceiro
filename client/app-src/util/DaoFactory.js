import { ConnectionFactory } from './ConnectionFactory';
import { NegociacaoDao } from '../domain/negociacao/NegociacaoDao';


export class DaoFactory {
    
    constructor() {
        throw new Error('Não é possível criar instâncias dessa classe');
    }

    static async getNegociacaoDao() {
        const conn = await ConnectionFactory.getConnection();
        return new NegociacaoDao(conn);
    }
}