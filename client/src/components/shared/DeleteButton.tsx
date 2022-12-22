import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
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
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Button onClick={props.onClick}>delete</Button>
);

export default DeleteButton;
