import './PostDetails.css';
import React, {useContext, useEffect} from 'react';
import {DataContext} from '../../context/DataContext';
import shortid from 'shortid';
import Comments from '../Comments/Comments';

function PostDetails(props) {
  const { propsmessage} = props;
  const DataCtx = useContext(DataContext);
  console.log(`${propsmessage} postDetails!`)

  const id = localStorage.getItem('id');
  const title = localStorage.getItem('title');
  const text =localStorage.getItem('text');
  const name = localStorage.getItem('author');


  useEffect(() => {
    DataCtx.getComments(id);
  }, [id])

  return (
    <div className="PostDetails">
        <h1 className="PostDetails__title">{title}</h1>
        <small>Author: {name}</small>
        <p className="PostDetails__text">{text}</p>
        <div>Comments:</div>
        {DataCtx.comments && DataCtx.comments.map((comment) => (
           <Comments key={shortid.generate()} email={comment.email} body={comment.body} name={comment.name}  /> 
           ))} 
    </div>
  );
}

export default PostDetails;