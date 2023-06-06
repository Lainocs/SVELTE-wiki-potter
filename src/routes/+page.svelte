<script>
	export let data
	const baseUrl = 'https://api.potterdb.com/v1/'
	let { movies, characters } = data
	
	const loadMoreCharacters = async () => {
		const res = await fetch(characters.links.next)
		const json = await res.json()
		characters.data = [...characters.data, ...json.data]
		characters.links = json.links
		characters.meta = json.meta
	}
</script>

<h2>Movies</h2>

{#each movies.data as movie}
	{movie.attributes.title} <br>
{/each}

<h2>Characters</h2>
{#each characters.data as character}
	{character.attributes.name} <br>
{/each}

<!-- fetch more button -->
{#if characters.links.next}
	<button on:click={loadMoreCharacters}>Voir Plus</button>
{/if}