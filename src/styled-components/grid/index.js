import React, { Component } from 'react';
import styled from 'styled-components';

export const Row = styled.div`
    width: 100%;
    margin: 0 auto;
    &:after{
        display: block;
        content: "";
        clear: both;
    }
    @media only screen and (min-width: 768px){
        ${(props) => props.content ? `width: 768px` : null}
    }

    @media only screen and (min-width: 992px){
        ${(props) => props.content ? `width: 992px` : null}
    }

    @media only screen and (min-width: 1200px){
        ${(props) => props.content ? `width: 1200px` : null}
    }
`;

function getWidthString(span) {
  if (!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%`;
}

export const Columns = styled.div`
    float: left;
    ${(props) => (props.xs ? getWidthString(props.xs) : `width: 100%`)};
    @media only screen and (min-width: 768px){
        ${(props) => props.sm && getWidthString(props.sm)}
    }

    @media only screen and (min-width: 992px){
        ${(props) => props.md && getWidthString(props.md)}
    }

    @media only screen and (min-width: 1200px){
        ${(props) => props.lg && getWidthString(props.lg)}
    }
`
