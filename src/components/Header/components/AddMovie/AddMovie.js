import React, { useContext } from "react";
import StateContext from "../../../../context/StateContext";
import InlineSVG from "svg-inline-react";
import Plus from "../../../../svg/plus.svg";
import { Wrapper } from "./styles";

const AddMovie = () => {
	const { movies, setMovies } = useContext(StateContext);
	return (
		<Wrapper onClick={() => setMovies({ ...movies, addMovie: true })}>
			<InlineSVG src={Plus}></InlineSVG>
			<h3>agregar película</h3>
		</Wrapper>
	);
};

export default AddMovie;
