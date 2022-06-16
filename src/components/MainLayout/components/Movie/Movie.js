import React, { useState, useContext } from "react";
import StateContext from "../../../../context/StateContext";
import InlineSVG from "svg-inline-react";
import PlaySvg from "../../../../svg/play_big.svg";
import DeleteSvg from "../../../../svg/delete.svg";
import { doc, deleteDoc, getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../utils";
import { getMyMovies } from "../../utils";
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
	Delete,
} from "./styles";

const Movie = ({ src, movie, category }) => {
	if (Object.keys(movie).length === 0) return;
	const { movies, setMovies } = useContext(StateContext);
	const [isOver, setIsOver] = useState(false);
	const year = movie.release_date && movie.release_date.split("-")[0];
	const score = movie.vote_average && movie.vote_average;
	const title = movie.title && movie.title;

	const handleDelete = async () => {
		if (!category === "myMovies") return;
		const firebaseApp = initializeApp(firebaseConfig);
		const db = getFirestore(firebaseApp);
		await deleteDoc(doc(db, "movies", movie.id));
		const newMovies = await getMyMovies();
		setMovies({ ...movies, myMovies: newMovies });
	};

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
				{category !== "myMovies" ? (
					<>
						<Play>
							<InlineSVG src={PlaySvg}></InlineSVG>
							<Title>
								<span>{title}</span>
							</Title>
						</Play>
						<Info>
							<ScoreWrapper>
								<img src="/star.png"></img>
								<Score>{score}</Score>
							</ScoreWrapper>
							<Year>{year}</Year>
						</Info>
					</>
				) : (
					<Delete onClick={() => handleDelete()}>
						<InlineSVG src={DeleteSvg}></InlineSVG>
					</Delete>
				)}
			</Hover>
		</Wrapper>
	);
};

export default Movie;
