// eslint-disable-next-line no-undef
const Migrations = artifacts.require("Transaction");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};