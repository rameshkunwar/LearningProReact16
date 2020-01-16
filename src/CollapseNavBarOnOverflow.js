import React, { Component } from "react";
/* eslint react/prop-types: 0 */

class CollapseNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("client height: " + this.refs.navbarRef.clientHeight);
  }
  render() {
    return (
      <nav className='navbar navbar-expand navbar-dark bg-info'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse justify-content-center'>
            <ul className='navbar-nav align-center' ref='navbarRef'>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Features
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Pricing
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Item 4
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Item 5
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Item 6
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Item 7
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Item 8
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Item 9
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Item 10
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Item 11
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Item 12
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home/index/'>
                  Item 13
                </a>
              </li>
              <li className='nav-item dropdown d-none'>
                <a
                  href='/Home/Index/'
                  className='nav-link dropdown-toggl'
                  id='navbarDropdownMenu'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <span className='navbar-toggler-icon'></span>
                </a>
                <ul
                  className='dropdown-menu dropdown-menu-right bg-info'
                  aria-labelledby='navbarDropdownMenu'
                ></ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default CollapseNavBar;
