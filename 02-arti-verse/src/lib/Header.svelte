<script>
  import { accounts, isLoggedIn } from '../stores/accountStores';
  import { onMount } from 'svelte';

  console.log('init', $accounts);

  $: checkLogInState = () => {
    if($accounts.length > 0) {
      isLoggedIn.set(true);
    } else {
      isLoggedIn.set(false);
    }
  };

  onMount(() => {

    // async () => {
    //  $accounts = await window.ethereum.request({
    //     method: 'eth_accounts'
    //   });

    //   console.log('temp', $accounts);

    // };


    window.ethereum.on('accountsChanged', async () => {
      console.log('accounts changed');

      $accounts = await window.ethereum.request({
        method: 'eth_accounts'
      });

      checkLogInState();

    });

  });


  const connectWallet = async () => {
    $accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    console.log('connect', $accounts);
    
    checkLogInState();
    
  };

  $: console.log('isLoggedIn', $isLoggedIn);
</script>


<header>
  <h1>ArtiVerse</h1>
  {#if $isLoggedIn}
  <p>{$accounts[0]}</p>
  {:else}
  <button class="btn-connect" on:click={connectWallet}>Connect Wallet</button>
  {/if}
</header>

<style>
  header {
    padding: 16px 24px;
    border-bottom: 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }

  h1 { font-size: 1.25rem; }

  .btn-connect {
    font-family: var(--font-secondary);
    font-size: .9375rem;
    font-weight: 700;
    padding: 14px 24px 12px;
    border-radius: 100px;
    background: #000;
    color: #fff;
  }
</style>