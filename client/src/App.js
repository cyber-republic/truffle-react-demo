import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, value: 0 };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  onSubmit = async () => {
    const { accounts, contract, value } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(value).send({ from: accounts[0] });
    // await contract.methods.set(5).send({ from: "0x8f4E659b586A0d279BA674351C26fBcf2e55a5C3" });
    console.log('accounts are: ', accounts)
    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <div>The stored value is: {this.state.storageValue}</div>
        <p>
          <input onChange={this.onChange} />
        </p>
        <p>
          <button onClick={this.onSubmit}>Submit</button>
        </p>
      </div>
    );
  }

  onChange = (e) => {
    console.log('value: ', e.target.value)
    this.setState({ value: e.target.value })
  }
}

export default App;
