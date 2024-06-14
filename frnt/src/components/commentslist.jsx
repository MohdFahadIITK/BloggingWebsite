import React from 'react';

const commentslist = ({ comments }) => {
  return (
    <>
      {comments.map((comment,index ) => (
        <div key={index} className='mb-4'>
          <h4 className='text-xl font-bold'>{comment.name}</h4>
          <p className='mt-1 ml-2'>{comment.comment}</p>
        </div>
      ))}
    </>
  );
};

export default commentslist;
