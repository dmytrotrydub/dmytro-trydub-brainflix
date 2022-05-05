import "./_InputText.scss";

const InputText = (props) => {
  return (
    <>
      <form className='search-form'>
        <label htmlFor={props.id}></label>
        <input
          type='text'
          id={props.id}
          className={props.className}
          placeholder='Search'
        ></input>
      </form>
    </>
  );
};

export default InputText;
