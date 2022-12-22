// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { fade, smallFont } from '../helpers';

const Error = styled.span`
  ${fade};
  ${smallFont};

  position: absolute;
  right: 0;
  top: 0;
  color: ${(props: any) => props.theme.error};
`;

export default Error;
