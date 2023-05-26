import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
};

// Option 1
const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

// const defaultList = JSON.parse(localStorage.getItem('list') || '[]'); // Option 2

const App = () => {
  const [items, setItems] = useState(getLocalStorage()); // Option 1
  // const [items, setItems] = useState(defaultList); // Option 2

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list');
  };

  const removeItem = (itemID) => {
    const newItems = items.filter((item) => item.id !== itemID);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item removed from the list');
  };

  const editItem = (itemID) => {
    const newItems = items.map((item) => {
      if (item.id === itemID) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
