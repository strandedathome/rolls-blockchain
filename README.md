# Welcome to the PecanRolls Blockchain! ꩜

![spinning pecan roll gif](https://github.com/strandedathome/rolls-blockchain/blob/main/spinning-pecan-roll.gif)

***********************************************
Remember DOGE?? Yeah, I think we all do. This is kind of like that, it all started as a joke and then it turned into a full-functioning fork of Chia. This is an evolving project, so please be kind with your comments :)
***********************************************

<!-- BADGES from workflows in Actions -->
[![Test Install Scripts](https://github.com/strandedathome/rolls-blockchain/actions/workflows/test-install-scripts.yml/badge.svg?branch=1.2.1090)](https://github.com/strandedathome/rolls-blockchain/actions/workflows/test-install-scripts.yml)
[![CodeQL](https://github.com/strandedathome/rolls-blockchain/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/strandedathome/rolls-blockchain/actions/workflows/codeql-analysis.yml)
[![MacOS installer on Catalina and Python 3.8](https://github.com/strandedathome/rolls-blockchain/actions/workflows/build-macos-installer.yml/badge.svg)](https://github.com/strandedathome/rolls-blockchain/actions/workflows/build-macos-installer.yml)
[![Windows Installer on Windows 10 and Python 3.9](https://github.com/strandedathome/rolls-blockchain/actions/workflows/build-windows-installer.yml/badge.svg)](https://github.com/strandedathome/rolls-blockchain/actions/workflows/build-windows-installer.yml)
[![Linux .deb installer on Python 3.8](https://github.com/strandedathome/rolls-blockchain/actions/workflows/build-linux-installer-deb.yml/badge.svg)](https://github.com/strandedathome/rolls-blockchain/actions/workflows/build-linux-installer-deb.yml)

### What is the goal of PecanRolls?

This is intended to be an expedited, _**accelerated rewards**_ blockchain. Instead of 3 years of `2` block rewards, it is designed to be three times the reward amount [`6`] in a third of the time. The logic is to incentivize early adopters to connect to the blockchain and farm.

#### Reduction periods for block rewards
* 1st year `6`
* 2nd year `3`
* then `1` block reward indefinitely

### What is different about this fork?

The genesis block is being created directly from the community! Also, the accelerated rewards system.

The way many forks work currently is `2` rewards over the course of a few years, then halving. The Rolls blockchain is increasing the `2` rewards to `6` but over the course of one year. This will reward early adopters and increase the coin amount in the first year only, then halving to `3` around the start of the second year.

Here's the fork stuff, yada yada yada...

PecanRolls is an eco-friendly decentralized blockchain based on the Proof of Space and Time (PoST) consensus pioneered by Chia™. It maintains network robustness, in line with Satoshi Nakamoto's principles.

PecanRolls uses Chialisp language for Smart Contracts, and supports digital money, global payments and applications. PecanRolls is not affiliated with [HDDcoin Network](https://hddcoin.org/)., but uses their open-sourced software as its foundation.

Farming PecanRolls is the same as Chia™, it does not consume significant amounts of electricity, and utilizes hard drive space, instead of specialized computing hardware that most Proof of Work (PoW) blockchains like Ethereum (soon to not be PoW) or Ravencoin. Since electricity costs for running hard drives is very minimal, due to this low cost of entry, PecanRolls will remain more decentralized and fair, and thus more secure than any Proof of Stake cryptocurrency.

## PecanRolls Core Values
* transparency
* green cryptocurrency
* long term value
* innovation for the future
* strength in community
* build and maintain a collaborative team


### BLOCKCHAIN SPECIFICATIONS
- **Prefarm: 1M**
- Launch date: Friday, Nov 12th 2021
- Cryptocurrency coin: ROLLS
- Lowest coin denomination: pecan
- Conversion: 1 ROLL = 1,000,000,000,000 pecan
- Blocks per 24 hours target: 4,608
- Farmed rewards per block: 6 ROLLS

**RESOURCES**
- Website: https://pecanrolls.net/ (work in progress)

**COMMUNITIES**
- Discord: https://discord.gg/xA9FHJpfEB
- Twitter: https://twitter.com/pecanrolls
- Reddit: https://www.reddit.com/r/pecanrolls (new)

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

If you aren't finding nodes, try the connections below (this will be updated in time):

## Nodes (copy and paste into terminal after . ./activate)
```
rolls show -a nebula.pecanrolls.net:4321
rolls show -a namora.pecanrolls.net:4321
rolls show -a 68.44.57.32:4321
```

***********************************************
# UPDATE/UPGRADE INSTRUCTIONS:

You can update PecanRolls from a previous version by downloading and installing the latest executable for your operating system, available from the correct **Releases page**, as described above, or by building from source:


# Checkout the source and update
```
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
```
# Update the GUI
```
cd rolls-blockchain-gui
git fetch
cd ..
chmod +x ./install-gui.sh
./install-gui.sh
```
