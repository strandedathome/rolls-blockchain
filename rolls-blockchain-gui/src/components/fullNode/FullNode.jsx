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
import { unix_to_short_date } from '../../util/utils';
import FullNodeConnections from './FullNodeConnections';
import LayoutMain from '../layout/LayoutMain';
import FullNodeBlockSearch from './FullNodeBlockSearch';
import FullNodeCards from './card/FullNodeCards';

/* global BigInt */

const cols = [
  {
    minWidth: '250px',
    field(row) {
      const { isFinished = false, header_hash, foliage } = row;

      const { foliage_transaction_block_hash } = foliage || {};

      const value = isFinished ? (
        header_hash
      ) : (
        <span>{foliage_transaction_block_hash}</span>
      );

      const color = isFinished ? StateColor.SUCCESS : StateColor.WARNING;

      const tooltip = isFinished ? (
        <Trans>Finished</Trans>
      ) : (
        <Trans>In Progress</Trans>
      );

      return (
        <Flex gap={1} alignItems="center">
          <Tooltip title={<span>{tooltip}</span>}>
            <Status color={color} />
          </Tooltip>
          <Tooltip title={<span>{value}</span>}>
            <Box textOverflow="ellipsis" overflow="hidden">
              {value}
            </Box>
          </Tooltip>
        </Flex>
      );
    },
    title: <Trans>Header Hash</Trans>,
  },
  {
    field(row) {
      const { isFinished, foliage } = row;

      const { height: foliageHeight } = foliage || {};

      const height = get(row, 'reward_chain_block.height');

      if (!isFinished) {
        return (
          <i>
            <FormatLargeNumber value={foliageHeight} />
          </i>
        );
      }

      return <FormatLargeNumber value={height} />;
    },
    title: <Trans>Height</Trans>,
  },
  {
    field(row) {
      const { isFinished } = row;

      const timestamp = get(row, 'foliage_transaction_block.timestamp');
      const value = timestamp;

      return value ? unix_to_short_date(Number.parseInt(value)) : '';
    },
    title: <Trans>Time Created</Trans>,
  },
  {
    field(row) {
      const { isFinished = false } = row;

      return isFinished ? <Trans>Finished</Trans> : <Trans>Unfinished</Trans>;
    },
    title: <Trans>State</Trans>,
  },
];

export default function FullNode() {
  return (
    <LayoutMain title={<Trans>Full Node</Trans>}>
      {/* <Flex gap={2}>
        <Typography variant="h5" gutterBottom>
          <Trans>Full Node Overview</Trans>
        </Typography>
      </Flex> */}
      <Flex flexDirection="column" gap={2}>
        <FullNodeCards />
        <FullNodeConnections />
      </Flex>
    </LayoutMain>
  );
}
