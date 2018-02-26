import React, { Component } from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Row, Columns } from "../../styled-components/grid";

const Head = styled.header`
  position: fixed;
  background-color: #d71b22;
  top: 0;
  left: 0;
  &:hover{
    background-color: #b4161c;
  }
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

const MenuBtnContent = styled.span`
  font-size: 20px;
  float: left;
  display: block;
  margin-left: 10px;
  line-height: 38px;
`

class Header extends React.Component {
  state = {
    search: ""
  }
  componentDidMount(){
    // const edges = get(this.prop.data, "data");
  }
  componentDidUpdate(){
    console.log(this.props)
  }
  handleSearch = () => {
    console.log("props", this.props);
    this.props.history.push(`/SearchPage/`,{value: this.search.value})
  }
  render() {
    return (
      <Head>
        <Nav>
          <MenuBtn className="icon-menu5"><MenuBtnContent>NAVIGATION</MenuBtnContent></MenuBtn>
        </Nav>
      </Head>
    );
  }
}

export default Header;

