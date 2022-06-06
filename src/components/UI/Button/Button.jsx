import "./button.scss";

const Button = (props) => {
  console.log(props);
  return (
    <button id={props.id} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;
