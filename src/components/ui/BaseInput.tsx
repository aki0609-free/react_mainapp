import React, { VFC } from 'react';
import { InputField } from '../../types/types';
import styled from 'styled-components';

type Props = {
  id: string;
  name: string;
  type: string;
  field: InputField;
}

export const BaseInput: VFC<Props> = (props) => {
const { id, name, type, field } = props;

const clearValidity = () => {
  field.isValid = true;
}

const inputElement = type === 'number' ? (
  <input 
    type={type}
    id={id}
    value={field.value}
    onBlur={clearValidity}
  />
) : type === 'textarea' ? (
  <textarea
    id={id}
    value={field.value}
    onBlur={clearValidity}
    name={name}
  ></textarea>
) : (
  <input
    type={type}
    id={id}
    value={field.value}
    onBlur={clearValidity}
  />
);

  return (
    <FormControl className={`form-control ${{ invalid: !field.isValid }}`}>
      <label htmlFor="id">{ name }</label>
      {inputElement}
      <p v-if={!field.isValid}>{`${name} must not be empty.`}</p>
    </FormControl>
  )
}

const FormControl = styled.div`
  margin: 0.5rem 0;
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    border
    &:focus {
      background-color: #f0e6fd;
      outline: none;
      border-color: #3d008d;
    }
  }
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    &:focus {
      background-color: #f0e6fd;
      outline: none;
      border-color: #3d008d;
    }
  }
`;