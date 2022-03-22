import React, { Component } from "react";
import { connect } from "react-redux";
import Connecting from "./Connecting";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "test",
      number: 22,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const { number } = this.state;
    const { nickname } = this.props;

    return (
      <div>
        <span>{nickname + " " + number}</span>
      </div>
    );
  }
}

export default connect(Connecting.mapStateToProps)(Test);
