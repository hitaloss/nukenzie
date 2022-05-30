import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import LandingPage from "./components/LandingPage";
import List from "./components/List";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [initialize, setInitialize] = useState(false);
  const [profit, setProfit] = useState([]);

  const handleTransaction = (transaction) => {
    const filter = listTransactions.filter((item) => item !== transaction);
    setListTransactions(filter);
    setProfit(filter);
  };

  return initialize ? (
    <>
      <Header setInitialize={setInitialize} />
      <main>
        <section className="left-section">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setProfit={setProfit}
          />
        </section>
        <section className="right-section">
          <Filter listTransactions={listTransactions} setProfit={setProfit} />
          <ul className="card-container">
            {profit.length > 0 ? (
              <List
                handleTransaction={handleTransaction}
                listTransactions={profit}
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  ) : (
    <HomePage setInitialize={setInitialize} />
  );
}

export default App;
