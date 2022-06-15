import React, { useContext } from "react";
import StateContext from "../../../../context/StateContext";
import Account from "../Account";
import InlineSVG from "svg-inline-react";
import MenuIcon from "../../../../svg/menu_icon.svg";
import { Wrapper } from "./styles";

const Options = ({ isOpenMenu, setIsOpenMenu }) => {
	const { movies, setMovies } = useContext(StateContext);
	return (
		<Wrapper>
			<InlineSVG
				src={MenuIcon}
				onClick={() => setMovies({ ...movies, menu: true })}
			></InlineSVG>
			<Account></Account>
		</Wrapper>
	);
};

export default Options;
