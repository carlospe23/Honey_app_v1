import './CurrentAmount.css'

function CurrentAmount({current}){
    return (
      <h2>
        A dia de hoy tu dinero es: <span>$ {current}</span> COP
      </h2>
    );
  }

  export {CurrentAmount};