import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error('please provide a value');
      return;
    }
    addItem(newItem);
    setNewItem('');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input type="text" value={newItem} onChange={(event) => setNewItem(event.target.value)} />
        <button className="btn">add item</button>
      </div>
    </form>
  );
};

export default Form;
