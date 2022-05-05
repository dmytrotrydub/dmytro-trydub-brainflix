import "./_Button.scss";

const Button = (props) => {
  return (
    <button id={props.id} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;
