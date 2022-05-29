// import { useState } from "react";
import Button from "../Button";
import "./styles.css";

function Filter({ listTransactions, setListTransactions }) {
  // const [profit, setProfit] = useState([]);
  // const [expense, setExpense] = useState([]);

  // const filterProfit = () => {
  //   setProfit([...listTransactions]);
  //   const filter = profit.map((item) => item.type === "Entrada");
  //   setListTransactions([filter]);
  // };
  // const filterExpense = () => {
  //   setExpense([...listTransactions]);
  //   const filter = expense.map((item) => item.type === "Despesas");
  //   setListTransactions([filter]);
  // };

  // const showAll = () => {
  //   listTransactions.map((item) =>
  //     item.type !== "Despesas"
  //       ? setListTransactions([...item, expense])
  //       : setListTransactions([...item, profit])
  //   );
  // };

  return (
    <section className="filter-container">
      <span>Resumo financeiro</span>
      <div className="buttons">
        <Button
          // onClick={() => showAll()}
          name={"Todos"}
          className={"btn-option selected"}
        />
        <Button
          // onClick={() => filterProfit()}
          name={"Entradas"}
          id={"Entradas"}
          className={"btn-option"}
        />
        <Button
          // onClick={() => filterExpense()}
          name={"Despesas"}
          id={"Despesas"}
          className={"btn-option"}
        />
      </div>
    </section>
  );
}

export default Filter;
