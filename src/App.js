import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import LandingPage from "./components/LandingPage";
import List from "./components/List";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [initialize, setInitialize] = useState(false);

  const handleTransaction = (transaction) => {
    const filter = listTransactions.filter((item) => item !== transaction);
    return setListTransactions(filter);
  };

  return initialize ? (
    <>
      <Header setInitialize={setInitialize} />
      <main>
        <section className="left-section">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </section>
        <section className="right-section">
          <Filter
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <ul className="card-container">
            {listTransactions.length > 0 ? (
              <List
                handleTransaction={handleTransaction}
                listTransactions={listTransactions}
              />
            ) : (
              <>
                <span className="info">
                  Você ainda não possui nenhum lançamento
                </span>
                <LandingPage /> <LandingPage /> <LandingPage />
              </>
            )}
          </ul>
        </section>
      </main>
    </>
  ) : (
    <HomePage setInitialize={setInitialize} />
  );
}

export default App;
