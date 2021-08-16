import React from 'react';

const Book = (props) => {
  const {img, title, author} = props;
  const clickHandler = (e,) => {
    console.log(e.target)
  }
  return (
<article className="book">
  <img src={img}/>
  <h1>{title}</h1>
  <h4 className="author">{author}</h4>
  <button onClick={ clickHandler}>Ex</button>
</article>)};

export default Book;