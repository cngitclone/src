import React, { useState } from 'react';

function FoodOrder() {
  const [orders, setOrders] = useState([
    { id: 1, item: 'Burger', quantity: 2, price: 150 },
    { id: 2, item: 'Pizza', quantity: 1, price: 300 },
    { id: 3, item: 'Pasta', quantity: 3, price: 200 }
  ]);

  const [newOrder, setNewOrder] = useState({
    item: '',
    quantity: '',
    price: ''
  });

  const handleNewOrderChange = (event) => {
    const { name, value } = event.target;

    setNewOrder({
      ...newOrder,
      [name]: value
    });
  };

  const handleAddOrder = (event) => {
    event.preventDefault();

    if (
      newOrder.item.trim() === '' ||
      newOrder.quantity === '' ||
      newOrder.price === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    const newId =
      orders.length > 0
        ? Math.max(...orders.map((order) => order.id)) + 1
        : 1;

    const order = {
      id: newId,
      item: newOrder.item,
      quantity: Number(newOrder.quantity),
      price: Number(newOrder.price)
    };

    setOrders([...orders, order]);

    setNewOrder({
      item: '',
      quantity: '',
      price: ''
    });
  };

  return (
    <div className="container my-4">
      <h1 className="text-primary text-center mb-4">
        Food Order Management
      </h1>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Food Item</th>
            <th>Quantity</th>
            <th>Price ($)</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.item}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-success text-center mt-4 mb-3">
        Add New Food Order
      </h2>

      <form onSubmit={handleAddOrder}>
        <div className="row g-2">
          <div className="col-md-4">
            <input
              type="text"
              name="item"
              className="form-control"
              placeholder="Food Item"
              value={newOrder.item}
              onChange={handleNewOrderChange}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              name="quantity"
              className="form-control"
              placeholder="Quantity"
              min="1"
              value={newOrder.quantity}
              onChange={handleNewOrderChange}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Price ($)"
              min="0"
              step="0.01"
              value={newOrder.price}
              onChange={handleNewOrderChange}
            />
          </div>

          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-success w-100"
            >
              Add Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FoodOrder;
