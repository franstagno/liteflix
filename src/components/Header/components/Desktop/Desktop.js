import React from "react";
import LinkAddMovie from "../AddMovie";
import Options from "../Options";
import Pulse from "react-reveal/Pulse";
import { Wrapper, Logo, Brand } from "./styles";

const Desktop = () => {
	return (
		<Pulse>
			<Wrapper>
				<Brand>
					<Logo src="/liteflix.png"></Logo>
					<LinkAddMovie></LinkAddMovie>
				</Brand>
				<Options></Options>
			</Wrapper>
		</Pulse>
	);
};

export default Desktop;
