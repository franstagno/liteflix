import React from "react";
import LinkAddMovie from "../AddMovie";
import Options from "../Options";
import { Wrapper, Logo, Brand } from "./styles";

const Desktop = () => {
	return (
		<Wrapper>
			<Brand>
				<Logo src="/liteflix.png"></Logo>
				<LinkAddMovie></LinkAddMovie>
			</Brand>
			<Options></Options>
		</Wrapper>
	);
};

export default Desktop;
