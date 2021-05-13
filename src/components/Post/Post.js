import React, {useContext, memo} from 'react';
import PropTypes from 'prop-types';
import {DataContext} from '../../context/DataContext';
import {Link} from 'react-router-dom';
import './Post.css';

 const Post = memo((props) => {
  const {id, title, text, name, propsmessage} = props;
  console.log(`${propsmessage} Post`);
  const DataCtx = useContext(DataContext);
  let authorsName = DataCtx.user.find(author => author.id === name);

  console.log(`${propsmessage} Post`);

  const handleClick = () => {
    localStorage.setItem('id', id);
    localStorage.setItem('title', title);
    localStorage.setItem('text', text);
    localStorage.setItem('author', authorsName.name);
  }

  return (
      <div className="Post">
        <h1 className="Post__title">{title}</h1>
        <div className="Post__name">{authorsName.name}</div>
        <p className="Post__text">{text}  <Link  className="Post__link"
        to={{ pathname: `/post/${id}` }} target="_blank" rel="noopener noreferrer" onClick={handleClick}>Read more...</Link></p>
        <button className="Posts__button" onClick={() => {DataCtx.getComments(id)}}> Show Comments</button>
      </div>
  );
});

export default Post;

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.number,
  propsmessage: PropTypes.string
} 