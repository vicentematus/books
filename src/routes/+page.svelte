<script lang="ts">
    let data =  $props();

    const {data: {books}} = data

    // console.log({books})
</script>


{#each books as book}
    <div>
        {JSON.stringify(book.imageUrl)}
        <img src={book.imageUrl} alt={book.title} />
        <h1>{book.title}</h1>
        <p>{book.author}</p>
    </div>
{/each}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>