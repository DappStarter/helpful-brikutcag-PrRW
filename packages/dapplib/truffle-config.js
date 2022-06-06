require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth mean essay hidden produce boat senior'; 
let testAccounts = [
"0x5665e16073388a3db93ef79d071b36034b0d7fa8cdbb4615f324a240c4cbd154",
"0x99e734803bb30b1b383756c9f34da06a19edc55d401e9704244f2d1cd9915cf6",
"0x98e7258f091b9a30852349abd091c3b6e3f0799a20cebada37c86951fb1d7fe0",
"0xd69017282effb771bbe8b4f8cb76a2659916270b037608cf19b8bf9cbed09330",
"0x0ead9627237dc92b2c972038edc189891fa9bfe48febbfa1fef81e86d718de25",
"0xbb7e1296418534492b090f02d7bccae17019985985513c2317553d7e98c1598c",
"0x8d18876240cc42dc154f24716bf73f30da5198f81a59756dfacd341509eec677",
"0x9ffa2dcbc0672474bfe652de545f55a2b389b7c06226987d8db8784b6ec10d0e",
"0x7f72417d7979b9af89414ffc23e612aacf7115d4e69bbdb48aef2d4daef36c70",
"0x838057c1bd3898dc02a169f4926cec7b1cffa06f45af3a41daaf869dbd00d6d9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

