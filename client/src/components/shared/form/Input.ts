// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { transition } from '../helpers';

const Input = styled.input`
  ${transition('border', 'box-shadow')};

  --border: ${(props: any) =>
    props.error ? props.theme.error : props.theme.accent};
  --shadow: ${(props: any) =>
    props.error ? props.theme.error + '4d' : props.theme.accent + '4d'};

  display: block;
  ${(props: any) =>
    props.error
      ? `
    border: 1px solid var(--border)
    `
      : `
    border: 1px solid ${props.theme.border}
  `};
  border-radius: 3px;
  width: 100%;
  padding: 8px;
  background-color: ${(props: any) => props.theme.inputBackground};
  font-size: 15px;
  color: ${(props: any) => props.theme.normalText};
  appearance: none;
  outline: none;
  resize: vertical;

  :hover,
  :focus {
    border: 1px solid var(--border);
  }

  :focus {
    box-shadow: 0 0 0 2px var(--shadow);
  }
`;

export default Input;
