import './TransactionList.css'

function TransactionsList({children}){
    return (
      <ul>
        {children}
      </ul>
    );
  }

  export {TransactionsList};