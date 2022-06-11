import React, { useState } from "react";
import InlineSVG from "svg-inline-react";
import PlaySvg from "../../../../svg/play_big.svg";
import {
	Wrapper,
	Title,
	Hover,
	NotHover,
	Play,
	Info,
	Score,
	Year,
} from "./styles";

const Movie = ({ src, movie }) => {
	const [isOver, setIsOver] = useState(false);
	const year = movie.release_date.split("-")[0];
	const score = movie.vote_average;
	const title = movie.title;
	return (
		<Wrapper
			src={src}
			onMouseEnter={() => setIsOver(true)}
			onMouseLeave={() => setIsOver(false)}
		>
			<NotHover isOver={isOver}>
				<InlineSVG src={PlaySvg}></InlineSVG>
				<Title>{title}</Title>
			</NotHover>
			<Hover isOver={isOver}>
				<Play>
					<InlineSVG src={PlaySvg}></InlineSVG>
					<Title>
						<span>{title}</span>
					</Title>
				</Play>
				<Info>
					<Score>{score}</Score>
					<Year>{year}</Year>
				</Info>
			</Hover>
		</Wrapper>
	);
};

export default Movie;
