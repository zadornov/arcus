// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { wideFont } from '../../shared/helpers';

const HeaderUsernameText = styled.span`
  ${wideFont};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props: any) => props.theme.mutedText};
`;

export default HeaderUsernameText;
