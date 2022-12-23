import styled from 'styled-components/macro';
import { smallFont } from '../helpers';

const Label = styled.label`
  ${smallFont};

  display: block;
  margin-bottom: 8px;
  color: ${(props: any) => props.theme.mutedText};
`;

export default Label;
