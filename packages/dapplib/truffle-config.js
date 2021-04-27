require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gesture globe frown ski strong riot mad huge idea loan flower gas'; 
let testAccounts = [
"0x297b5ba2dc2999943df9f5a97a634faa4e71aa47181506c28a4ce945b43f85a4",
"0x19bc8c41c0c52c229586930e91fa2941e4e7cd9e74b1e4f3dcde3e5004c82f19",
"0xf0f5afa48281807cf93d6d018dfca5ce98e89dc9ceed4bc68b56705459913551",
"0xe0df6b3a7e7b4525a0fd231eddec3f8b519dcfc1902c303971324265f697f6b7",
"0x0b32dff7a7e479a239c683b70ff5755c778e3cea3bd4543783bdc26bc70c3548",
"0xf9b8bb4e292a0a58a3f1e68de0f6b3b3004c6fbd1de0e080e55b93432b589188",
"0x01a5c0587648e9f82bdd3ffbb539449e685abb887bc05bf3450e23d780b5d51b",
"0x66f45a1f9681f54e014756b0b829c59665a7dcd5d53be6f80d9795584919d54a",
"0x01cd34bcda855249619b3b1c2b2e0ff82456fc3c957a1543a13abc0fe1a0c9b0",
"0xfacc01b8aee5c60ec056d76422c5a0841b8ae658e2d8e438359b7c7c1826d89e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

