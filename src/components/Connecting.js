import { Component } from "react";

export default class Connecting extends Component {
  static mapStateToProps(state) {
    return {
      nickname: state.name,
    };
  }
}
