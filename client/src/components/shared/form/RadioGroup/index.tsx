import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import RadioGroupOption from './Option';

const RadioGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  input[type='radio'] {
    display: none;
  }
`;

function handleClick(e: any, value: any, fn: any) {
  e.preventDefault();
  fn(value);
}

const renderOptions = (field: any) => {
  return field.options.map((option: any, key: any) => (
    <RadioGroupOption
      {...option}
      active={field.input.value === option.value}
      onClick={(e: any) => handleClick(e, option.value, field.input.onChange)}
      key={key}
    />
  ));
};

const RadioGroup = ({ field }: any) => (
  <RadioGroupWrapper>{renderOptions(field)}</RadioGroupWrapper>
);

export default RadioGroup;
