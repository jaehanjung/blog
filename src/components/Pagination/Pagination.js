import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PageItem = styled(Link)`
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
  background-color: #EFEFEF;
  border-radius: 50%;
  margin: 0 5px;
  &.active{
    color: white;
    background-color: #d71b22;
  }
`

const PagiNation = styled.div`
  text-align:center;
  padding: 40px 0;
  position: relative;
  &::after{
    content:"";
    display:block;
    clear:both;
  }
`

const NextBtn = styled(Link)`
  margin-left: 50px;
  position: absolute;
  right: 50px;
`
const PreBtn = styled(Link)`
  margin-right: 50px;
  position: absolute;
  left: 50px;
`

const SpanMargin = styled.span`
  margin: 0 10px;
`

class Pagination extends React.Component {
  render() {
    let { category, current, totalPage } = this.props;
    current = Number(current);
    totalPage = Number(totalPage);
    let pagination = [];
    let maxPageNumber = 5;
    if(totalPage < 5){
      maxPageNumber = totalPage;
    }
    for (let i = 0; i < maxPageNumber; i++) {
      if (current === 1) {
        pagination.push(current + i);
      } else if (current === 2) {
        if (i === 0) {
          pagination.push(current - 1);
        } else {
          pagination.push(current + (i-1));
        }
      } else if (current === totalPage - 1) {
        if (i === 4) {
          pagination.push(current + 1);
        } else {
          pagination.push(current - i);
        }
      } else if (current === totalPage) {
        pagination.push(current - i);
      } else {
        if (i < 2) {
          pagination.push(current - (i+1));
        } else if (i > 2) {
          pagination.push(current + (5-i));
        } else {
          pagination.push(current);
        }
      }
    }
    pagination.sort(function (a, b) {
      return a - b;
    });
    return (
      <PagiNation>
        {current === 1 ? null : <PreBtn to={`/${category}/${current - 1}`}>{`< previous`}</PreBtn>}
        {current-2 <= 1 || totalPage < 6  ? null : <span><PageItem to={`/${category}/1`}>1</PageItem><SpanMargin>...</SpanMargin></span>}
        {pagination.map((item)=>{
          return (
            item === current ? <PageItem to={`/${category}/${item}`} key={item} className="active" >{item}</PageItem> : <PageItem to={`/${category}/${item}`} key={item}>{item}</PageItem>
          )
        })}
        {current + 2  >= totalPage || totalPage < 6 ? null : <span><SpanMargin>...</SpanMargin><PageItem to={`/${category}/${totalPage}`}>{totalPage}</PageItem></span>}
        {current === totalPage ? null : <NextBtn to={`/${category}/${current + 1}`}>{`next >`}</NextBtn>}
      </PagiNation>
    );
  }
}

export default Pagination;
