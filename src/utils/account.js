import ContractAbi from '../../src/abis/User.json'

const getProfile = async(userKey) => {
    const web3 = window.web3;
    const account = await web3.eth.getAccounts();
    const networkID = await web3.eth.net.getId();
    // console.log(account);
    // setKey(account);
    const networkData = ContractAbi.networks[networkID];

    let key;

    if (userKey) {
        key = userKey;
    }
    else {
        key = account[0];
    }
    // console.log("key-" + key);

    if (networkData) {

        const contract = new web3.eth.Contract(
        ContractAbi.abi,
        networkData.address
        );

        const data = await contract.methods.readStakeholder(key).call();
        console.log(data)
        if (data) {
        
            return {
                data: data,
                account: account,
            };
        }
        else {
            return null;
        }

    }
}

export default getProfile