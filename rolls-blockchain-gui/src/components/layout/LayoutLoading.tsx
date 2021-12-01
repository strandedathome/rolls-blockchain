import React, { ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import { Loading } from '@rolls/core';
import Rolls_Loading from '../../assets/img/pecanroll-spinning-128.gif';
import LayoutHero from './LayoutHero';

type Props = {
  children?: ReactNode;
};

export default function LayoutLoading(props: Props) {
  const { children } = props;

  return (
    <LayoutHero>
      <Typography variant="h6">{children}</Typography>
      <img src={Rolls_Loading} alt="loading..." />
    </LayoutHero>
  );
}

LayoutLoading.defaultProps = {
  children: undefined,
};
