import Big from 'big.js';

const PECAN_PER_ROLL = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height === 0) {
    return PECAN_PER_ROLL.times(1000000).times(0);
  }
  if (height < 1 * BLOCKS_PER_YEAR) {
    return PECAN_PER_ROLL.times(6).times(0);
  }
  if (height < 2 * BLOCKS_PER_YEAR) {
    return PECAN_PER_ROLL.times(3).times(0);
  }

  return PECAN_PER_ROLL.times(1).times(0);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height === 0) {
    return PECAN_PER_ROLL.times(1000000);
  }
  if (height < 1 * BLOCKS_PER_YEAR) {
    return PECAN_PER_ROLL.times(6);
  }
  if (height < 2 * BLOCKS_PER_YEAR) {
    return PECAN_PER_ROLL.times(3);
  }

  return PECAN_PER_ROLL.times(1);
}
