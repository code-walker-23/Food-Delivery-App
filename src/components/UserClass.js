// import React from "react";

import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
    };
    console.log("Child constructor called");
  }

  componentDidMount() {
    // component did mount is called after the render method. That's why we make Api calls in this method.
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child render called");
    const { name, image, designation } = this.props;
    const { count } = this.state;
    return (
      <div className="team-member">
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase
        </button>
        <img src={this.props.image} alt="Team Member 4"></img>
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    );
  }
}
export default UserClass;

