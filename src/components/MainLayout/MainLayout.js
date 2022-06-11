import React, { useState, useEffect } from "react";
import Header from "../Header";
import Spinner from "../Spinner";
import PopularMovie from "./components/PopularMovie";
import { Wrapper, Background, WrapperSpinner } from "./styles";
import { getPopularMovie } from "./utils";

const MainLayout = () => {
	const [popularMovie, setPopularMovie] = useState({});
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		(async () => {
			const res = await getPopularMovie();
			setPopularMovie(res);
			setLoader(false);
		})();
	}, []);
	return loader ? (
		<WrapperSpinner>
			<Spinner></Spinner>
		</WrapperSpinner>
	) : (
		<Background
			src={`https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path}`}
		>
			<Wrapper>
				<Header></Header>
				<PopularMovie title={popularMovie.title}></PopularMovie>
			</Wrapper>
		</Background>
	);
};

export default MainLayout;
