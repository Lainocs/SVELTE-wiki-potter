export const load = async () => {
	const fetchMovies = async () => {
		const res = await fetch(`https://api.potterdb.com/v1/movies`)
		const data = await res.json()
		console.log(data)
		return data
	}

  const fetchCharacters = async () => {
    const res = await fetch(`https://api.potterdb.com/v1/characters?page[number]=${1}`)
    const data = await res.json()
		console.log(data)
    return data
  }

	return {
		movies: await fetchMovies(),
    characters: await fetchCharacters()
	}
}
