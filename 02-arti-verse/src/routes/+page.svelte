<script>
  import Header from "../lib/Header.svelte";
  import GalleryCard from "../lib/GalleryCard.svelte";
  import FeedbackCard from "../lib/FeedbackCard.svelte";
  import Footer from "../lib/Footer.svelte";

  export let data;

</script>

<div>
  <Header />
  <main>
    <section>
      <h2>Gallery</h2>
      <div class="gallery-card-group">
        <GalleryCard imgSrc="/01.jpg" title="Abstract Dreamscape" description="Blurring reality and imagination." />
        <GalleryCard imgSrc="/02.jpg" title="Cybernetic Symphony" description="A harmonious man-machine blend." />
        <GalleryCard imgSrc="/03.jpg" title="Technicolor Jungle" description="Lush fantasy jungle in a digital painting." />
        <GalleryCard imgSrc="/04.jpg" title="Glitched Metropolis" description="Futuristic metropolis exploration." />
      </div>
    </section>
    <section>
      <h2>Feedback</h2>
      <div class="feedback-group">
        
        {#each data['feedback'] as fb, index}
          <FeedbackCard 
            number={index + 1} 
            comment={fb.comment} 
            account={fb.account}
            id={fb.id} />
        {/each}

        <form>
          <textarea name="" id="" cols="30" rows="7" placeholder="Speak your mind: Leave a comment"></textarea>
          <button class="btn-reply">Reply</button>
        </form>
        
      </div>
    </section>
  </main>
  <Footer />
</div>

<style>
  main {
    margin: 77px auto 0;
    padding: 64px 0 160px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 32px;
    text-transform: uppercase;
  }
  
  .gallery-card-group {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .feedback-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: #e8e8e8;
    padding: 32px 32px 24px;
  }

  textarea {
    padding: 32px 32px;
    font-family: var(--font-secondary);
    font-size: 1.25rem;
  }

  .btn-reply {
    background: #000;
    color: #fff;
    border-radius: 100px;
    padding: 16px 24px 14px;
  }
</style>