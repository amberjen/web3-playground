<script>
  import { web3 } from '../lib/web3';
  import { isLoggedIn, accounts } from "../stores/accountStores";
  
  export let address;

  const sendTip = () => {

    if($isLoggedIn) {
      // Convert ether to wei
      const price = web3.utils.toWei('0.01', 'ether');


      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: $accounts[0],
          to: address,
          value:  web3.utils.toHex(price)
        }]
      })

    } else {
      alert('please connect Metamask wallet!')
    }
    
  };
</script>

{#if $accounts[0] === address}
<!-- If the comment is from me, don't show Tip Button -->
  <span></span>
{:else}
  <button class="btn-tip" on:click={sendTip} disabled={!$isLoggedIn}>Tip 0.01 ETH</button>
{/if}

<style>
  .btn-tip {
    background: #000;
    color: #fff;
    border-radius: 100px;
    padding: 14px 24px 12px;
    font-size: .875rem;
  }

  .btn-tip:disabled {
    cursor: not-allowed;
    background: rgba(0, 0, 0, .4);
  }
</style>