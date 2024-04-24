import React from 'react';

const Comment = ({ comments }) => {
  return (
    <div>
      {comments.map((cmt, index) => (
        <div key={index}>
          <h1>{cmt.author}</h1>
          <p>{cmt.conent }</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;
