import React from 'react';
import { Trans } from '@lingui/macro';
import { get } from 'lodash';
import {
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
import { unix_to_short_date } from '../../util/utils';
import LayoutMain from '../layout/LayoutMain';
import FullNodeBlockSearch from '../fullNode/FullNodeBlockSearch';

/* global BigInt */

const cols = [
  {
    minWidth: '250px',
    field(row: { isFinished?: false | undefined; header_hash: any; foliage: any; }) {
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
    title: <Trans>HASH</Trans>,
  },
  {
    field(row: { isFinished: any; foliage: any; }) {
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
    title: <Trans>HEIGHT</Trans>,
  },
  {
    field(row: { isFinished: any; }) {
      const { isFinished } = row;

      const timestamp = get(row, 'foliage_transaction_block.timestamp');
      const value = timestamp;

      return value ? unix_to_short_date(Number.parseInt(value)) : '';
    },
    title: <Trans>CREATED</Trans>,
  },
  {
    field(row: { isFinished?: false | undefined; }) {
      const { isFinished = false } = row;

      return isFinished ? <Trans>Finished</Trans> : <Trans>Unfinished</Trans>;
    },
    title: <Trans>STATE</Trans>,
  },
];

const BlocksCard = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const latestBlocks = useSelector(
    (state) => state.full_node_state.latest_blocks ?? [],
  );
  const unfinishedBlockHeaders = useSelector(
    (state) => state.full_node_state.unfinished_block_headers ?? [],
  );

  const rows = [
    ...unfinishedBlockHeaders,
    ...latestBlocks.map((row: any) => ({
      ...row,
      isFinished: true,
    })),
  ];

  function handleRowClick(event: any, row: { isFinished: any; header_hash: any; }) {
    const { isFinished, header_hash } = row;

    if (isFinished && header_hash) {
      history.push(`${url}/block/${header_hash}`);
    }
  }

  return (
    <Card title={<Trans>Blocks</Trans>} action={<FullNodeBlockSearch />}>
      {rows.length ? (
        <Table cols={cols} rows={rows} onRowClick={handleRowClick} />
      ) : (
        <Loading center />
      )}
    </Card>
  );
};

export default function FullNode() {
  return (
    <LayoutMain title={<Trans>Blocks</Trans>}>
      <Flex flexDirection="column" gap={2}>
        <BlocksCard />
      </Flex>
    </LayoutMain>
  );
}
