import { FaTrash } from "react-icons/fa";
import "./styles.css";

function Card({ handleTransaction, description, type, value }) {
  return (
    <li className={type === "Entrada" ? "card-positive" : "card-negative"}>
      <section className="card-text">
        <p className="card-description">{description}</p>
        <p className="card-type">{type}</p>
      </section>
      <section>
        <span className="card-value">R$ {value}</span>
      </section>
      <section>
        <div className="trash-div" onClick={handleTransaction}>
          <span className="trash-icon">
            <FaTrash />
          </span>
        </div>
      </section>
    </li>
  );
}

export default Card;
