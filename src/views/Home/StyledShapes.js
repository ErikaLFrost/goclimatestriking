import styled from 'styled-components';
import { breakpoint } from 'shared/theme';

import { Rain, Drop, Leaf, BottomHill } from 'components/Image/BackImage';

export const StyledRain = styled(Rain)`
  opacity: 0.8;
  right: 0;
  top: 200px;
  transform: translateX(70%);

  @media (min-width: ${breakpoint}) {
    transform: translateX(-15%);
  }
`;

export const StyledDrop = styled(Drop)`
  top: 193px;
  left: 0;
  transform: translateX(-80%);

  @media (min-width: ${breakpoint}) {
    transform: translateX(-50%);
  }
`;

export const StyledLeaf = styled(Leaf)`
  bottom: 80px;
  left: calc(100% - 80px);
  transform: rotate(-15deg);
  z-index: 1;

  @media (min-width: ${breakpoint}) {
    height: 330px;
    bottom: -30px;
    left: calc(100% - 150px);
  }
`;
export const StyledBottomHill = styled(BottomHill)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 100%;
  max-width: 414px;
`;
