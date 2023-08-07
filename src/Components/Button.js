import React from 'react'
import styled from 'styled-components';

const CustomButton = styled.button`
    width: 80px;
    height: 40px;
    background: yellow;
	border: 1px solid black;
	font: inherit;
	cursor: pointer;
	
`

export default function Button(props) {
  return (
    <CustomButton onClick={props.onClick}>
      {props.children}
    </CustomButton>
  )
}
