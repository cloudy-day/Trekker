// eslint-disable-next-line no-undef
const Migrations = artifacts.require("Crud");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};