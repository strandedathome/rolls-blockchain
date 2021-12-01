import React, { ReactNode } from 'react';
// import { Typography } from '@material-ui/core';
import { Flex } from '@rolls/core';
import { createTeleporter } from 'react-teleporter';
import { Typography } from '@mui/material';

const DashboardTitleTeleporter = createTeleporter();

export function DashboardTitleTarget() {
  return (
    <Typography align="center" component="h1" variant="h4" noWrap>
      <DashboardTitleTeleporter.Target />
    </Typography>
  );
}

type Props = {
  children?: ReactNode;
};

export default function DashboardTitle(props: Props) {
  const { children } = props;

  return (
    <DashboardTitleTeleporter.Source>
      <Flex alignItems="center">{children}</Flex>
    </DashboardTitleTeleporter.Source>
  );
}

DashboardTitle.defaultProps = {
  children: undefined,
};
