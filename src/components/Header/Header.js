import React, { Component } from 'react';
import Link from 'gatsby-link'

class Header extends React.Component {
  componentDidMount() {
    let slidebar = document.querySelector(".menu");
    slidebar.addEventListener("click", function () {
      document.querySelector(".menu-slide").classList.add("active")
    });

    let close_btn = document.querySelector(".closebtn");
    close_btn.addEventListener("click", function () {
      // document.querySelector(".menu-slide").style.marginLeft = 100 + "px"
      document.querySelector(".menu-slide").classList.remove("active")
    })
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
          <div className="menu">
            <ul className="menu-bar">
              <li>
                <a href="#">
                  <img src="./img/noun_100552_cc.png" alt="" />
                  <a href="#">Menu</a>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="menu-slide">
          <ul className="menu-slide-bar clearfix">
            <li><a href="#" className="closebtn">&times;</a></li>
            <li><Link to="/html-css/1">HTML/CSS</Link></li>
            <li><Link to="/javascript/1">JavaScript</Link></li>
            {/* <li><Link to="#">React</Link></li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;

