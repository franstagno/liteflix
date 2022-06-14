import React, { useState, useContext } from "react";
import StoreContext from "../../../../context/StateContext";
import Dropdown from "../Dropdown";
import Movie from "../Movie";
import { Wrapper } from "./styles";

const PopularsMovies = () => {
	const options = [
		{ option: "popularMovies", displayName: "populares", selected: true },
		{ option: "myMovies", displayName: "mis peliculas", selected: false },
	];
	const [categories, setCategory] = useState(options);
	const { movies } = useContext(StoreContext);
	const category = categories.filter((category) => category.selected)[0]
		.option;
	const url =
		category !== "myMovies"
			? "https://image.tmdb.org/t/p/w500/"
			: "https://firebasestorage.googleapis.com/v0/b/liteflix-73186.appspot.com/o/";
	return (
		<Wrapper>
			<Dropdown
				categories={categories}
				setCategory={setCategory}
			></Dropdown>
			{movies[category].map((movie, index) => (
				<Movie
					key={index}
					src={`${url}${movie.backdrop_path}?alt=media`}
					movie={movie}
				></Movie>
			))}
		</Wrapper>
	);
};

export default PopularsMovies;
