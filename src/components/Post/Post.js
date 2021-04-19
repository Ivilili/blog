import React, {useContext, memo, useEffect} from 'react';
import {DataContext} from '../../context/DataContext';
import {Link} from 'react-router-dom';
import './Post.css';

export default memo(function Post(props) {
  const {id, title, text, name, propsmessage} = props;
  console.log(`${propsmessage} Post`);
  const DataCtx = useContext(DataContext);
  let authorsName = DataCtx.user.find(author => author.id === name);

  useEffect(() => {
    console.log(`${propsmessage} Post${id}`);
   }, [])

  localStorage.setItem('id', id);
  localStorage.setItem('title', title);
  localStorage.setItem('text', text);
  localStorage.setItem('author', authorsName.name);

  return (
      <div className="Post">
        <h1 className="Post__title">{title}</h1>
        <div className="Post__name">{authorsName.name}</div>
        <p className="Post__text">{text}  <Link  className="Post__link"
        to={{ pathname: `/post/${id}` }} target="_blank" rel="noopener noreferrer">Read more...</Link></p>
        <button className="Posts__button" onClick={() => {DataCtx.getComments(id)}}>Show Comments</button>
      </div>
  );
})