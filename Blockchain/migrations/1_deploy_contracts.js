var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(SimpleStorage);
};