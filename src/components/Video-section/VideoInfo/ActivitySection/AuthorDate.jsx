import "./_AuthorDate.scss";

const AuthorDate = (props) => {
  return (
    <div className='author-date'>
      <h5 className='author-date__author'>By {props.channel}</h5>
      <p className='author-date__date'>{props.date}</p>
    </div>
  );
};

export default AuthorDate;
