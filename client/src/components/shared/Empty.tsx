import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { smallFont } from '../shared/helpers';

const Wrapper = styled.div`
  ${smallFont};

  ${(props: any) => props.comments && 'margin-top: 16px'};
  border: 1px solid ${(props: any) => props.theme.border};
  border-radius: 2px;
  padding: 48px 0;
  background-color: ${(props: any) => props.theme.foreground};
  text-align: center;
  color: ${(props: any) => props.theme.mutedText};

  @media (max-width: 768px) {
    ${(props: any) => !props.comments && 'margin-top: -1px'};
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

const Empty = ({ comments }: any) => {
  const message = comments ? 'no comments' : "there's nothing here...";
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Wrapper comments={comments}>{message}</Wrapper>;
};

export default Empty;
