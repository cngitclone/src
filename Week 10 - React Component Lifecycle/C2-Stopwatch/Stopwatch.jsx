import React, { Component } from 'react';

export const formatTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const centiseconds = Math.floor((milliseconds % 1000) / 10);

  const pad = (num) => String(num).padStart(2, '0');

  return `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
};

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
      laps: [],
    };
    this.timer = null;
  }

  componentDidMount() {
    if (this.state.isRunning) {
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isRunning !== this.state.isRunning) {
      if (this.state.isRunning) {
        this.startTimer();
      } else {
        this.clearTimer();
      }
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer = () => {
    this.clearTimer();
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 10 }));
    }, 10);
  };

  clearTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  handleStart = () => {
    this.setState({ isRunning: true });
  };

  handleStop = () => {
    this.setState((prevState) => ({
      isRunning: false,
      laps: [...prevState.laps, prevState.time],
    }));
  };

  handleReset = () => {
    this.clearTimer();
    this.setState({ time: 0, isRunning: false, laps: [] });
  };

  handleAddLap = () => {
    this.setState((prevState) => ({
      laps: [...prevState.laps, prevState.time],
    }));
  };

  render() {
    const { time, isRunning, laps } = this.state;

    return (
      <div className="stopwatch">
        <h2 className="stopwatch-title">Stopwatch</h2>
        <div className="stopwatch-time">{formatTime(time)}</div>

        <div className="stopwatch-buttons">
          <button
            className="btn btn-start"
            onClick={this.handleStart}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className="btn btn-stop"
            onClick={this.handleStop}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            className="btn btn-reset"
            onClick={this.handleReset}
            disabled={isRunning}
          >
            Reset
          </button>
          <button
            className="btn btn-lap"
            onClick={this.handleAddLap}
            disabled={!isRunning}
          >
            Add Lap
          </button>
        </div>

        {laps.length > 0 && (
          <ul className="lap-list">
            {laps.map((lap, index) => (
              <li key={index} className="lap-item">
                {formatTime(lap)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Stopwatch;