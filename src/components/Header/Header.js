import React from "react";
import { Wrapper, Logo } from "./styles";
import Typography from "../Typepografy";
import AddMovie from "./components/AddMovie";

const Header = () => (
	<Wrapper>
		<Logo src="/liteflix.png"></Logo>
		<AddMovie></AddMovie>
	</Wrapper>
);

export default Header;
