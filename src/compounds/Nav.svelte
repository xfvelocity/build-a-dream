<script>
import { fly } from 'svelte/transition'

let navPressed = false;
let mobile;
let screenWidth;

$: mobile = screenWidth < 1000;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="relative z-50">
    <div class="text-white bg-dark-grey py-4">
        <div class="flex flex-wrap justify-between w-3/4 mx-auto 1024px:justify-end 1024px:max-w-48rem 1440px:max-w-62rem">
            <a class="flex justify-center items-center 1024px:mr-4 hover:text-primary" href="tel:07414095408"><img class="w-4 mr-2" src="/icons/phone.svg" alt=""> 07414 095408</a>
            <a class="flex justify-center items-center hover:text-primary" href="mailto:contact@builda-dream.com"><img class="w-4 mr-2" src="/icons/mail.svg" alt=""> contact@builda-dream.com</a>
        </div>
    </div>
    <div class="py-4 border-b border-gray-500 shadow-md bg-white">
        <div class="w-3/4 mx-auto flex justify-center items-center 1024px:justify-between 1024px:max-w-48rem 1440px:max-w-62rem">
            <img class="w-8 h-8 mr-1 cursor-pointer 1024px:hidden" src="/icons/nav-button.svg" alt="" on:click={() => navPressed = !navPressed }>
            <img class="w-64 mx-auto 1024px:w-auto 1024px:mx-0" src="/images/build-a-dream-logo.png" alt="">
            <div class="hidden 1024px:flex items-center list-none">
                <a class="py-2 hover:text-primary" href="/"><li class="text-lg mx-2">HOME</li></a>
                <a class="py-2 hover:text-primary" href="/work"><li class="text-lg mx-2">OUR WORK</li></a>
                <a class="py-2 hover:text-primary" href="/contact"><li class="text-lg mx-2">CONTACT US</li></a>
            </div>
        </div>
    </div>
</div>

{#if navPressed && mobile}
    <div class="py-6 pb-12 bg-gray-100 shadow-md absolute z-40 w-full border-b border-dark-grey" transition:fly={{ y: -300, duraiton: 500 }}>
        <ul class="w-4/5 mx-auto text-center">
            <li class="py-2 text-xl mx-2"><a class="hover:text-primary" href="/" on:click={() => navPressed = !navPressed}>Home</a></li>
            <li class="py-2 text-xl mx-2"><a class="hover:text-primary" href="/work" on:click={() => navPressed = !navPressed}>Our Work</a></li>
            <li class="py-2 text-xl mx-2"><a class="hover:text-primary" href="/contact" on:click={() => navPressed = !navPressed}>Contact Us</a></li>
        </ul>
    </div>
{/if}