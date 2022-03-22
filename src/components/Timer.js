import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      breaking: false,
    };
  }

  componentDidUpdate() {
    if (this.state.time === 10) {
      return;
    }

    this.startTime();
  }

  startTime() {
    if (this.state.breaking || this.state.time > 0) {
      if (this.state.time < 10) {
        setTimeout(() => {
          this.setState({
            time: this.state.time + 1,
          });
        }, 1000);
      } else {
        console.log("한번만 실행이 가능합니다.");
        return;
      }
    } else {
      setTimeout(() => {
        this.setState({
          time: this.state.time + 1,
        });
      }, 1000);
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.startTime()}>Start</button>
        <span>{this.state.time}</span>
      </div>
    );
  }
}

export default Timer;
