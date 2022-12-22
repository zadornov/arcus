// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { overflow } from '../../shared/helpers';

const PostContentPreview = styled.div`
  ${overflow};

  max-width: 800px;
  padding-bottom: 1px;
  font-size: 13px;
  line-height: 19px;
  color: ${(props: any) => props.theme.mutedText};
`;

export default PostContentPreview;
