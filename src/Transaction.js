import './Transaction.css'

function Transaction({text, type, amount}){
    return (
      <li key={text} className={type ? 'ingreso' : 'egreso'}>
        <p>Transaction: {text}</p>
        <span>Amount: {amount}</span>
      </li>
    );
  }

  export {Transaction}