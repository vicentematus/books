<script lang="ts">
	import goldenSunArtifact from '$lib/assets/gifs/golden-sun-artifact.gif';
	import goldenSunNo from '$lib/assets/gifs/golden-sun-no.gif';
	import goldenSunSpeech from '$lib/assets/gifs/golden-sun-speech.gif';
	import goldenSunYes from '$lib/assets/gifs/golden-sun-yes.gif';
	import quote from '$lib/assets/gifs/quote.gif';
	import star from '$lib/assets/gifs/psy-crystal.gif';
	// import marioStar from '$lib/assets/gifs/mario-star.png';

	interface ReviewProps {
		review: string;
		rating: number;
	}

	let { review, rating }: ReviewProps = $props();

	const ceilRating = $derived(Math.ceil(rating));

	function getRandomImage() {
		const randomImage = Math.floor(Math.random() * 4);
		return [goldenSunArtifact, goldenSunNo, goldenSunSpeech, goldenSunYes][randomImage];
	}
</script>

{#snippet ratingOnly()}
	{#each Array(ceilRating) as _}
		<img src={star} alt="Star" class="h-6 w-6" />
	{/each}
	<p class="font-serif text-gray-600">
		{ceilRating} / 5
	</p>
{/snippet}

{#snippet reviewAndRating()}
	<blockquote class="w-full">
		<p class="font-serif">
			{review}
		</p>
		<div class="flex gap-2">
			{#each Array(ceilRating) as _}
				<img src={star} alt="Star" class="h-6 w-6" />
			{/each}
			<p class="font-serif text-gray-600">
				{ceilRating} / 5
			</p>
		</div>
	</blockquote>
	<div class="absolute bottom-0 right-[10px] hidden text-gray-400 lg:block">
		<img src={quote} alt="Quote" class="h-6 w-6" />
	</div>
{/snippet}


<figure class="relative flex gap-2 rounded-r-lg border-l-4 border-gray-800 bg-gray-100 p-2 ">
	<figcaption class="">
		<img src={getRandomImage()} alt="Golden Sun Artifact" class="h-auto w-10" />
	</figcaption>
	{#if review && rating}
		{@render reviewAndRating()}
	{:else if rating}
		{@render ratingOnly()}
	{/if}
</figure>
