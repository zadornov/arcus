import React from 'react';
import styled from 'styled-components/macro';
import { link } from './helpers';

const Button = styled.button`
  ${link};

  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 13px;
  color: ${(props: any) => props.theme.normalText};
  margin-left: auto;
`;

const DeleteButton = (props: any) => (
  <Button onClick={props.onClick}>delete</Button>
);

export default DeleteButton;
