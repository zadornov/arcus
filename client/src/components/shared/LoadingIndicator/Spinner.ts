// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const LoadingIndicatorSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${spin} 1s infinite linear;
  border: 0.3rem solid ${(props: any) => props.theme.accent + '4d'};
  border-top-color: ${(props: any) => props.theme.accent};
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

export default LoadingIndicatorSpinner;
