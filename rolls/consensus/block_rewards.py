from rollss.util.ints import uint32, uint64

# 1 PecanRolls coin = 1,000,000,000,000 = 1 trillion pecan.
_pecan_per_rolls = 1000000000000
_blocks_per_year = 1681920  # 32 * 6 * 24 * 365


def calculate_pool_reward(height: uint32) -> uint64:
    """
    Returns the pool reward at a certain block height. The pool earns nothing/nada/zero of the reward
    in each block. If the farmer is solo farming, they are their own almighty pool, and earn 100% of 
    the entire block reward.
    
    These reduction events will not be hit at the exact times (first year, etc), due to fluctuations
    in difficulty. They will probably come early as long as network rates increase.
    """
    return uint64(int(0))

    if height == 0:
        return uint64(int((0 / 8) * 0 * _pecan_per_rolls))
    elif height < 1 * _blocks_per_year: 
        return uint64(int((0 / 8) * 6 * _pecan_per_rolls))
    elif height < 2 * _blocks_per_year: 
        return uint64(int((0 / 8) * 3 * _pecan_per_rolls))
    else:
        return uint64(int((0 / 8) * 1 * _pecan_per_rolls))


def calculate_base_farmer_reward(height: uint32) -> uint64:
    """
    Returns the base farmer reward at a certain block height.
    The base fee reward is 100% of total block reward!

    These reduction events will not be hit at the exact times (first year, etc), due to fluctuations
    in difficulty. They will probably come early as long as network rates increase.
    """

    if height == 0:
        return uint64(1000000 * _pecan_per_rolls) # prefarm for future of PecanRolls
    elif height < 1 * _blocks_per_year: 
        return uint64(6 * _pecan_per_rolls) # first year • 6 block reward
    elif height < 2 * _blocks_per_year: 
        return uint64(3 * _pecan_per_rolls) # second year • 3 block reward
    else:
        return uint64(1 * _pecan_per_rolls) # 1 block reward indefinitely
