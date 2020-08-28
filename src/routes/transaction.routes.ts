import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

// const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;

    const newTransaction = {
      id: uuidv4(),
      title,
      value,
      type
    }

    return response.json(newTransaction)
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
