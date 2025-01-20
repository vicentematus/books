<script lang="ts">
	import sleepNotRead from '$lib/assets/gifs/sleep-not-read.gif';
	import reading from '$lib/assets/gifs/reading.gif';
	interface ExclusiveShelfProps {
		exclusiveShelf: string;
	}

	let { exclusiveShelf }: ExclusiveShelfProps = $props();

</script>

<!-- 
TODO: I don't know if I should show this.
{#snippet read()}
	<p>Leído</p>
{/snippet} -->

{#snippet toRead()}
	<img src={sleepNotRead} alt="Sleep not read" />
	<p class="loading-text">Lo quiero leer <span class="dots-container">
			<span class="dot">.</span>
			<span class="dot">.</span>
			<span class="dot">.</span>
		</span></p>
{/snippet}

{#snippet currentlyReading()}
	<img src={reading} alt="Reading" />
	<p class="loading-text">
		Leyendo<span class="dots-container">
			<span class="dot">.</span>
			<span class="dot">.</span>
			<span class="dot">.</span>
		</span>
	</p>
{/snippet}


<div class="inline-flex rounded-lg shadow-sm" class:bg-yellow-200={exclusiveShelf === 'to-read'} class:bg-green-200={exclusiveShelf === 'currently-reading'}>
	{#if exclusiveShelf === 'to-read'}
		{@render toRead()}
	{:else if exclusiveShelf === 'currently-reading'}
		{@render currentlyReading()}
	{/if}
</div>

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
