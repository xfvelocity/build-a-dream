<script>
import { onMount } from 'svelte';
import Carousel from '/compounds/Carousel'

let carousel = [
    {
        title: 'North Hykeham | Patio',
        desc: 'Silver grey Indian sandstone paving slabs in four different sizes with Marshall Harena circle pack.',
        date: 'January 2020',
        images: [
            '/images/January 2020/2.jpg', '/images/January 2020/3.jpg', '/images/January 2020/4.jpg'
        ]
    },
    {
        title: 'Lincoln | Turfing',
        desc: 'Transformed from just a plain lawn area into a maintainable garden ready for the summer!',
        date: 'June 2019',
        images: [
            '/images/June 2019/1.jpg', '/images/June 2019/2.jpg', '/images/June 2019/3.jpg'
        ]
    },
    {
        title: 'Burton Waters | Decking',
        desc: 'New decking work added in garden to give the customer easy access to the water.',
        date: 'October 2018',
        images: [
            '/images/October 2018/1.jpg', '/images/October 2018/2.jpg', '/images/October 2018/3.jpg'
        ]
    },
    {
        title: 'North Greetwell | Driveway',
        desc: 'Marshall Tegula Tradition pavers with Tequla Pennant Grey around outer edge. We use Geotextile Terran on all our Driveways and patios, as well as Linear drainage channels.',
        date: 'July 2018',
        images: [
            '/images/July 2018/1.jpg', '/images/July 2018/2.jpg', '/images/July 2018/3.jpg', '/images/July 2018/4.jpg', '/images/July 2018/5.jpg'
        ]
    }
]

</script>

<svelte:head>
  <title>Build A-Dream | Our Work</title>
  <meta name="description" content="Landscape Gardeners Lincoln . Build A-Dream Landscapers are experienced in Fencing, Decking, Patio, Turf, Paving, Heding etc. "/>
</svelte:head>


<header class="flex justify-center items-center">
  <div class="bg-primary-faded p-4 py-8 text-white w-3/4 mx-auto text-center flex flex-wrap items-center 1024px:py-12 1024px:max-w-48rem">
    <h1 class="text-2xl font-bold m-0 w-full 768px:text-3xl 1440px:text-4xl">Our work</h1>
  </div>
</header>


{#each carousel as section}
    <section class={section.class}>
        <div class="w-full py-24 slide 1440px:py-32">
            <div class="1024px:max-w-48rem 1024px:mx-auto" style="max-width: none; width: 90%;">
                <div class="text-center w-3/4 mx-auto">
                    <h2 class="font-semibold text-2xl 1440px:text-3xl">{section.title}</h2>
                    <p class="text-sm my-3 768px:w-3/5 768px:mx-auto">{section.desc}</p>
                    <p class="text-xs text-gray-700">{section.date}</p>
                </div>
                <Carousel perPage={{ 768: 2, 1440: 3 }}>
                    {#each section.images as image}
                        <div class="slide-content my-10 mx-1">
                            <img class="w-full rounded-sm shadow-md" src={image} alt="">
                        </div>
                    {/each}
                </Carousel>
            </div>
        </div>
    </section>
{/each}

<style>
.slide:nth-child(even) {
    background: rgb(245, 245, 245);
}
</style>

