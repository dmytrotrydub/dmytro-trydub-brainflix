const InputText = (props) => {
  return (
    <>
      <form className={props.className}>
        <label htmlFor={props.id}>{props.children}</label>
        <input
          type='text'
          id={props.id}
          placeholder={props.placeholder}
        ></input>
      </form>
    </>
  );
};

export default InputText;
