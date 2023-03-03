// eslint-disable-next-line no-undef
const Migrations = artifacts.require("Medicine");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};