import React, {useContext, memo, useEffect} from 'react';
import shortid from 'shortid';
import {DataContext} from '../../context/DataContext';
import Comments from '../../components/Comments/Comments';
import Post from '../../components/Post/Post';
import Search from '../../components/Search/Search';

import './Posts.css';

export default memo(function Posts(props) {
  const {propsmessage} = props;
 const DataCtx = useContext(DataContext);

 useEffect(() => {
  console.log(`${propsmessage} Posts`);
 }, [])

  return (
    <>
    <Search />
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
})