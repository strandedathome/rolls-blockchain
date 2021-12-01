import React from 'react';
import { Trans } from '@lingui/macro';
import { get } from 'lodash';
import {
  // FormatBytes,
  FormatLargeNumber,
  Flex,
  Card,
  Loading,
  StateColor,
  Table,
} from '@rolls/core';
import { Status } from '@rolls/icons';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Tooltip, Typography } from '@material-ui/core';
// import HelpIcon from '@material-ui/icons/Help';
import FullNodeConnections from './FullNodeConnections';
import LayoutMain from '../layout/LayoutMain';
import FullNodeCards from './card/FullNodeCards';

export default function FullNode() {
  return (
    <LayoutMain title={<Trans>Full Node</Trans>}>
      <Flex flexDirection="column" gap={2}>
        <FullNodeCards />
        <FullNodeConnections />
      </Flex>
    </LayoutMain>
  );
}
