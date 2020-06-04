import React from 'react';
import styled from 'styled-components/macro';
import { useStore } from 'store';

const WithStateUpdate = props => {
  const { state, actions } = useStore();
  const { formData } = state;
  const { name } = props;

  const value = formData[name] || false;

  if (!name || !formData) {
    return null;
  }

  const handleChange = event => {
    actions.setFormData(name, event.target.checked);
  };

  return <input {...props} checked={value} onChange={handleChange} />;
};

const Label = styled.label`
  padding: 15px 0 15px;
  display: inline-flex;
  align-items: center;
  flex-direction: 'row';
  height: auto;
  width: 100%;
  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const StyledCheckbox = styled.span`
  display: grid;
  position: relative;
  height: 20px;
  width: 20px;
  transition: all 0.2s ease-in-out;

  &:before {
    z-index: 0;
    content: '';
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 2px;
    border: solid 1px black;
    background-color: ${p => (p.checked ? 'black' : 'transparent')};
    transition: all 0.2s ease-in-out;
  }
`;

const Input = styled(WithStateUpdate)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:focus + ${StyledCheckbox}:before {
    width: 20px;
    height: 20px;
    opacity: 1;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.35);
  }
`;

const Content = styled.div`
  margin-left: 20px;
`;

const CheckboxIndicator = styled.span`
  display: ${p => (p.checked ? 'inline-block' : 'none')};
  position: absolute;
  top: 4px;
  left: 8px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  z-index: 0;
  transform: rotate(45deg);
`;

const Checkbox = ({ children, name }) => {
  const { state } = useStore();
  const checkedd = state.formData[name] || false;

  return (
    <Label htmlFor={name}>
      <Input id={name} name={name} type="checkbox" />
      <StyledCheckbox checked={checkedd}>
        <CheckboxIndicator checked={checkedd} />
      </StyledCheckbox>
      <Content>{children}</Content>
    </Label>
  );
};

export default Checkbox;
