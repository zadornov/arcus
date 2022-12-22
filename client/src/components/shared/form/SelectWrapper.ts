// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';

const SelectWrapper = styled.div`
  position: relative;
  ${(props: any) => props.flex && 'flex: 1'};

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-150%, calc(-50% - 2px)) rotate(45deg);
    border-bottom: 2px solid ${(props: any) => props.theme.accent};
    border-right: 2px solid ${(props: any) => props.theme.accent};
    width: 8px;
    height: 8px;
    pointer-events: none;
  }
`;

export default SelectWrapper;
