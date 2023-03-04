/*
* Variables
*/
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const form = document.querySelector('form');


/*
* Methods
*/
const send = async (amount) => {
  
  // Connect the site to MetaMask Wallet first
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts'
  });

  /*
    - Ethereum’s currency which is “Ether” has several units.
    - The minimum unit of Ether is called “wei”.
    - 1 ether = 1000000000000000000 wei.
  */ 
  // Converts any ether into wei.
  const wei = web3.utils.toWei(amount, 'ether');

  // If there's account connected...
  if(accounts.length > 0) {
    window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: accounts[0],
        to: '0xc1aDDD18dE904b6fAfb35811596b916bB1535A90',
        // Convert any given value to HEX
        value: web3.utils.toHex(wei)
      }]
    });
  }
};


/*
* Event Listeners & Inits
*/

// Only show tip form if user has a wallet
// MetaMask-specific
if(window.ethereum) {
  form.classList.add('has-eth');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(window.ethereum) {
    const input = form.querySelector('input');
    send(input.value);
  } else {
    alert('Please install a wallet.')
  }

});