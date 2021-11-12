# rolls-blockchain

![spinning pecan roll gif](https://github.com/strandedathome/rolls-blockchain/blob/main/spinning-pecan-roll.gif)

***********************************************
Remember DOGE?? Yeah, I think we all do. This is kind of like that, it all started as a joke and then it turned into a full-functioning fork of Chia. This is an evolving project, so please be kind with your comments :)
***********************************************

Here's the fork stuff, yada yada yada...

PecanRolls is an eco-friendly decentralization blockchain based on the Proof of Space and Time (PoST) consensus pioneered by PecanRolls™, it  It maintains network robustness, in line with Satoshi Nakamoto's principles.

PecanRolls uses the powerful and secure Chialisp language for Smart Contracts, and supports digital money, global payments and applications. PecanRolls is not affiliated with [HDDcoin Network](https://hddcoin.org/)., but uses their open-sourced software as its foundation.

Farming PecanRolls is the same as Chia™, it does not consume significant amounts of electricity, and utilizes hard drive space, instead of specialized computing hardware that most Proof of Work (PoW) consensus blockchains have come to demand. Moreover, since electrical energy costs for running hard drives is very minimal, due to this low cost of entry, PecanRolls will remain more decentralized and fair, and thus more secure than any Proof of Stake cryptocurrency.

PecanRolls core values include green cryptocurrency, long term value, building for the future, strength in community, and maintaining a great team to ensure long term development.


**BLOCKCHAIN SPECIFICATION:**
- Launch date: Nov 2nd 2021
- Cryptocurrency coin: ROLLS
- Lowest coin denomination: pecan
- Conversion: 1 ROLLS = 1,000,000,000,000 pecan
- Blocks per 24 hours target: 4,608
- Farmed rewards per block: 6 ROLLS
- Halving period for block rewards
* 1st year `6`
* 2nd year `3`
* then `1` block reward indefinitely

**RESOURCES**
- Website: https://pecanrolls.net/

**COMMUNITIES**
- Discord: https://discord.gg/xA9FHJpfEB
- Twitter: https://twitter.com/pecanrolls
- Reddit: https://www.reddit.com/r/pecanrolls

***********************************************
# INSTALL INSTRUCTIONS

You can install PecanRolls by building from source

To **install from available binaries**

# Update / Upgrade OS
```
sudo apt-get update && sudo apt-get upgrade -y
```
# Install Git
```
sudo apt install git -y
```
# Checkout the repo and install PecanRolls
```
git clone https://github.com/strandedathome/rolls-blockchain.git && cd rolls-blockchain && sh install.sh
```
# Activate the virtual environment
```
. ./activate && rolls init
```
# Install the GUI (optional)
```
sh install-gui.sh
```
# Run the GUI
```
cd rolls-blockchain-gui && npm run electron &
```

If the client does not find any connections automatically, you can add any of the following:

## Introducers
```
- introducer.pecanrolls.net • Port: 7654
- dns-introducer.pecanrolls.net
```
## Nodes
```
rolls show -a namora.pecanrolls.net:4321
rolls show -a nebula.pecanrolls.net:4321
```

***********************************************
# UPDATE/UPGRADE INSTRUCTIONS:

You can update PecanRolls from a previous version by downloading and installing the latest executable for your operating system, available from the correct **Releases page**, as described above, or by building from source:

```
# Checkout the source and update

  cd rolls-blockchain
  . ./activate
  rolls stop -d all
  deactivate
  git fetch
  git checkout main
  git reset --hard FETCH_HEAD --recurse-submodules
  sh install.sh
  . ./activate
  rolls init

# Update the GUI

  cd rolls-blockchain-gui
  git fetch
  cd ..
  chmod +x ./install-gui.sh
  ./install-gui.sh
```
