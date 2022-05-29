import Card from "../Card";

function List({ handleTransaction, listTransactions }) {
  return (
    <ul>
      {listTransactions.map((item, key) => (
        <Card
          handleTransaction={() => handleTransaction(item)}
          description={item.description}
          type={item.type}
          value={item.value}
          key={key}
        />
      ))}
    </ul>
  );
}

export default List;
