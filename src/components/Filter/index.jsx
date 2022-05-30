import Button from "../Button";
import "./styles.css";

function Filter({ listTransactions, setProfit }) {
  const filterProfit = (value) => {
    const filter = listTransactions.filter((item) => item.type === value);
    setProfit(filter);
  };

  return (
    <section className="filter-container">
      <span>Resumo financeiro</span>
      <div className="buttons">
        <Button
          onClick={() => setProfit(listTransactions)}
          name={"Todos"}
          className={"btn-option selected"}
        />
        <Button
          onClick={() => filterProfit("Entrada")}
          name={"Entradas"}
          id={"Entradas"}
          className={"btn-option"}
        />
        <Button
          onClick={() => filterProfit("Despesas")}
          name={"Despesas"}
          id={"Despesas"}
          className={"btn-option"}
        />
      </div>
    </section>
  );
}

export default Filter;
