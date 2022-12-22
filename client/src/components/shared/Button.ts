// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { transition, wideFont } from './helpers';

const Button = styled.button`
  ${transition('filter', 'box-shadow')};
  ${wideFont};

  border: none;
  border-radius: 3px;
  padding: 8px 24px;
  background-color: ${(props: any) => props.theme.accent};
  cursor: pointer;
  color: #ffffff;
  outline: none;

  :hover {
    filter: brightness(110%);
  }

  :active {
    filter: brightness(90%);
  }

  :focus {
    box-shadow: 0 0 0 2px ${(props: any) => props.theme.accent + '4d'};
  }
`;

export default Button;
