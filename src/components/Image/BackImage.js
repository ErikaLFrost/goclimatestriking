import React from 'react';
import styled from 'styled-components/macro';
import SunImg from 'assets/images/ic_sun.svg';
import FlowerImg from 'assets/images/ic_flower.svg';
import RainImg from 'assets/images/ic_snowrain.svg';
import LeafImg from 'assets/images/ic_leaf.svg';
import DropImg from 'assets/images/ic_drop.svg';
import DropsImg from 'assets/images/ic_2drops.svg';
import PolygonImg from 'assets/images/ic_polygon.svg';
import HalfDropImg from 'assets/images/ic_drop_half.svg';
import BlueCloudImg from 'assets/images/ic_cloud_blue.svg';
import HalfLeafImg from 'assets/images/ic_leaf_half.svg';
import BottomImg from 'assets/images/bg-bottom.svg';

import ArrowImg from 'assets/images/arrow-back.svg';
import CloseCrossImg from 'assets/images/ic_close-cross.svg';

export const BackImg = styled.img`
  position: absolute;
  z-index: 1;
`;

export const StyledImage = styled(BackImg)``;

export const Sun = props => <StyledImage {...props} alt="Sun" src={SunImg} />;

export const Rain = props => (
  <StyledImage {...props} alt="Rain" src={RainImg} />
);

export const Flower = props => (
  <StyledImage {...props} alt="Flower" src={FlowerImg} />
);

export const Leaf = props => (
  <StyledImage {...props} alt="Leaf" src={LeafImg} />
);

export const Drop = props => (
  <StyledImage {...props} alt="Drop" src={DropImg} />
);

export const Drops = props => (
  <StyledImage {...props} alt="Drops" src={DropsImg} />
);

export const Polygon = props => (
  <StyledImage {...props} alt="Polygon" src={PolygonImg} />
);

export const HalfDrop = props => (
  <StyledImage {...props} alt="Half drop" src={HalfDropImg} />
);

export const BlueCloud = props => (
  <StyledImage {...props} alt="Blue cloud" src={BlueCloudImg} />
);

export const HalfLeaf = props => (
  <StyledImage {...props} alt="HalfLeaf" src={HalfLeafImg} />
);

export const ArrowBack = props => (
  <StyledImage {...props} alt="arrow" src={ArrowImg} />
);

export const CloseCross = props => (
  <StyledImage {...props} alt="close" src={CloseCrossImg} />
);

export const BottomHill = props => (
  <StyledImage {...props} alt="BottomHill" src={BottomImg} />
);

export const DefaultSun = styled(Sun)`
  left: 50%;
  transform: translateX(-100%);
  top: 60px;
`;
