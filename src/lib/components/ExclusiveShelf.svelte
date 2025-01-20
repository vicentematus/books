<script lang="ts">
	import sleepNotRead from '$lib/assets/gifs/sleep-not-read.gif';
	import reading from '$lib/assets/gifs/reading.gif';
	import type { ExclusiveShelf } from '$lib/types/book.model';
	interface ExclusiveShelfProps {
		exclusiveShelf: ExclusiveShelf;
	}

	let { exclusiveShelf }: ExclusiveShelfProps = $props();
</script>

{#snippet toRead()}
	<div class="inline-flex items-center gap-4 rounded-lg shadow-sm bg-yellow-100 border-l-4 border-yellow-800  pr-2 ">
		<img src={sleepNotRead} class="h-10 w-10" alt="Sleep not read" />
		<p class="loading-text">
			Lo quiero leer <span class="dots-container">
			<span class="dot">.</span>
			<span class="dot">.</span>
			<span class="dot">.</span>
		</span>
	</p>
</div>

{/snippet}

{#snippet currentlyReading()}
	<div class="inline-flex items-center gap-4 rounded-lg shadow-sm bg-green-200 border-l-4 border-green-800  pr-2">
		<img src={reading} class="h-10 w-10" alt="Reading" />
		<p class="loading-text">
			Leyendo<span class="dots-container">
				<span class="dot">.</span>
				<span class="dot">.</span>
				<span class="dot">.</span>
			</span>
		</p>
	</div>
{/snippet}

{#if exclusiveShelf === 'to-read'}
	{@render toRead()}
{:else if exclusiveShelf === 'currently-reading'}
	{@render currentlyReading()}
{/if}

<style>
	/* Claude sponsored this. */
	.loading-text {
		display: inline-flex;
		align-items: center;
	}

	.dots-container {
		display: inline-flex;
	}

	.dot {
		opacity: 0;
		animation: bounce 1.4s ease-in-out infinite;
		margin-left: 1px;
	}

	.dot:nth-child(1) {
		animation-delay: 0s;
	}

	.dot:nth-child(2) {
		animation-delay: 0.2s;
	}

	.dot:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes bounce {
		0%,
		100% {
			opacity: 0;
			transform: translateY(0);
		}
		50% {
			opacity: 1;
			transform: translateY(-2px);
		}
	}
</style>
