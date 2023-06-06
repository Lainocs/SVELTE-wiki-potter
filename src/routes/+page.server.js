const baseUrl = 'https://api.potterdb.com/v1'

export const load = async () => {
	const fetchMovies = async () => {
		const res = await fetch(`${baseUrl}/movies?page[number]=${1}`)
		const data = await res.json()
		return data
	}

  const fetchCharacters = async () => {
    const res = await fetch(`${baseUrl}/characters?page[number]=${1}`)
    const data = await res.json()
    return data
  }

	return {
		movies: await fetchMovies(),
    characters: await fetchCharacters()
	}
}
