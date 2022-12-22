// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import Button from '../Button';

const SubmitButton = styled(Button)`
  align-self: flex-end;
`;

export default SubmitButton;
