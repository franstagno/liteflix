import React, { useContext } from "react";
import StateContext from "../../../../context/StateContext";
import Play from "../../../../svg/play.svg";
import Plus from "../../../../svg/plus.svg";
import Fade from "react-reveal/Fade";
import { Wrapper, Buttons, PlayButton, PlusButton } from "./styles";

const PopularMovie = () => {
	const { movies } = useContext(StateContext);
	const title =
		movies.featuredMovie.title || "Proximamente las mejores peliculas";
	return (
		<Wrapper>
			<Fade left>
				<h2>
					original de <span>liteflix</span>
				</h2>
			</Fade>
			<Fade top>
				<h1>{title}</h1>
			</Fade>
			<Fade left>
				<Buttons>
					<PlayButton icon={Play} text="REPRODUCIR"></PlayButton>
					<PlusButton icon={Plus} text="MI LISTA"></PlusButton>
				</Buttons>
			</Fade>
		</Wrapper>
	);
};

export default PopularMovie;
