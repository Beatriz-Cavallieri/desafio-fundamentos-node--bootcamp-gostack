import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestInterface {
  title: string,
  value: number,
  type: 'income' | 'outcome'
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestInterface): Transaction {

    // conferir se há saldo
    if ((type === 'outcome') && (value > this.transactionsRepository.getBalance().total)) {
      // erro
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type
    });
    return transaction;
  }
}

export default CreateTransactionService;
