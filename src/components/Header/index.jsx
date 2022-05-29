import Button from "../Button";
import "./styles.css";

function Header({ setInitialize }) {
  return (
    <header>
      <span className="title-header">
        Nu <strong className="title-strong">Kenzie</strong>
      </span>
      <Button
        className={"btn-header"}
        name={"Início"}
        onClick={() => setInitialize(false)}
      />
    </header>
  );
}

export default Header;
