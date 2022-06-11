import React, { useState, useEffect } from "react";
import Header from "../Header";
import Spinner from "../Spinner";
import PopularMovie from "./components/PopularMovie";
import PopularsMovies from "./components/PopularsMovies";
import { Wrapper, Background, WrapperSpinner, Movies } from "./styles";
import { getPopularMovie, getPopularsMovies } from "./utils";

const MainLayout = () => {
	const [popularMovie, setPopularMovie] = useState({});
	const [popularsMovies, setPopularsMovies] = useState([]);
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		(async () => {
			const movie = await getPopularMovie();
			setPopularMovie(movie);
			setLoader(false);
			const movies = await getPopularsMovies();
			setPopularsMovies(movies);
		})();
	}, []);
	return loader ? (
		<WrapperSpinner>
			<Spinner></Spinner>
		</WrapperSpinner>
	) : (
		<Background
			src={`https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path}`}
		>
			<Wrapper>
				<Header></Header>
				<Movies>
					<PopularMovie title={popularMovie.title}></PopularMovie>
					<PopularsMovies movies={popularsMovies}></PopularsMovies>
				</Movies>
			</Wrapper>
		</Background>
	);
};

export default MainLayout;
