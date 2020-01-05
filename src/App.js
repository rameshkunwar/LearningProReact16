import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CheckboxOperation } from "./Checkboxes";
import { Display } from "./Display";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  submitData = newData => {
    this.setState({ formData: newData });
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
      </div>
    );
  }
}
