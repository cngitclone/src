import React, { useState } from 'react';

function Bookstore() {
  const [inventory, setInventory] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', stock: 12, price: 10.5 },
    { id: 2, title: '1984', author: 'George Orwell', stock: 8, price: 9.0 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', stock: 15, price: 12.0 }
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    stock: '',
    price: ''
  });

  const handleNewBookChange = (event) => {
    const { name, value } = event.target;

    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  const handleAddBook = (event) => {
    event.preventDefault();

    if (
      newBook.title.trim() === '' ||
      newBook.author.trim() === '' ||
      newBook.stock === '' ||
      newBook.price === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    const newId = Math.max(...inventory.map(book => book.id)) + 1;

    const book = {
      id: newId,
      title: newBook.title,
      author: newBook.author,
      stock: Number(newBook.stock),
      price: Number(newBook.price)
    };

    setInventory([...inventory, book]);

    setNewBook({
      title: '',
      author: '',
      stock: '',
      price: ''
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-primary text-center fw-bold">
        Bookstore Inventory
      </h1>

      <p className="text-muted text-center">
        Manage your book collection with ease
      </p>

      <h2 className="text-success mt-4 mb-3">
        Available Books
      </h2>

      <div className="row">
        {inventory.map((book) => (
          <div className="col-md-4 mb-3" key={book.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">
                  {book.title}
                </h5>

                <p className="card-text mb-1">
                  by {book.author}
                </p>

                <p className="card-text mb-1">
                  <strong>Stock:</strong> {book.stock}
                </p>

                <p className="card-text mb-0">
                  <strong>Price:</strong> ${book.price.toFixed(2)}
                </p>
              </div>

              <div className="card-footer text-center">
                <span className="badge bg-info">
                  ID: {book.id}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-success mt-4 mb-3">
        Add a New Book
      </h2>

      <div className="card shadow-sm p-2">
        <form onSubmit={handleAddBook}>
          <div className="row g-2">
            <div className="col-md-3">
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Book Title"
                value={newBook.title}
                onChange={handleNewBookChange}
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                name="author"
                className="form-control"
                placeholder="Author"
                value={newBook.author}
                onChange={handleNewBookChange}
              />
            </div>

            <div className="col-md-2">
              <input
                type="number"
                name="stock"
                className="form-control"
                placeholder="Stock"
                min="0"
                value={newBook.stock}
                onChange={handleNewBookChange}
              />
            </div>

            <div className="col-md-2">
              <input
                type="number"
                name="price"
                className="form-control"
                placeholder="Price ($)"
                min="0"
                step="0.01"
                value={newBook.price}
                onChange={handleNewBookChange}
              />
            </div>

            <div className="col-md-2">
              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Add Book
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Bookstore;
