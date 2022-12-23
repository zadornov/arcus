import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { transition } from '../shared/helpers';
import ErrorNotificationMessage from './Message';

const className = 'message';

const Wrapper = styled.div`
  ${transition('opacity', 'transform')};

  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 100;
  text-align: center;
  pointer-events: none;

  &.${className}-enter {
    opacity: 0;
    transform: translateY(-25%);
  }

  &.${className}-enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  &.${className}-exit {
    opacity: 1;
  }

  &.${className}-exit-active {
    opacity: 0;
  }
`;

class ErrorNotification extends React.Component {
  render() {
    return (
      <TransitionGroup component={null}>
        {
        // @ts-expect-error TS(2339): Property 'error' does not exist on type 'Readonly<... Remove this comment to see the full error message
        this.props.error && (
          <CSSTransition classNames={className} timeout={300}>
            <Wrapper>
              <ErrorNotificationMessage>
                {
                // @ts-expect-error TS(2339): Property 'error' does not exist on type 'Readonly<... Remove this comment to see the full error message
                this.props.error.message}
              </ErrorNotificationMessage>
            </Wrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

export default ErrorNotification;
