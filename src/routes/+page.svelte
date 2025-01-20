<script lang="ts">
	import ExclusiveShelf from '$lib/components/ExclusiveShelf.svelte';
	import Review from '$lib/components/Review.svelte';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	onMount(() => {
		register();
		const swiperEl = document.querySelector('swiper-container');

		const swiperParams = {
			slidesPerView: 2,
			breakpoints: {
				640: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 5
				}
			},
			spaceBetween: 10
		};

		// now we need to assign all parameters to Swiper element
		Object.assign(swiperEl, swiperParams);

		// and now initialize it
		swiperEl.initialize();

		swiperEl.addEventListener('click', (event) => {
			console.log('click', event);
		});
	});

	let data = $props();
	const {
		data: { books }
	} = data;

	let container: HTMLElement;
	const width = $derived(books.length * 300);
	$inspect('cuanto sacamos', width);
</script>

<div class="flex min-h-screen w-full items-center justify-center">
	<div class="min-h-screen min-w-[100vw]">
		<h1 class="text-center font-serif text-3xl font-semibold">Que estoy leyendo</h1>
		<swiper-container
			class="scrollbar-visible mt-2 flex cursor-grab gap-4 overflow-x-auto pb-4"
			speed="1000"
			loop="true"
			init="false"
		>
			{#each books as book}
				<swiper-slide
					class="relative h-full w-[300px] flex-shrink-0 rounded-md border border-gray-500 shadow-2xl"
				>
					<div class="p-4 flex flex-col">
						<h1 class="text-center text-2xl font-bold">{book.title}</h1>
						<p class="text-center">{book.author}</p>
						{#if book.review || book.rating}
							<Review review={book.review} rating={book.rating} />
						{/if}
						<ExclusiveShelf exclusiveShelf={book.exclusiveShelf} />
					</div>

					{#if book.imageUrl}
						<img src={book.imageUrl} alt={book.title} class="mx-auto h-full w-full object-cover" />
					{/if}
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
</div>

<style>
	.scrollbar-visible {
		scrollbar-gutter: stable;
		-webkit-overflow-scrolling: touch;
		&::-webkit-scrollbar {
			height: 8px;
			background: #f1f1f1;
		}
		&::-webkit-scrollbar-thumb {
			background: #888;
			border-radius: 4px;
		}
		scrollbar-width: thin;
	}

	.animate-scroll {
		animation: scroll 15s linear infinite;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-35%);
		}
	}

	.animate-scroll:active {
		animation-play-state: paused;
	}

	swiper-container {
		width: 100%;
	}
</style>
