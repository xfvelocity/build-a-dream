<script>
let services = [
  {
    img: '/icons/sprout.svg',
    items: [
      'Turfing',
      'Tree removal',
      'Hedging'
    ]
  },
  {
    img: '/icons/fence.svg',
    items: [
      'Fencing/Gates',
      'Decking',
      'Pergolas'
    ]
  },
  {
    img: '/icons/shovel.svg',
    items: [
      'Patios',
      'Block paving',
      'Driveways'
    ]
  }
]
</script>

<svelte:head>
  <title>Build A-Dream | Lincoln Landscape Gardeners</title>
</svelte:head>


<header class="flex justify-center items-center">
  <div class="bg-primary-faded p-4 py-8 text-white w-3/4 mx-auto text-center flex flex-wrap items-center 1024px:py-12 1024px:max-w-48rem">
    <h1 class="text-2xl font-bold m-0 w-full 768px:text-3xl 1440px:text-4xl">Build A-Dream</h1><br>
    <h1 class="text-2xl font-bold m-0 w-full 768px:text-3xl 1440px:text-4xl">Landscape Gardening</h1>
  </div>
</header>

<div class="text-center w-3/4 mx-auto py-16 pb-20 768px:text-left 1024px:max-w-48rem 1440px:max-w-62rem" style="padding: 7rem 0 9rem 0;">
  <h2 class="text-3xl font-semibold text-primary">About Us</h2>
  <p class="my-6 text-lg">We're dedicated to providing you with the best garden in your neighbourhood with an emphasis on perfection, high standards and trustworthy service. With over 25 years of experience, Build A-Dream has come a long way, providing services to a long list of regular clients.</p>
  <p class="text-lg">If you have any questions or comments, please don't hesitate to <a class="text-primary hover:opacity-75" href="/contact">contact us.</a></p>
</div>

<div class="services text-center py-8 768px:py-12"> 
<div class="flex-wrap justify-center items-center 768px:flex 1024px:max-w-48rem 1024px:mx-auto 1440px:max-w-62rem">
  <h2 class="w-full text-white text-4xl font-semibold mb-4">Services</h2>
  {#each services as service}
    <div class="bg-white mx-auto py-6 w-3/4 my-4 768px:w-32% 768px:mx-1">
      <img class="w-20 mx-auto my-4 1440px:mb-8" src={service.img} alt="">
      <ul>
        {#each service.items as item}
          <li class="my-1 text-lg">{item}</li> 
        {/each}   
      </ul>
    </div>
  {/each}
  </div>
</div>

<div class="w-3/4 mx-auto py-8 768px:py-24 1024px:max-w-48rem 1440px:max-w-62rem">
  <h2 class="text-3xl font-semibold text-primary text-center my-6 w-full">Our Latest Work</h2>
  <div class="flex flex-wrap justify-center items-start">
    <img class="m-1 shadow-md rounded-sm 768px:w-48% 1024px:w-32%" src="/images/Home/1.jpg" alt="">
    <img class="m-1 shadow-md rounded-sm 768px:w-48% 1024px:w-32%" src="/images/Home/2.jpg" alt="">
    <img class="m-1 shadow-md rounded-sm 768px:w-48% 1024px:w-32%" src="/images/Home/3.jpg" alt="">
    <img class="m-1 shadow-md rounded-sm 768px:w-48% 1024px:w-32%" src="/images/Home/4.jpg" alt="">
    <img class="m-1 shadow-md rounded-sm 768px:w-48% 1024px:w-32%" src="/images/Home/5.jpg" alt="">
    <img class="m-1 shadow-md rounded-sm 768px:w-48% 1024px:w-32%" src="/images/Home/6.jpg" alt="">
  </div>
  <div class="w-full text-center my-10">
    <a href="/work">
      <button class="btn shadow-lg text-white text-lg py-3 rounded-md w-48 mx-auto hover:opacity-75 1440px:text-xl 1440px:w-56 1440px:py-4">View More</button>
    </a>
  </div>
</div>

<div class="p-2 quotation flex flex-wrap items-center justify-center">
  <div class="w-3/4 mx-auto 768px:flex flex-wrap justify-between 1024px:max-w-48rem 1440px:max-w-62rem">
    <div class="text-center 768px:text-left 768px:w-3/5">
      <h3 class="text-white text-3xl font-semibold 1440px:text-4xl">WANT A <span class="text-primary-light">FREE</span> QUOTATION?</h3>
      <p class="text-white text-sm my-3 w-3/4 mx-auto 768px:mx-0 1440px:text-base">Wondering what would complete your dream garden and how much it’d cost? Then get in touch for a Free Quote.</p>
    </div>
    <div class="flex justify-center mt-8 768px:justify-start">
      <a href="/contact">
        <button class="btn p-2 w-32 rounded-md text-lg text-white shadow-lg 768px:h-16 768px:w-40 hover:opacity-75 768px:font-semibold 1440px:text-xl 1440px:w-48">CONTACT US</button>
      </a>
    </div>
  </div>
</div>


<style>
:global(header) {
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('/images/background.jpg');
  height: 18rem;
}

.services {
  background: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.7)),url('/images/grass-background.png');
}

.quotation {
  background: linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.9)),url('/images/grass-background.png');
  /* background: linear-gradient(rgba(6, 68, 0, 0.8),rgb(6, 68, 0)); */
  height: 22rem;
}

:global(.btn) {
  background: linear-gradient(166deg, rgba(0,130,26,1) 0%, rgba(0,62,12,1) 100%);
}

:global(header h1),
.services h2,
.quotation h3 {
  text-shadow: 2px 2px 4px #111;
}

:global(header),
.services,
.quotation {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

@media(min-width: 768px) {
  :global(header) {
    height: 21rem;
  }
  .quotation {
    height: 18rem;
  }
}

@media(min-width: 1024px) {
  :global(header) {
    height: 26rem;
  }
}

@media(min-width: 1440px) {
  :global(header) {
    height: 30rem;
  }
  .services {
    height: 30rem;
  }
  .quotation {
    height: 22rem;
  }
}

</style>