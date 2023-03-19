<script>
  import EthName from "./EthName.svelte";
  import TipButton from "./TipButton.svelte";
  export let number = '';
  export let comment = '';
  export let account = '';
  export let id;
</script>

<div class="card">
  <h4>Reply #{number}</h4>
  <p class="comment">{comment}</p>
  <div class="card-footer">
    <EthName {account} {id} />
    <TipButton address={account} />
  </div>
</div>

<style>
  .card {
    padding: 24px 32px;
    border: 1px solid #000;
  }

  h4 { 
    font-size: .875rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .comment {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 24px;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>