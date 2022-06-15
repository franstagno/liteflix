import React, { useState, useContext } from "react";
import StateContext from "../../context/StateContext";
import LinkAddMovie from "./components/AddMovie";
import Options from "./components/Options";
import Menu from "./components/Menu";
import AddMovie from "../AddMovie";
import { Wrapper, Logo, Brand } from "./styles";

const Header = () => {
	const { movies } = useContext(StateContext);
	return !movies.addMovie ? (
		<Wrapper>
			<Brand>
				<Logo src="/liteflix.png"></Logo>
				<LinkAddMovie></LinkAddMovie>
			</Brand>
			<Options></Options>
			{movies.menu && <Menu></Menu>}
		</Wrapper>
	) : (
		<AddMovie></AddMovie>
	);
};

export default Header;
