import React, { useState } from 'react';

function MedicalShop() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Paracetamol', quantity: 50, price: 2.5 },
    { id: 2, name: 'Aspirin', quantity: 30, price: 3 },
    { id: 3, name: 'Band-Aid', quantity: 100, price: 1 }
  ]);

  const [newMedicine, setNewMedicine] = useState({
    name: '',
    quantity: '',
    price: ''
  });

  const handleNewMedicineChange = (event) => {
    const { name, value } = event.target;

    setNewMedicine({
      ...newMedicine,
      [name]: value
    });
  };

  const handleAddMedicine = (event) => {
    event.preventDefault();

    if (
      newMedicine.name.trim() === '' ||
      newMedicine.quantity === '' ||
      newMedicine.price === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    const newId =
      inventory.length > 0
        ? Math.max(...inventory.map((medicine) => medicine.id)) + 1
        : 1;

    const medicine = {
      id: newId,
      name: newMedicine.name,
      quantity: Number(newMedicine.quantity),
      price: Number(newMedicine.price)
    };

    setInventory([...inventory, medicine]);

    setNewMedicine({
      name: '',
      quantity: '',
      price: ''
    });
  };

  return (
    <div className="container my-4">
      <h1 className="text-primary text-center mb-4">
        Medical Shop Inventory
      </h1>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {inventory.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.id}</td>
              <td>{medicine.name}</td>
              <td>{medicine.quantity}</td>
              <td>{medicine.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-success text-center mt-4 mb-3">
        Add New Medicine
      </h2>

      <form onSubmit={handleAddMedicine}>
        <div className="row g-2">
          <div className="col-md-4">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={newMedicine.name}
              onChange={handleNewMedicineChange}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              name="quantity"
              className="form-control"
              placeholder="Quantity"
              min="0"
              value={newMedicine.quantity}
              onChange={handleNewMedicineChange}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Price"
              min="0"
              step="0.01"
              value={newMedicine.price}
              onChange={handleNewMedicineChange}
            />
          </div>

          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-success w-100"
            >
              Add Medicine
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MedicalShop;
