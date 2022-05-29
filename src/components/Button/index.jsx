import "./styles.css";

function Button({ name, className, onClick, id }) {
  return (
    <button onClick={onClick} id={id} className={className}>
      {name}
    </button>
  );
}

export default Button;
