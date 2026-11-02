import React, { useState } from 'react';

function MusicStore() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Acoustic Guitar', quantity: 10, price: 150 },
    { id: 2, name: 'Electric Keyboard', quantity: 5, price: 300 },
    { id: 3, name: 'Drum Set', quantity: 3, price: 500 }
  ]);

  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    price: ''
  });

  const handleNewItemChange = (event) => {
    const { name, value } = event.target;

    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  const handleAddItem = (event) => {
    event.preventDefault();

    if (
      newItem.name.trim() === '' ||
      newItem.quantity === '' ||
      newItem.price === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    const newId =
      inventory.length > 0
        ? Math.max(...inventory.map((item) => item.id)) + 1
        : 1;

    const item = {
      id: newId,
      name: newItem.name,
      quantity: Number(newItem.quantity),
      price: Number(newItem.price)
    };

    setInventory([...inventory, item]);

    setNewItem({
      name: '',
      quantity: '',
      price: ''
    });
  };

  return (
    <div className="container my-4">
      <h1 className="bg-dark text-warning text-center fw-bold py-3 rounded">
        Music Store Inventory
      </h1>

      <table className="table table-bordered table-hover shadow-sm">
        <thead className="table-warning">
          <tr>
            <th>ID</th>
            <th>Instrument / Album</th>
            <th>Quantity</th>
            <th>Price ($)</th>
          </tr>
        </thead>

        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>
                <span className="badge text-dark">
                  {item.id}
                </span>
              </td>
              <td className="fw-bold">{item.name}</td>
              <td>{item.quantity}</td>
              <td className="text-success">
                ${item.price.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-info text-center mt-4 mb-3">
        Add New Instrument
      </h2>

      <form onSubmit={handleAddItem}>
        <div className="row g-2">
          <div className="col-md-4">
            <input
              type="text"
              name="name"
              className="form-control border-info"
              placeholder="Instrument / Album Name"
              value={newItem.name}
              onChange={handleNewItemChange}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              name="quantity"
              className="form-control border-info"
              placeholder="Quantity"
              min="0"
              value={newItem.quantity}
              onChange={handleNewItemChange}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              name="price"
              className="form-control border-info"
              placeholder="Price ($)"
              min="0"
              step="0.01"
              value={newItem.price}
              onChange={handleNewItemChange}
            />
          </div>

          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-warning w-100 fw-bold"
            >
              Add Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MusicStore;
