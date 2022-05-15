import "./_TextArea.scss";

const TextArea = (props) => {
  return (
    <form className={props.className}>
      <label htmlFor={props.id}>{props.title}</label>
      <textarea
        type='text'
        id={props.id}
        placeholder={props.placeholder}
      ></textarea>
    </form>
  );
};

export default TextArea;
