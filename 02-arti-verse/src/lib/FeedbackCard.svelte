<script>
  export let number = '';
  export let comment = '';
  export let imgSrc = '';
  export let id = '';
</script>

<div class="card">
  <h4>Reply #{number}</h4>
  <p class="comment">{comment}</p>
  <div class="card-footer">
    <div class="account">
      <div class="img-wrapper">
        <img src={imgSrc} alt="" width="40" height="40">
      </div>
      <p class="account-id">{id}</p>
    </div>
    <button class="btn-tip">Tip 0.01 ETH</button>
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

  img {
    border-radius: 100px;
  }

  .account-id {
    font-family: var(--font-secondary);
    font-weight: 600;
  }

  .btn-tip {
    background: #000;
    color: #fff;
    border-radius: 100px;
    padding: 14px 24px 12px;
    font-size: .875rem;
  }
</style>