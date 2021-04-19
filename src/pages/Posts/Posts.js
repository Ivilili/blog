import React, {useContext, memo} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {DataContext} from '../../context/DataContext';
import Comments from '../../components/Comments/Comments';
import Post from '../../components/Post/Post';
import Search from '../../components/Search/Search';

import './Posts.css';

const Posts =  memo((props) => {
  const {propsmessage} = props;
 const DataCtx = useContext(DataContext);

  console.log(`${propsmessage} Posts`);

  return (
    <>
    <Search propsmessage={`Hello from`} />
    <div className="Posts">
      {DataCtx.filteredPosts.map(post => (
       <div key={shortid.generate()}> 
          <Post id={post.id} title={post.title} text={post.body} 
           name={post.userId} propsmessage={`Hello from`}/> 
          {DataCtx.comments.map((comment) => (
          <div key={shortid.generate()}> {comment.postId === post.id && (
           <Comments email={comment.email} body={comment.body} name={comment.name}  propsmessage={`Hello from`}/>
          )}
          </div>
          ))}
      </div>
        ))}
      </div> 
  </>
  );
});

export default Posts;

Posts.propTypes = {
  propsmessage: PropTypes.string
} 