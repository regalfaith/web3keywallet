var Web3KeyWallet = require('./lib/web3');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Web3KeyWallet === 'undefined') {
    window.Web3KeyWallet = Web3KeyWallet;
}

module.exports = Web3KeyWallet;
