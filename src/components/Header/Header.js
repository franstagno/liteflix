import React, { useContext } from "react";
import StateContext from "../../context/StateContext";
import Menu from "./components/Menu";
import AddMovie from "../AddMovie";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";
import {} from "./styles";

const Header = () => {
	const { movies } = useContext(StateContext);
	return (
		<>
			<Desktop></Desktop>
			<Mobile></Mobile>
			{movies.menu && <Menu></Menu>}
			{movies.addMovie && <AddMovie></AddMovie>}
		</>
	);
};

export default Header;
