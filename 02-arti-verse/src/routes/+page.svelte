<script>
  import Header from "../lib/Header.svelte";
  import GalleryCard from "../lib/GalleryCard.svelte";
  import FeedbackCard from "../lib/FeedbackCard.svelte";
  import Footer from "../lib/Footer.svelte";
</script>

<div>
  <Header />
  <main>
    <section>
      <h2>Gallery</h2>
      <div class="gallery-card-group">
        <GalleryCard imgSrc="/01.jpg" title="Project 01" description="Just throw something nonsense text over here." />
        <GalleryCard imgSrc="/02.jpg" title="Project 02" description="Just throw something nonsense text over here." />
        <GalleryCard imgSrc="/03.jpg" title="Project 03" description="Just throw something nonsense text over here." />
        <GalleryCard imgSrc="/04.jpg" title="Project 04" description="Just throw something nonsense text over here." />
      </div>
    </section>
    <section>
      <h2>Feedback</h2>
      <div class="feedback-group">
        <FeedbackCard number="1" imgSrc="/avatar-01.png" comment="This digital art piece is the perfect embodiment of contemporary art. It's fresh, thought-provoking, and totally ahead of its time." id="0xdf7c7f...24c7" />
        <FeedbackCard number="2" imgSrc="/avatar-02.png" comment="This art is off the chain! It's like a fusion of creativity, imagination, and cutting-edge technology all in one." id="0xb25bf3...aaf4" />
        <!-- <FeedbackCard number="3" imgSrc="/avatar-03.png" comment="This artwork is funky fresh! It's so cool to see technology and art merging together like this." id="0x15d34a...6a65" /> -->
        
        <form>
          <textarea name="" id="" cols="30" rows="7" placeholder="Speak Your Mind: Leave a Comment"></textarea>
          <button class="btn-reply">Reply</button>
        </form>
      </div>
    </section>
  </main>
  <Footer />
</div>

<style>
  main {
    padding: 64px 140px 160px;
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