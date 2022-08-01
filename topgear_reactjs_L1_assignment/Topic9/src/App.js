import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
    this.state = {
      message: "",
      delete: false,
    };
  }

  componentDidMount() {
    this.setState({
      message: "When you have a dream, you've got to grab it and never let go",
    });
  }
  componentWillUnmount() {
    alert("Deleted User successfully");
  }
  delete() {
    this.setState({ delete: true });
    
  }

  render() {
    return (
      <>
        <h1>Click any where inside this div to unmount the text</h1>
        <div onClick={this.delete} className="topic9">
          <p> {this.state.delete ? null : this.state.message} </p>
        </div>
      </>
    );
  }
}

export default App;
