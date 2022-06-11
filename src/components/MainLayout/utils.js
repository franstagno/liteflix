export const getPopularMovie = async () => {
	const response = await fetch(
		"https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
	);
	const movies = await response.json();
	return (
		movies &&
		movies.results &&
		movies.results.reduce(
			(acum, movie) =>
				(acum = acum.popularity > movie.popularity ? acum : movie),
			{}
		)
	);
};

export const getPopularsMovies = async () => {
	const response = await fetch(
		"https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
	);
	const movies = await response.json();
	return movies && movies.results && movies.results.splice(0, 4);
};
