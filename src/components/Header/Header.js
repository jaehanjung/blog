import React, { Component } from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Row, Columns } from "../../styled-components/grid";

const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index:10;
`;
const Nav = styled.nav`
  width: 70px;
  height: 100vh;
  background-color: #d71b22;
  &:hover{
    background-color: #b4161c;
  }
`

const MenuBtn = styled.button`
  background-color: transparent;
  border : 0;
  transform: rotate(270deg);
  transform-origin: 0 0;
  position: absolute;
  bottom: -20px;
  left: 10px;
  font-size: 30px;
  width: 250px;
  height: 40px;
  color: #fff;
  outline: none;
  cursor: pointer;
  &::before{
    float:left;
    display:block;
    transform: rotate(90deg);
    line-height: 40px;
  };
  &::after{
    content:"";
    display: block;
    clear: both;
  }
`

let windowWidth = null;

// window.addEventListener("resize", (e)=>{
//   windowWidth = (e.target.innerWidth - 70) / 100;
// })

const MenuBtnContent = styled.span`
  font-size: 20px;
  float: left;
  display: block;
  margin-left: 10px;
  line-height: 38px;
`

const Navigation = styled.nav`
  width: calc(100% - 70px);
  position: fixed;
  height: 100vh;
  top:0;
  z-index: 10;
  left: 70px;
  background-color: #000;
  transition: 0.3s;
  ${(props) => { return props.isNavActive ? null : `width: 0px;` }}

  @media only screen and (min-width: 768px){
  }

  @media only screen and (min-width: 992px){
    ${(props) => { return props.isNavActive ? `width:calc(33.3333333% - 20px)` : `width: 0px;` }};
  }

  @media only screen and (min-width: 1200px){
    ${(props) => { return props.isNavActive ? `width:calc(29.1666666667% - 20px)` : `width: 0px;` }};
  }
`

class Header extends React.Component {
  state = {
    search: "",
    isNavActive: false,
    thisComponent: "",
  }
  componentWillMount(){
    console.log(this.props.thisComponent, this.props.history.location.pathname);
  }
  componentDidMount(){
    this.setState({thisComponent: this.props.history.location.pathname})
  }
  handleShowNav = () => {
    this.setState({isNavActive: !this.state.isNavActive})
  }
  handleSearch = () => {
    console.log("props", this.props);
    this.props.history.push(`/SearchPage/`,{value: this.search.value})
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.thisComponent !== this.props.history.location.pathname){
      this.setState({thisComponent : this.props.history.location.pathname, isNavActive: false})
    }
  }
  render() {
    return (
      <Head>
        <Nav>
          <MenuBtn className="icon-menu5" onClick={this.handleShowNav}><MenuBtnContent>NAVIGATION</MenuBtnContent></MenuBtn>
        </Nav>
        <Navigation isNavActive={this.state.isNavActive}></Navigation>
      </Head>
    );
  }
}

export default Header;

