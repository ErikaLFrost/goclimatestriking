import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import Select from 'react-select/async';
import { FixedSizeList as List } from 'react-window';
import debounce from 'debounce-promise';
import Fuse from 'fuse.js';

const Label = styled.label`
  display: block;
  text-align: left;
  padding: 8px 0 0 0;
  font-size: 16px;
  opacity: ${p => (p.disabled ? '0.5' : '1')};
`;

// custom stying
const customStyles = {
  container: provided => ({
    ...provided,
    border: 'none',
    padding: '5px 0',
  }),
  control: provided => ({
    ...provided,
    border: 'none',
    borderBottom: '1px solid #e7e7e7',
    borderRadius: 0,
  }),
  option: provided => ({
    ...provided,
    textAlign: 'left',
  }),
};

const FuzzyReactSelect = ({
  options,
  fuzzyOptions,
  wait = 300,
  label = 'Country',
  ...props
}) => {
  const [fuse, setFuse] = useState(null);

  // use fuse to search
  const searchOptions = inputValue =>
    new Promise(resolve => {
      resolve(fuse.search(inputValue).map(c => ({ ...c.item })));
    });

  // call promiseOptions
  const loadOptions = inputValue => searchOptions(inputValue);

  // debouncer
  const debouncedLoadOptions = debounce(loadOptions, wait);

  useEffect(() => {
    setFuse(new Fuse(options, fuzzyOptions));
    return () => setFuse(null);
  }, [options, fuzzyOptions]);

  useEffect(() => {
    if ((options, fuse)) {
      fuse.setCollection(options);
    }
  }, [fuse, options]);

  return (
    <>
      <Label>{label}</Label>
      <Select
        defaultOptions={options}
        {...props}
        components={{ MenuList }}
        loadOptions={v => debouncedLoadOptions(v)}
        getOptionLabel={v => `${v.label}`}
        styles={customStyles}
      />
    </>
  );
};

export default FuzzyReactSelect;

const arrayIsEmpty = arr => !Array.isArray(arr) || !arr.length;

const MenuList = ({ options, children, getValue }) => {
  const [value] = getValue();
  const initialOffset = Math.max(options.indexOf(value) * 40, 0);
  const maxHeight = Math.min(children.length * 40, 300) || 40;

  // if no options, render react-selects default message
  if (arrayIsEmpty(children)) {
    return <div>{children}</div>;
  }

  return (
    <List
      height={maxHeight}
      itemCount={children.length}
      itemSize={40}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
};
