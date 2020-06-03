<div class="relative w-full justify-center items-center">
	<button class="left" on:click={left} aria-label="left">
		<img class="w-4 mx-2" src="/icons/left-arrow.svg" alt="">
	</button>
	<div class="slides w-3/4 mx-auto 768px:w-10/12 1440px:w-88%" bind:this={siema}>
		<slot />
	</div>
	<ul>
		{#each pips as pip, i}
		<li on:click={() => go(i)} class={currentIndex === i ? "active" : ""}></li>
		{/each}
	</ul>
	<button class="right" on:click={right} aria-label="right">
		<img class="w-4 mx-2" src="/icons/right-arrow.svg" alt="">
	</button>
</div>

<style>
	button {
		position: absolute;
		width: 40px;
		height: 40px;
		top: 50%;
		z-index: 50;
		margin-top: -20px;
		border: none;
		background-color: transparent;
	}
    button:focus {
        outline: none;
    }
	.left {
		left: 2vw;
	}
	.right {
		right: 2vw;
	}
	ul {
		list-style-type: none;
		position: absolute;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: -30px;
		padding: 0;
	}
	ul li {
		margin: 6px;
		border-radius: 100%;
		background-color: rgb(0, 122, 0,0.5);
		height: 8px;
		width: 8px;
	}
	ul li:hover {
		background-color: #007a00;
	}
	ul li.active {
		background-color: #007a00;
	}
</style>

<script>
	import Siema from 'siema'
	import { onMount, createEventDispatcher } from 'svelte'
	
	export let perPage = 3
	export let loop = true
	export let autoplay = 0
	export let duration = 200
	export let easing = 'ease-out'
	export let startIndex = 0
	export let draggable = true
	export let multipleDrag = true		
	export let threshold = 20
	export let rtl = false
	let currentIndex = startIndex;
	
	let siema
	let controller
	let timer
	const dispatch = createEventDispatcher()
	$: pips = controller ? controller.innerElements : []
	
	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage,
			loop,
  			duration,
  			easing,
  			startIndex,
  			draggable,
 			multipleDrag,
  			threshold,
  			rtl,
			onChange: handleChange
		})
		
		autoplay && setInterval(right, autoplay)
		return () => {
			autoplay && clearTimeout(timer)
			controller.destroy()
		}
	})
	
	function left () {
		controller.prev()
	}
	
	function right () {
		controller.next()
	}
	function go (index) {
		controller.goTo(index)
	}
	function handleChange (event) {
		currentIndex = controller.currentSlide
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		} )
	}
</script>