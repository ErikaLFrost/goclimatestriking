import React from 'react';
import styled from 'styled-components/macro';
import Fuzzy from './Fuzzy';

import { useStore } from 'store';

export const Input = props => {
  const { state, actions } = useStore();
  const { formData } = state;
  const { type, name } = props;
  if (!name || !formData || !type) {
    console.warn('Input is missing something', { name, formData, type });
    return null;
  }
  const handleChange = event => {
    actions.setFormData(name, event.target.value);
  };
  const value = formData[name] || '';

  if (type === 'text' || 'email')
    return <input {...props} value={value} onChange={handleChange} />;

  console.warn('Input is missing something');
  return null;
};
const InputGroup = styled.div`
  width: 100%;
  text-align: left;
  label {
    display: block;
    padding: 8px 0 0 0;
    font-size: 16px;
    opacity: ${p => (p.disabled ? '0.5' : '1')};
  }
  input {
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid #e7e7e7;
    font-size: 22px;
    line-height: 1.4;
    padding: 5px 0;
    background: transparent;
    :disabled {
      opacity: 0.5;
    }
  }
`;

export const InputField = ({ ...props }) => {
  const { name, label } = props;
  return (
    <InputGroup>
      <label htmlFor={name}>{label}</label>
      <Input {...props} autoComplete="on" />
    </InputGroup>
  );
};

export const InputFuzzy = props => {
  const { name, label, list, value, disabled } = props;
  return (
    <InputGroup disabled={disabled}>
      <label htmlFor={name}>{label}</label>
      {value || disabled ? (
        <input
          {...props}
          list={[]}
          value={value}
          disabled
          autoCorrect="off"
          spellCheck="false"
          placeholder={disabled ? disabled : ''}
        />
      ) : (
        <Fuzzy list={list} {...props} />
      )}
    </InputGroup>
  );
};

const StyledForm = styled.form`
  margin: 0;
  padding: 0;
  display: block;
  border: none;
`;

export const Form = ({ onSubmit, children, className }) => {
  return (
    <StyledForm onSubmit={onSubmit} className={className}>
      {children}
    </StyledForm>
  );
};
