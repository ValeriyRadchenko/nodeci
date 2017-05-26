import * as React from 'react';
import { FormControl } from 'react-bootstrap';
import { WrappedFieldProps } from 'redux-form';


export const Input = ({ input, meta: { touched, error }, ...restAttrs }: WrappedFieldProps<object>) => (
  <div className='input-wrapper'>
    <FormControl {...input} {...restAttrs}/>
    {touched && error && <span className='input-error'>{error}</span>}
  </div>
);
