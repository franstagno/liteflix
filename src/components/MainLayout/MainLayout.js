import React, { useState, useEffect } from "react";
import Header from "../Header";
import Spinner from "../Spinner";
import { Wrapper, Background, WrapperSpinner } from "./styles";
import { getPopularMovie } from "./utils";

const MainLayout = () => {
	const [popularMovies, setPopularMovies] = useState({});
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		(async () => {
			const res = await getPopularMovie();
			setPopularMovies(res);
			setLoader(false);
		})();
	}, []);
	return loader ? (
		<WrapperSpinner>
			<Spinner></Spinner>
		</WrapperSpinner>
	) : (
		<Background
			src={`https://image.tmdb.org/t/p/original/${popularMovies.backdrop_path}`}
		>
			<Wrapper>
				<Header></Header>
			</Wrapper>
		</Background>
	);
};

export default MainLayout;
