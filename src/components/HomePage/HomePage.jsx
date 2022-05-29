import Svg from "../../assets/Nukenzie.svg";
import "./styles.css";

function HomePage({ setInitialize }) {
  return (
    <section className="blackscreen">
      <section className="container">
        <div className="container-text">
          <p className="container-text-title">
            Nu <strong className="container-text-title-strong">Kenzie</strong>
          </p>
          <p className="container-text-info">
            Centralize o controle das suas finanças
          </p>
          <small className="container-text-small">
            de forma rápida e segura
          </small>
          <button
            className="container-button"
            onClick={() => setInitialize(true)}
          >
            Iniciar
          </button>
        </div>
        <div>
          <img className="nukenzie-logo" src={Svg} alt="Nukenzie Img" />
        </div>
      </section>
    </section>
  );
}

export default HomePage;
