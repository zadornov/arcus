import React from 'react';
import styled from 'styled-components/macro';
import { css } from 'styled-components';

interface HeadingSizes {
  [heading: string]: number;
}

const headingSizes: HeadingSizes = {
  h1: 1.75,
  h2: 1.5,
  h3: 1.25,
  h4: 1.1,
  h5: 0.9,
  h6: 0.75,
};

const headingStyle = (level: number) => css`
  margin-top: 1em;
  margin-bottom: 0.75em;
  line-height: 1;
  font-size: ${headingSizes[level]}em;
  font-weight: 500;
`;

const Heading = styled.span`
  ${(props: any) => headingStyle(props.as)};

  & + h1,
  & + h2,
  & + h3,
  & + h4,
  & + h5,
  & + h6 {
    margin-top: 0;
  }
`;

const headingRenderer = (props: any) => {
  const levelString = `h${props.level}`;
  // @ts-expect-error TS(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
  return <Heading as={levelString}>{props.children}</Heading>;
};

export default headingRenderer;
