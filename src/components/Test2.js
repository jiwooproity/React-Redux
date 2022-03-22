import { Component } from "react";

export class Test2 extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      nickname: this.props.name,
    };
  }

  render() {
    const { nickname } = this.state;

    return <div>{nickname}</div>;
  }
}
