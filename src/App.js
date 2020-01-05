import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CheckboxOperation } from "./Checkboxes";
import { Display } from "./Display";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      message: "Ready",
      counter: 0,
      theme: "secondary"
    };
  }

  submitData = newData => {
    this.setState({ formData: newData });
  };

  //   The handleEvent method uses the setState method’s callback feature to update the message
  // property after an update to the counter property has been applied. The value assigned to the message
  // property includes the event object’s type property, which is a problem because that property will be set to
  // null by the time the setState callback function is invoked, which you can see by clicking the button

  handleEvent = event => {
    event.persist();
    this.setState(
      {
        counter: this.state.counter + 1,
        theme: event.target.innerText === "Normal" ? "primary" : "danger"
      },
      () => this.setState({ message: `${event.type} : ${this.state.counter}` })
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row p-2">
          <div className="col-6">
            <CheckboxOperation submit={this.submitData} />
          </div>
          <div className="col-6">
            <Display data={this.state.formData} />
          </div>
        </div>
        <div className="row p-2">
          <div className="m-2">
            {/* <div className="h4 bg-primary text-white text-center p-2"> */}
            <div
              className={`h4 bg-${this.state.theme} text-white text-center p-2`}
            >
              {this.state.message}
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={this.handleEvent}>
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
