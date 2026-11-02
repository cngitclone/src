import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const employees = [
      'John Doe',
      'Jane Smith',
      'Mike Johnson',
      'Emily Davis',
      'James Brown',
      'Jennifer Wilson',
      'Paul Garcia',
      'Laura Martinez',
    ];
    this.state = {
      query: '',
      employees: employees,
      filteredEmployees: employees,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.filterEmployees();
    }
  }

  handleSearch = (event) => {
    this.setState({ query: event.target.value });
  };

  filterEmployees = () => {
    const query = this.state.query.trim().toLowerCase();
    const filteredEmployees = this.state.employees.filter((employee) =>
      employee.toLowerCase().includes(query)
    );
    this.setState({ filteredEmployees });
  };

  render() {
    const { query, filteredEmployees } = this.state;

    return (
      <div className="App">
        <h1>Employee Directory</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search employees..."
          value={query}
          onChange={this.handleSearch}
        />
        <ul className="employee-list">
          {filteredEmployees.map((employee, index) => (
            <li key={index} className="employee-item">
              {employee}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;