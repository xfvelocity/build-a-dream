<svelte:head>
  <title>Build A-Dream | Contact Us</title>
</svelte:head>


<header class="flex justify-center items-center">
  <div class="bg-primary-faded p-4 py-8 text-white w-3/4 mx-auto text-center flex flex-wrap items-center 1024px:py-12 1024px:max-w-48rem">
    <h1 class="text-2xl font-bold m-0 w-full 768px:text-3xl 1440px:text-4xl">Contact Us</h1>
  </div>
</header>

<div class="1024px:max-w-48rem mx-auto 1024px:flex flex-wrap justify-center 1024px:my-20 1440px:max-w-62rem">
    <div class="w-3/4 mx-auto py-6 my-8 768px:w-3/5 1024px:w-64 1024px:m-0 1024px:mr-12 1440px:py-10">
        <h2 class="text-xl text-center font-semibold 1024px:text-left">CONTACT INFO</h2>
        <div class="my-8">
            <div class="my-4">
                <h3 class="text-primary text-lg font-semibold mb-2">Email</h3>
                <a class="hover:text-primary" href="mailto:contact@builda-dream.com">contact@builda-dream.com</a>
            </div>
            <div class="my-4">
                <h3 class="text-primary text-lg font-semibold mb-2">Mobile</h3>
                <a class="hover:text-primary" href="tel:07414095408">07414 095408</a>
            </div>
            <div class="my-4">
                <h3 class="text-primary text-lg font-semibold mb-2">Location</h3>
                <p>Witham St Hughs, Lincoln</p>
            </div>
        </div>
        <a href="https://www.facebook.com/BuildADreamLandscapers/" target="_blank"><img class="w-6 mt-6" src="/icons/facebook.svg" alt=""></a>
    </div>
    <div class="bg-gray-100 py-6 1024px:rounded-sm 1024px:shadow 1024px:py-0 1024px:w-3/5">
        <div class="py-8 w-3/4 mx-auto 768px:w-3/5 1024px:w-3/4 1024px:py-6 1440px:py-10">
            <h2 class="text-2xl text-primary text-center font-semibold">Get in Touch</h2>
            <form class="my-8" action="https://usebasin.com/f/5d041ec64531" method="POST">
                <div class="flex items-center">
                    <input class="w-1/2 mr-2 py-2 pl-3 mb-3 rounded-sm shadow-sm 1440px:mb-4 1440px:mr-3" type="name" name="name" placeholder="Name" required>
                    <input class="w-1/2 py-2 pl-3 mb-3 rounded-sm shadow-sm 1440px:mb-4" type="phone" name="phone" placeholder="Phone" required>
                </div>
                <input class="w-full py-2 pl-3 mb-3 rounded-sm shadow-sm 1440px:mb-4" type="email" name="email" placeholder="Email Address">
                <textarea class="w-full py-2 pl-3 mb-3 rounded-sm shadow-sm h-32 1440px:mb-4" name="message" placeholder="Type your message here.." required></textarea>
                <button class="btn text-white py-2 w-full rounded-sm" type="submit">Submit</button>
            </form>
        </div>
    </div>
</div>

<style>
input,
textarea {
    border: 1px solid rgb(220, 220, 220);
}
</style>