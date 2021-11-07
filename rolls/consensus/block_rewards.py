from rolls.util.ints import uint32, uint64

# 1 PecanRolls coin = 1,000,000,000,000 = 1 trillion pecans.
_pecans_per_roll = 1000000000000
_blocks_per_year = 1681920  # 32 * 6 * 24 * 365


def calculate_pool_reward(height: uint32) -> uint64:
    """
    Returns the pool reward at a certain block height. The pool earns 7/8 of the reward in each block. 
    If the farmer is solo farming, they act as the pool, and therefore earn the entire block reward.
    
    These reduction events will not be hit at the exact times (first year, 6 months later, etc), due to 
    fluctuations in difficulty. They will likely come early, if the network space and VDF rates increase.
    """

    if height == 0:
        return uint64(int((7 / 8) * 1000000 * _pecans_per_roll)) # prefarm for future of PecanRolls
    elif height < 0.5 * _blocks_per_year: 
        return uint64(int((7 / 8) * 6 * _pecans_per_roll)) # first 6 months - 6 block reward
    elif height < 1 * _blocks_per_year: 
        return uint64(int((7 / 8) * 3 * _pecans_per_roll)) # first year - 3 block reward
    else:
        return uint64(int((7 / 8) * 1 * _pecans_per_roll)) # 1 block reward indefinitely


def calculate_base_farmer_reward(height: uint32) -> uint64:
    """
    Returns the base farmer reward at a certain block height.
    The base fee reward is 1/8 of total block reward

    Returns the coinbase reward at a certain block height. These reduction events will not be
    hit at the exact times (first year, 6 months later, etc), due to fluctuations in difficulty. 
    They will likely come early, if the network space and VDF rates increase.
    """

    if height == 0:
        return uint64(int((1 / 8) * 1000000 * _pecans_per_roll)) # prefarm for future of PecanRolls
    elif height < 0.5 * _blocks_per_year: 
        return uint64(int((1 / 8) * 6 * _pecans_per_roll)) # first 6 months - 6 block reward
    elif height < 1 * _blocks_per_year: 
        return uint64(int((1 / 8) * 3 * _pecans_per_roll)) # first year - 3 block reward
    else:
        return uint64(int((1 / 8) * 1 * _pecans_per_roll)) # 1 block reward indefinitely
