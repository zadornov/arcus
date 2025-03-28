import React from 'react';
import styled from 'styled-components/macro';
import { transition } from '../../helpers';
import FormWrapper from './Wrapper';
import LoadingIndicatorSpinner from '../../LoadingIndicator/Spinner';

const StyledForm = styled.form`
  ${transition('filter')};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${(props: any) =>
    props.loading &&
    'filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none'};
`;

const Form = ({ className, wide, ...props }: any) => (
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  <FormWrapper className={className} wide={wide}>
    <StyledForm {...props} />
    {props.loading && <LoadingIndicatorSpinner />}
  </FormWrapper>
);

export default Form;
