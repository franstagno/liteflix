import React, { useState, useEffect, useContext } from "react";
import StoreContext from "../../context/StateContext";
import Header from "../Header";
import Spinner from "../Spinner";
import PopularMovie from "./components/PopularMovie";
import PopularsMovies from "./components/ListMovies";
import { Wrapper, Background, Loading, Movies } from "./styles";
import { getPopularMovie, getPopularsMovies, getMyMovies } from "./utils";

const MainLayout = () => {
	const { movies, setMovies } = useContext(StoreContext);
	const [loading, setLoading] = useState(true);
	const url =
		movies.featuredMovie.backdrop_path &&
		`https://image.tmdb.org/t/p/original/${movies.featuredMovie.backdrop_path}`;

	useEffect(() => {
		(async () => {
			const featuredMovie = await getPopularMovie();
			const popularMovies = await getPopularsMovies();
			const myMovies = await getMyMovies();
			setMovies({ ...movies, featuredMovie, popularMovies, myMovies });
			setLoading(false);
		})();
	}, []);

	return loading ? (
		<Loading>
			<Spinner></Spinner>
		</Loading>
	) : (
		<Background src={url}>
			<Wrapper isMenuOpen={movies.menu} isAddMovieOpen={movies.addMovie}>
				<Header></Header>
				<Movies>
					<PopularMovie></PopularMovie>
					<PopularsMovies></PopularsMovies>
				</Movies>
			</Wrapper>
		</Background>
	);
};

export default MainLayout;
