import { useState } from "react";
import "./styles.css";

function Form({ listTransactions, setListTransactions, setProfit }) {
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [transaction, setTransaction] = useState("Entrada");
  const addTransaction = () => {
    setListTransactions([
      ...listTransactions,
      {
        description: description,
        type: transaction,
        value: Number(value),
      },
    ]);
    setProfit([
      ...listTransactions,
      {
        description: description,
        type: transaction,
        value: Number(value),
      },
    ]);
  };
  const totalMoney = listTransactions.reduce(
    (acc, currentvalue) =>
      currentvalue.type === "Entrada"
        ? (acc += currentvalue.value)
        : (acc -= currentvalue.value),
    0
  );
  return (
    <>
      <form
        className="form"
        onSubmit={(event) => addTransaction(event.preventDefault())}
      >
        <section className="form-description">
          <p className="form-name">Descrição</p>
          <input
            className="form-input"
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescription(event.target.value)}
          />
          <small className="form-caption">Ex:Compra de roupas</small>
        </section>
        <section className="price">
          <div className="price-value">
            <p>Valor</p>
            <div className="background">
              <input
                type="number"
                placeholder="1"
                onChange={(event) => setValue(event.target.value)}
              />
              <span>R$</span>
            </div>
          </div>
          <div className="price-value">
            <p>Tipo de valor</p>
            <div className="background">
              <select
                name="transiction"
                value={transaction}
                onChange={(event) => setTransaction(event.target.value)}
              >
                <option value="Entrada">Entrada</option>
                <option value="Despesas">Despesas</option>
              </select>
            </div>
          </div>
        </section>
        <section>
          <button className="form-btn" type="submit">
            Inserir Valor
          </button>
        </section>
      </form>
      <section className="baseboarding">
        <div className="baseboarding-text">
          <p>Valor total:</p>
          <small>O valor se refere ao saldo</small>
        </div>
        <div className="baseboarding-value">
          <span>R$ {totalMoney}</span>
        </div>
      </section>
    </>
  );
}

export default Form;
