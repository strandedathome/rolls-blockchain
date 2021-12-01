import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import Rolls_Loading from '../../../../assets/img/pecanroll-spinning-128.gif';

const StyledBackdrop = styled(Backdrop)`
  z-index: 2000;
`;

type Props = {
  show: boolean;
};

export default function Spinner(props: Props) {
  const { show } = props;

  return (
    <StyledBackdrop open={show}>
      <img src={Rolls_Loading} alt="loading..." />
      {/* <CircularProgress color="inherit" /> */}
    </StyledBackdrop>
  );
}
