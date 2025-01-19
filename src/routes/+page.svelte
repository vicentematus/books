<script lang="ts">
	import { onMount } from 'svelte';
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
		<section class="scrollbar-visible mt-2 flex gap-4 overflow-x-auto pb-4">
			{#each books as book}
				<div class="h-full w-[300px] flex-shrink-0 rounded-md border border-gray-500 shadow-2xl">
					<div class="p-4">
						<h1 class="text-center text-2xl font-bold">{book.title}</h1>
						<p class="text-center">{book.author}</p>
					</div>

					{#if book.imageUrl}
						<img src={book.imageUrl} alt={book.title} class="mx-auto h-full w-full object-cover" />
					{/if}
				</div>
			{/each}
		</section>
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
</style>
