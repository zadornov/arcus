import React from 'react';
import InputWrapper from './InputWrapper';
import Label from './Label';
import Error from './Error';
import SelectWrapper from './SelectWrapper';
import Input from './Input';
// @ts-expect-error TS(6142): Module './RadioGroup' was resolved to '/home/zador... Remove this comment to see the full error message
import RadioGroup from './RadioGroup';

const VariableField = (field: any) => {
  switch (field.type) {
    case 'select':
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InputWrapper>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Label>{field.label}</Label>
          {field.meta.touched && field.meta.error && (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Error>{field.meta.error}</Error>
          )}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <SelectWrapper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Input {...field.input} as='select' type='select'>
              {field.children}
            </Input>
          </SelectWrapper>
        </InputWrapper>
      );

    case 'radiogroup':
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InputWrapper>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <RadioGroup field={field} />
        </InputWrapper>
      );

    case 'textarea':
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InputWrapper>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Label>{field.label}</Label>
          {field.meta.touched && field.meta.error && (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Error>{field.meta.error}</Error>
          )}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Input
            {...field.input}
            as='textarea'
            rows='6'
            error={field.meta.touched && !!field.meta.error}
            placeholder={field.label}
          />
        </InputWrapper>
      );

    default:
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InputWrapper>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Label>{field.label}</Label>
          {field.meta.touched && field.meta.error && (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Error>{field.meta.error}</Error>
          )}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Input
            {...field.input}
            error={field.meta.touched && !!field.meta.error}
            type={field.type}
            placeholder={field.label}
            autoComplete='off'
          />
        </InputWrapper>
      );
  }
};

const renderField = (field: any) => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <VariableField {...field} />;
};

export default renderField;
