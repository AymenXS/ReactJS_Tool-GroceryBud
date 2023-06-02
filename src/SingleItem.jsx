import { ImBin2 } from 'react-icons/im';

const SingleItem = ({ name, completed, id, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          editItem(id);
        }}
      />
      <p style={{ textTransform: 'capitalize', textDecoration: completed && 'line-through' }}>
        {name}
      </p>
      <button
        className="remove-btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        <ImBin2 />
      </button>
    </div>
  );
};
export default SingleItem;
