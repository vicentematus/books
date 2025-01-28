<script lang="ts">
	import ExclusiveShelf from '$lib/components/ExclusiveShelf.svelte';
	import Review from '$lib/components/Review.svelte';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import type { SwiperOptions } from 'swiper/types';

	let data = $props();
	const {
		data: { books }
	} = data;

	onMount(() => {
		// Swiper requires us to define the Web Component before using it.
		register();
		const swiperEl = document.querySelector('swiper-container');
		if (!swiperEl) throw new Error('Swiper container not found');

		const MOBILE_VIEW = 1;
		const MEDIUM_VIEW = 3;
		const LARGE_VIEW = 5;

		const swiperParams: SwiperOptions = {
			slidesPerView: MOBILE_VIEW,
			breakpoints: {
				640: {
					slidesPerView: MEDIUM_VIEW
				},
				1024: {
					slidesPerView: LARGE_VIEW
				}
			},
			spaceBetween: 10,
			autoplay: {
				delay: 1000
			},
			loop: true,
			speed: 1000
		};

		Object.assign(swiperEl, swiperParams);
		swiperEl.initialize();
		swiperEl.addEventListener('click', (event) => {
			console.log('click', event);
		});
	});
</script>

<section class=" space-y-8">
	<header class="flex flex-col items-center justify-center">
		<h1 class="text-center font-serif text-3xl font-semibold">Vicente esta leyendo...</h1>
		<a
			href="https://www.goodreads.com/user/show/179930250-vicente"
			target="_blank"
			class="text-center font-semibold text-blue-800 underline"
		>
			Mirar perfil en Goodreads
		</a>
	</header>

	<swiper-container class="cursor-grab" init="false">
		{#each books as book}
			<swiper-slide class="rounded-md border border-gray-500 shadow-2xl">
				<div class="flex flex-col gap-6 p-4">
					<div>
						<h2 class="text-center text-2xl font-bold">{book.title}</h2>
						<p class="text-center">{book.author}</p>
					</div>

					{#if book.review || book.rating}
						<Review review={book.review} rating={book.rating} />
					{/if}
					{#if book.exclusiveShelf !== 'read'}
						<div class="flex justify-center">
							<ExclusiveShelf exclusiveShelf={book.exclusiveShelf} />
						</div>
					{/if}
				</div>


				{#if book.imageUrl}
					<img
						src={book.imageUrl}
						alt={book.title}
						class="mx-auto h-full w-full rounded-b-md object-cover"
					/>
				{/if}
			</swiper-slide>
		{/each}
	</swiper-container>
</section>
