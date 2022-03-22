import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Connecting extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    nickname: state.name,
  };
};

export default connect(mapStateToProps)(withRouter(Connecting));
