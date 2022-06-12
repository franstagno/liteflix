import React from "react";
import Dropdown from "../Dropdown";
import Movie from "../Movie";
import { Wrapper } from "./styles";

const PopularsMovies = ({ movies }) => {
	return (
		<Wrapper>
			<Dropdown></Dropdown>
			{movies.map((movie, index) => (
				<Movie
					key={index}
					src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
					movie={movie}
				></Movie>
			))}
		</Wrapper>
	);
};

export default PopularsMovies;
