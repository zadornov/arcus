// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { smallFont } from '../helpers';

const Label = styled.label`
  ${smallFont};

  display: block;
  margin-bottom: 8px;
  color: ${(props: any) => props.theme.mutedText};
`;

export default Label;
