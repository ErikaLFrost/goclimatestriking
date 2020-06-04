import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import styled from 'styled-components/macro';

let timerId;

const ResultWrapper = styled.div`
  padding-bottom: 40px;
`;

const ResultRow = styled.div`
  padding: 7px 10px;
  background-color: ${p => (p.active ? '#46c0b8' : '')};
  border-bottom: 1px solid lightgray;
`;

// todo: clean this up.
function defaultResultsTemplate(
  props,
  results,
  clickHandler,
  key,
  resultIndex,
  county
) {
  return results.map((val, i) => {
    const active = resultIndex === i;
    return (
      <ResultRow active={active} key={i} onClick={() => clickHandler(i)}>
        {county ? `${val.item[key]}, ${val.item['county']}` : val.item[key]}
      </ResultRow>
    );
  });
}

function debounced(fn, delay = 200) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    fn();
    timerId = null;
  }, delay);
}

// Read about the options here https://fusejs.io/
const defaultOptions = {
  caseSensitive: false,
  distance: 100,
  include: [],
  location: 0,
  width: 430,
  placeholder: 'Search',
  includeScore: true,
  shouldSort: true,
  sortFn(a, b) {
    return a.score - b.score;
  },
  threshold: 0.6,
  tokenize: false,
  verbose: false,
  autoFocus: false,
};

const Fuzzy = props => {
  const [fuse, setFuse] = useState(null);
  const [results, setResults] = useState([]);
  const [resultIndex, setResultIndex] = useState(0);
  const [value, setValue] = useState('');
  const [picked, setPicked] = useState('');
  const [options] = useState({
    ...defaultOptions,
    ...(props.options || {}),
  });

  const valueKey = options.valueKey || options.keys[0];

  const resultsTemplate = props.resultsTemplate || defaultResultsTemplate;

  useEffect(() => {
    setFuse(new Fuse(props.list, options));
    return () => setFuse(null);
  }, [options, props.list]);

  useEffect(() => {
    if ((props.list, fuse)) {
      fuse.setCollection(props.list);
    }
  }, [props.list, fuse]);

  useEffect(() => {
    setResults([]);
    setResultIndex(0);
  }, [picked]);

  useEffect(() => {
    if (value.length < 1 || picked) return;
    debounced(() => {
      const search = fuse.search(value);
      if (options.maxResults) {
        search.length = options.maxResults;
      }
      setResults(search);
    }, 300);
  }, [fuse, options.maxResults, picked, value]);

  const handleChange = e => {
    setPicked(null);
    setValue(e.target.value);
  };

  const handleKeyDown = e => {
    // Handle DOWN arrow
    if (e.keyCode === 40 && resultIndex < results.length - 1) {
      setResultIndex(resultIndex + 1);

      // Handle UP arrow
    } else if (e.keyCode === 38 && resultIndex > 0) {
      setResultIndex(resultIndex - 1);

      // Handle ENTER
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (results[resultIndex]) {
        props.onSelect(results[resultIndex]);
        setPicked(results[resultIndex]);
      }
      if (typeof valueKey === 'string') {
        setValue(results[resultIndex].item[valueKey]);
      }
    }
  };

  const handleMouseClick = clickedIndex => {
    if (results[clickedIndex]) {
      props.onSelect(results[clickedIndex]);
      setPicked(results[clickedIndex]);
    }
    if (typeof valueKey === 'string') {
      setValue(results[clickedIndex].item[valueKey]);
    }
  };

  const { autoFocus, name, placeholder, width, county } = props;
  return (
    <div onKeyDown={handleKeyDown} onKeyPress={handleKeyDown}>
      <div>
        <input
          autoFocus={autoFocus}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
          width={width}
          name={name || 'fuzzy'}
          type="text"
          value={value}
        />
      </div>
      {results && results.length > 0 && (
        <ResultWrapper>
          {resultsTemplate(
            props,
            results,
            handleMouseClick,
            valueKey,
            resultIndex,
            county
          )}
        </ResultWrapper>
      )}
    </div>
  );
};

export default Fuzzy;
