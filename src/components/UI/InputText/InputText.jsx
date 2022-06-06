import "./inputText.scss";

const InputText = (props) => {
  return (
    <>
        <label htmlFor={props.id}>{props.title}</label>
        <input
          type='text'
          id={props.id}
          placeholder={props.placeholder}
        ></input>

    </>
  );
};

export default InputText;
