import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: 1, title: 'Complete React Assignment', priority: 'High', completed: false, createdAt: Date.now() },
        { id: 2, title: 'Review Bootstrap Documentation', priority: 'Medium', completed: true, createdAt: Date.now() },
        { id: 3, title: 'Debug Lifecycle Methods', priority: 'High', completed: false, createdAt: Date.now() },
        { id: 4, title: 'Setup React Dev Tools', priority: 'Low', completed: false, createdAt: Date.now() },
      ],
      filter: 'All',
      isLoading: true,
      mountTime: null,
      showModal: false,
      newTaskTitle: '',
      newTaskPriority: 'High',
    };

    this.loadingTimer = null;

    // Bind all event handlers
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleTaskToggle = this.handleTaskToggle.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }

  componentDidMount() {
    const mountTime = Date.now();
    this.setState({ mountTime });
    console.log('Component mounted at:', new Date(mountTime).toLocaleTimeString());

    // Simulate an API call: show the spinner for 2 seconds
    this.loadingTimer = setTimeout(() => {
      this.setState({ isLoading: false });
      console.log('Tasks loaded (simulated API call complete)');
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    // Only react to actual filter changes (no setState here -> no infinite loop)
    if (prevState.filter !== this.state.filter) {
      console.log(`Filter changed from "${prevState.filter}" to "${this.state.filter}"`);
    }
    if (prevState.tasks !== this.state.tasks) {
      console.log('Tasks updated:', this.state.tasks.length, 'task(s)');
    }
  }

  componentWillUnmount() {
    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
      this.loadingTimer = null;
    }
    console.log('Component unmounted at:', new Date().toLocaleTimeString());
  }

  handleFilterChange(filterType) {
    this.setState({ filter: filterType });
  }

  handleTaskToggle(taskId) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  }

  handleAddTask(taskData) {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      priority: taskData.priority,
      completed: false,
      createdAt: Date.now(),
    };
    this.setState((prevState) => ({ tasks: [...prevState.tasks, newTask] }));
  }

  handleDeleteTask(taskId) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  }

  openModal() {
    this.setState({ showModal: true, newTaskTitle: '', newTaskPriority: 'High' });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  handleTitleChange(event) {
    this.setState({ newTaskTitle: event.target.value });
  }

  handlePriorityChange(event) {
    this.setState({ newTaskPriority: event.target.value });
  }

  handleModalSubmit(event) {
    if (event) event.preventDefault();
    const title = this.state.newTaskTitle.trim();
    if (!title) return;
    this.handleAddTask({ title, priority: this.state.newTaskPriority });
    this.closeModal();
  }

  getFilteredTasks() {
    const { tasks, filter } = this.state;
    if (filter === 'All') return tasks;
    if (filter === 'Completed') return tasks.filter((task) => task.completed);
    return tasks.filter((task) => task.priority === filter);
  }

  getBadgeClass(priority) {
    if (priority === 'High') return 'bg-primary';
    if (priority === 'Medium') return 'bg-warning';
    return 'bg-secondary';
  }

  renderModal() {
    const { newTaskTitle, newTaskPriority } = this.state;

    return (
      <>
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form onSubmit={this.handleModalSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">New Task</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={this.closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="taskTitle" className="form-label">
                      Task Title
                    </label>
                    <input
                      id="taskTitle"
                      type="text"
                      className="form-control"
                      placeholder="Enter task title..."
                      value={newTaskTitle}
                      onChange={this.handleTitleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="taskPriority" className="form-label">
                      Priority
                    </label>
                    <select
                      id="taskPriority"
                      className="form-select"
                      value={newTaskPriority}
                      onChange={this.handlePriorityChange}
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={this.closeModal}>
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleModalSubmit}
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
      </>
    );
  }

  render() {
    const { filter, isLoading, showModal } = this.state;
    const filters = ['All', 'High', 'Medium', 'Low', 'Completed'];
    const filteredTasks = this.getFilteredTasks();

    return (
      <div className="App">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <span className="navbar-brand fs-3">Task Manager</span>
            {!isLoading && (
              <button className="btn btn-primary btn-lg" onClick={this.openModal}>
                Add New Task
              </button>
            )}
          </div>
        </nav>

        <div className="container mt-4">
          {isLoading ? (
            <div className="d-flex justify-content-center mt-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {/* Filter buttons */}
              <div className="btn-group mb-4" role="group" aria-label="Task filters">
                {filters.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`btn btn-lg ${filter === type ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => this.handleFilterChange(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Task cards */}
              {filteredTasks.length === 0 ? (
                <div className="alert alert-info" role="alert">
                  No tasks found.
                </div>
              ) : (
                <div className="row">
                  {filteredTasks.map((task) => (
                    <div key={task.id} className="col-12 col-md-6 mb-4">
                      <div
                        className={`card shadow-sm ${
                          task.completed ? 'border-success task-completed' : 'border-0'
                        }`}
                      >
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="form-check">
                              <input
                                id={`task-${task.id}`}
                                type="checkbox"
                                className="form-check-input"
                                checked={task.completed}
                                onChange={() => this.handleTaskToggle(task.id)}
                              />
                              <label
                                htmlFor={`task-${task.id}`}
                                className={`form-check-label fs-5 ${
                                  task.completed ? 'text-decoration-line-through text-muted' : ''
                                }`}
                              >
                                {task.title}
                              </label>
                            </div>
                            <span className={`badge ${this.getBadgeClass(task.priority)} fs-6`}>
                              {task.priority}
                            </span>
                          </div>
                          <button
                            className="btn btn-danger mt-2"
                            onClick={() => this.handleDeleteTask(task.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {showModal && this.renderModal()}
      </div>
    );
  }
}

export default App;