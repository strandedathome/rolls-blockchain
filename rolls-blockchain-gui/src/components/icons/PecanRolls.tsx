import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as PecanRollsIcon } from './images/pecanrolls-150.png';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={PecanRollsIcon} viewBox="0 0 150 58" {...props} />;
}
