<script>
  import { onMount } from "svelte";
  import jazzicon from "@metamask/jazzicon"

  export let account;
  export let id;

  let formattedAddress = (address) => {
     return address.substr(0, 5) + '...' + address.substr(-4);
  };


  onMount(() => {
    // ref: https://stackoverflow.com/questions/71678374/get-metamask-profile-picture-and-name-use-web3

    let addr = account.slice(2, 10);
    let seed = parseInt(addr, 16);
    let icon = jazzicon(40, seed); // generates a size 40 icon
    let element = document.querySelector(`.account-${id} .img-wrapper`);
    element.appendChild(icon);

  });


</script>

<div class={`account account-${id}`}>
  <div class="img-wrapper"></div>
  <p class="account-id">{formattedAddress(account)}</p>
</div>

<style>
  .account {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .img-wrapper {
    padding: 4px;
    border: 2px solid #000;
    width: 48px;
    height: 48px;
    border-radius: 100px;
    display: grid;
    place-content: center;
  }

  .account-id {
    font-family: var(--font-secondary);
    font-weight: 600;
  }
</style>