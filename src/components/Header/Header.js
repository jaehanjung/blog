import React, { Component } from 'react';
import Link from 'gatsby-link'

class Header extends React.Component {
  state = {
    isActive : false
  }
  navClass = null

  handleMenu = ()=>{
    this.setState({isActive: !this.state.isActive});
  }
  handleClose = ()=> {
    this.setState({isActive: false});
  }
  render() {
    let HeaderName = null;
    if (this.props.isRoot) {
      HeaderName = "header content notRoot";
    } else {
      HeaderName = "header content";
    }
    return (
      <div>
        <header className={HeaderName}>
          <a className="logo-alink" href="/">
            <h1 className="logo">han.log</h1>
          </a>
          <div className="menu" onClick={this.handleMenu}>
            <ul className="menu-bar">
              <li>
                <a href="#">
                  {/* <img src="./img/noun_100552_cc.png" alt="" /> */}
                  <span>Menu</span>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className={`menu-slide ${this.state.isActive === true ? "active" : null}`}>
          <ul className="menu-slide-bar clearfix">
            <li><Link className="closebtn" onClick={this.handleClose}>&times;</Link></li>
            <li><Link to="/html-css/1">HTML/CSS</Link></li>
            <li><Link to="/javascript/1">JavaScript</Link></li>
            <li><Link to="/TIL/1">TIL</Link></li>
            <li><Link to="/portfolio/1">PortFolio</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;

