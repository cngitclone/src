import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,          // elapsed milliseconds
      isRunning: false,
      laps: [],
    };
    this.timer = null;
  }

  componentDidMount() {
    // Nothing to start on mount; the timer begins on "Start".
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isRunning !== this.state.isRunning) {
      if (this.state.isRunning) {
        this.timer = setInterval(() => {
          this.setState((state) => ({ time: state.time + 10 }));
        }, 10);
      } else {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
  };

  handleStart = () => {
    this.setState({ isRunning: true });
  };

  handleStop = () => {
    this.setState((state) => ({
      isRunning: false,
      laps: [...state.laps, state.time],
    }));
  };

  handleReset = () => {
    this.setState({ time: 0, isRunning: false, laps: [] });
  };

  handleAddLap = () => {
    this.setState((state) => ({ laps: [...state.laps, state.time] }));
  };

  render() {
    const { time, isRunning, laps } = this.state;
    return (
      <div className="stopwatch">
        <h2 className="stopwatch-title">Stopwatch</h2>
        <div className="stopwatch-time">{this.formatTime(time)}</div>
        <div className="stopwatch-controls">
          <button className="btn btn-start" onClick={this.handleStart} disabled={isRunning}>
            Start
          </button>
          <button className="btn btn-stop" onClick={this.handleStop} disabled={!isRunning}>
            Stop
          </button>
          <button className="btn btn-reset" onClick={this.handleReset} disabled={isRunning}>
            Reset
          </button>
          <button className="btn btn-lap" onClick={this.handleAddLap} disabled={!isRunning}>
            Add Lap
          </button>
        </div>
        <ul className="lap-list">
          {laps.map((lap, index) => (
            <li key={index} className="lap-item">
              {this.formatTime(lap)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Stopwatch;