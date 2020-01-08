import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CheckboxOperation } from "./Checkboxes";
import { Display } from "./Display";
import { ThemeButton } from "./ThemeButton";
import Message from "./Message";
import List from "./components/List";
import MyNavbar from "./Navbar";
import ReduxList from "./components/List";
import ReduxForm from "./components/Form";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      formData: {},
      message: "Ready",
      counter: 0,
      theme: "secondary"
    };
  }

  submitData = (newData) => {
    this.setState({ formData: newData });
  };

  //   The handleEvent method uses the setState method’s callback feature to update the message
  // property after an update to the counter property has been applied. The value assigned to the message
  // property includes the event object’s type property, which is a problem because that property will be set to
  // null by the time the setState callback function is invoked, which you can see by clicking the button

  handleEvent = (event, newTheme) => {
    event.persist();
    this.setState(
      {
        counter: 0,
        //counter: this.state.counter + 1,
        // theme: event.target.innerText === "Normal" ? "primary" : "danger"
        theme: newTheme
      },
      () =>
        this.setState({
          message: `${event.type} : ${this.state.counter}`
        })
    );
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  selectTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
      message: `Theme: ${newTheme}`
    });
  };

  render() {
    return (
      <div className='container-fluid'>
        <div className='my-navbar'>
          <MyNavbar />
        </div>
        <div className='row p-2'>
          <div className='col-6' style={{ border: "1px solid red" }}>
            <div>
              <h2>Articles</h2>
              <ReduxList />
            </div>
            <div>
              <h2>Add a new article</h2>
              <ReduxForm />
            </div>
          </div>
        </div>

        <div className='row p-2'>
          <div className='col-6'>
            <CheckboxOperation submit={this.submitData} />
          </div>
          <div className='col-6'>
            <Display data={this.state.formData} />
          </div>
        </div>
        <div className='row p-2'>
          <div className='m-2'>
            {/* <div className="h4 bg-primary text-white text-center p-2"> */}
            <div
              className={`h4 bg-${this.state.theme} text-white text-center p-2`}
            >
              {this.state.message}
            </div>
            <div className='text-center'>
              <button
                className='btn btn-primary'
                onClick={(e) => this.handleEvent(e, "primary")}
              >
                Click me
              </button>
              <button
                className='btn btn-danger m-1'
                onClick={(e) => this.handleEvent(e, "danger")}
              >
                Danger
              </button>
            </div>
          </div>
        </div>
        <div className='row p-2'>
          <div className='m-2' style={{ border: "1px solid blue" }}>
            <div
              className={`h4 bg-${this.state.theme} text-white text-center p-2 m-2`}
            >
              {this.state.message}
            </div>
            <div className='text-center m-2'>
              <ThemeButton theme='primary' callback={this.selectTheme} />
              <ThemeButton theme='danger' callback={this.selectTheme} />
            </div>
          </div>
        </div>
        <div className='row p-2'>
          <div className='col-6' style={{ border: "1px solid blue" }}>
            <Message
              message={`Counter: ${this.state.counter}`}
              callback={this.incrementCounter}
              text='Increment Counter'
            />
          </div>
          <div className='col-6' style={{ border: "1px solid green" }}>
            <List />
          </div>
        </div>
      </div>
    );
  }
}
