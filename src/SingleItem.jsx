import { useState } from 'react';

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name=""
        id=""
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p style={{ textTransform: 'capitalize', textDecoration: item.completed && 'line-through' }}>
        {item.name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(item.id)}>
        delete
      </button>
    </div>
  );
};
export default SingleItem;
