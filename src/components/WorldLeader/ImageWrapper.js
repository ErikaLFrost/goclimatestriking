import React from 'react';
import styled from 'styled-components';

const Images = styled.div`
  position: relative;
  width: 76px;
  min-width: 76px;
  text-align: left;
  img {
    position: relative;
  }
  .portrait {
    width: 60px;
  }
  .flag {
    position: absolute;
    bottom: 0px;
    right: 0px;
    filter: drop-shadow(1.5px 1.5px 1px rgba(0, 0, 0, 0.5));
  }
`;

const ImageWrapper = props => {
  const { image, flag } = props;
  return (
    <Images>
      <img className="portrait" alt="portrait" src={image} />
      <img className="flag" alt="flag" src={flag} />
    </Images>
  );
};

export default ImageWrapper;
