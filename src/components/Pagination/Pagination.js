import React, { Component } from 'react';
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
      <div>
        {current === 1 ? null : <Link to={`/${category}/1`}>처음으로</Link>}
        {current === 1 ? null : <Link to={`/${category}/${current - 1}`}>이전</Link>}
        {pagination.map((item)=>{
          return (
            item === current ? <span key={item} style={{color:"red"}}>{item}</span> : <Link to={`/${category}/${item}`} key={item}>{item}</Link>
          )
        })}
        {current === totalPage ? null : <Link to={`/${category}/${current + 1}`}>다음</Link>}
        {current === totalPage ? null : <Link to={`/${category}/${totalPage}`}>마지막으로</Link>}
      </div>
    );
  }
}

export default Pagination;
