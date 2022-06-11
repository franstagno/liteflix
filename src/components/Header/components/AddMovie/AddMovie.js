import React from "react";
import InlineSVG from "svg-inline-react";
import Plus from "../../../../svg/plus.svg";
import { Wrapper } from "./styles";

const AddMovie = () => {
	return (
		<Wrapper>
			<InlineSVG src={Plus}></InlineSVG>
			<h3>agregar película</h3>
		</Wrapper>
	);
};

export default AddMovie;
