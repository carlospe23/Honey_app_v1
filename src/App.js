import React from 'react'
import {CurrentAmount} from './CurrentAmount'
import {TransactionsList} from './TransactionsList'
import {Transaction} from './Transaction'
import {TransactionAdder} from './TransactionAdder'


const defaulTransactions = [
  {text: 'Gym', type:true, amount: 50000},
  {text: 'Pasaje', type:false,  amount: -10000},
  {text: 'Comida', type:false,  amount: -2000},
  {text: 'Droga', type:true,  amount: 5000},

]

function App() {
  const current = defaulTransactions.reduce((total, transaction) => (
    total += transaction.amount
  ), 0)
  return (
    <React.Fragment>
      <CurrentAmount current={current}/>
      <TransactionsList>
        {defaulTransactions.map(movement => (
          <Transaction
           text={movement.text} 
           type={movement.type}
           amount={movement.amount}/>
        ))}
      </TransactionsList>
      <TransactionAdder/>
    </React.Fragment>
  );
}

export default App;
