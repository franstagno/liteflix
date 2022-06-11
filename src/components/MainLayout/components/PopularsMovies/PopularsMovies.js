import React from "react";
import Dropdown from "../Dropdown";
import { Wrapper, Movie } from "./styles";

const PopularsMovies = ({ movies }) => {
	return (
		<Wrapper>
			<Dropdown></Dropdown>
			{movies.map((movie) => (
				<Movie
					src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
				></Movie>
			))}
		</Wrapper>
	);
};

export default PopularsMovies;
