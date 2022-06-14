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
	ScoreWrapper,
} from "./styles";

const Movie = ({ src, movie }) => {
	if (Object.keys(movie).length === 0) return;
	const [isOver, setIsOver] = useState(false);
	const year = movie.release_date && movie.release_date.split("-")[0];
	const score = movie.vote_average && movie.vote_average;
	const title = movie.title && movie.title;
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
				{score && year && (
					<Info>
						<ScoreWrapper>
							<img src="/star.png"></img>
							<Score>{score}</Score>
						</ScoreWrapper>
						<Year>{year}</Year>
					</Info>
				)}
			</Hover>
		</Wrapper>
	);
};

export default Movie;
