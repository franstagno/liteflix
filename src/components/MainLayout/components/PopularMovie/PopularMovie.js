import React from "react";
import { Wrapper, Buttons, PlayButton, PlusButton } from "./styles";
import Play from "../../../../svg/play.svg";
import Plus from "../../../../svg/plus.svg";

const PopularMovie = ({ title }) => {
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
