<script>
  export let title = '';
  export let imgSrc = '';
  export let imgAlt;
  export let description = '';
</script>

<div class="card">
  <img src={imgSrc} alt={imgAlt ? imgAlt: title } width="240" height="auto">
  <div class="content">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
</div>

<style>
  .card {
    border: 1px solid #000;
  }

  .content {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h3 { font-size: 1.125rem; }

  p {
    font-family: var(--font-secondary);
  }
</style>

