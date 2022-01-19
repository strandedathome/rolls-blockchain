from setuptools import setup

dependencies = [
    "blspy==1.0.6",  # Signature library
    "chiavdf==1.0.3",  # timelord and vdf verification
    "chiabip158==1.0",  # bip158-style wallet filters
    "chiapos==1.0.6",  # proof of space
    "clvm==0.9.7",
    "clvm_rs==0.1.14",
    "clvm_tools==0.4.3",
    "aiohttp==3.7.4",  # HTTP server for full node rpc
    "aiosqlite==0.17.0",  # asyncio wrapper for sqlite, to store blocks
    "bitstring==3.1.9",  # Binary data management library
    "colorama==0.4.4",  # Colorizes terminal output
    "colorlog==6.6.0",  # Adds color to logs
    "concurrent-log-handler==0.9.19",  # Conchurrently log and rotate logs
    "cryptography==3.4.7",  # Python cryptography library for TLS - keyring conflict
    "fasteners==0.16.3",  # For interprocess file locking
    "keyring==23.0.1",  # Store keys in MacOS Keychain, Windows Credential Locker
    "keyrings.cryptfile==1.3.4",  # Secure storage for keys on Linux (Will be replaced)
    #  keyrings.cryptfile moved from 1.3.8 to 1.3.4 for Ubuntu
    "PyYAML==5.4.1",  # Used for config file format
    "setproctitle==1.2.2",  # Gives the rolls processes readable names
    "sortedcontainers==2.4.0",  # For maintaining sorted mempools
    "websockets==9.1.0",  # For use in wallet RPC and electron UI
    "click==7.1.2",  # For the CLI
    "dnspython==2.1.0",  # Query DNS seeds
    "watchdog==2.1.6",  # Filesystem event watching - watches keyring.yaml
]

upnp_dependencies = [
    "miniupnpc==2.2.3",  # Allows users to open ports on their router
]

dev_dependencies = [
    "pytest",
    "pytest-asyncio",
    "flake8",
    "mypy",
    "black",
    "aiohttp_cors",  # For blackd
    "ipython",  # For asyncio debugging
    "types-setuptools",
]

kwargs = dict(
    name="rolls-blockchain",
    author="nickhenry.eth",
    author_email="nick.henryhousehold@gmail.com",
    description="PecanRolls blockchain full node, farmer, timelord, and wallet.",
    url="https://pecanrolls.net/",
    license="Apache License",
    python_requires=">=3.7, <4",
    keywords="rolls blockchain node",
    install_requires=dependencies,
    setup_requires=["setuptools_scm"],
    extras_require=dict(
        uvloop=["uvloop"],
        dev=dev_dependencies,
        upnp=upnp_dependencies,
    ),
    packages=[
        "build_scripts",
        "rolls",
        "rolls.cmds",
        "rolls.clvm",
        "rolls.consensus",
        "rolls.daemon",
        "rolls.full_node",
        "rolls.timelord",
        "rolls.farmer",
        "rolls.harvester",
        "rolls.introducer",
        "rolls.plotting",
        "rolls.pools",
        "rolls.protocols",
        "rolls.rpc",
        "rolls.server",
        "rolls.simulator",
        "rolls.types.blockchain_format",
        "rolls.types",
        "rolls.util",
        "rolls.wallet",
        "rolls.wallet.puzzles",
        "rolls.wallet.rl_wallet",
        "rolls.wallet.cc_wallet",
        "rolls.wallet.did_wallet",
        "rolls.wallet.settings",
        "rolls.wallet.trading",
        "rolls.wallet.util",
        "rolls.ssl",
        "mozilla-ca",
    ],
    entry_points={
        "console_scripts": [
            "rolls = rolls.cmds.rolls:main",
            "rolls_wallet = rolls.server.start_wallet:main",
            "rolls_full_node = rolls.server.start_full_node:main",
            "rolls_harvester = rolls.server.start_harvester:main",
            "rolls_farmer = rolls.server.start_farmer:main",
            "rolls_introducer = rolls.server.start_introducer:main",
            "rolls_timelord = rolls.server.start_timelord:main",
            "rolls_timelord_launcher = rolls.timelord.timelord_launcher:main",
            "rolls_full_node_simulator = rolls.simulator.start_simulator:main",
        ]
    },
    package_data={
        "rolls": ["pyinstaller.spec"],
        "": ["*.clvm", "*.clvm.hex", "*.clib", "*.clinc", "*.clsp", "py.typed"],
        "rolls.util": ["initial-*.yaml", "english.txt"],
        "rolls.ssl": ["rolls_ca.crt", "rolls_ca.key", "dst_root_ca.pem"],
        "mozilla-ca": ["cacert.pem"],
    },
    use_scm_version={"fallback_version": "unknown-no-.git-directory"},
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    zip_safe=False,
)


if __name__ == "__main__":
    setup(**kwargs)
