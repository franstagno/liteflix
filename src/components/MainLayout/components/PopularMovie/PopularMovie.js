import React, { useContext } from "react";
import Play from "../../../../svg/play.svg";
import Plus from "../../../../svg/plus.svg";
import StateContext from "../../../../context/StateContext";
import { Wrapper, Buttons, PlayButton, PlusButton } from "./styles";

const PopularMovie = () => {
	const { movies } = useContext(StateContext);
	const title =
		movies.featuredMovie.title || "Proximamente las mejores peliculas";
	return (
		<Wrapper>
			<h2>
				original de <span>liteflix</span>
			</h2>
			<h1>{title}</h1>
			<Buttons>
				<PlayButton icon={Play} text="REPRODUCIR"></PlayButton>
				<PlusButton icon={Plus} text="MI LISTA"></PlusButton>
			</Buttons>
		</Wrapper>
	);
};

export default PopularMovie;
