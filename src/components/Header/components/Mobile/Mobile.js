import React, { useContext } from "react";
import StateContext from "../../../../context/StateContext";
import InlineSVG from "svg-inline-react";
import MenuIcon from "../../../../svg/menu_icon.svg";
import Pulse from "react-reveal/Pulse";
import { Wrapper, Logo, User } from "./styles";

const Mobile = () => {
	const { movies, setMovies } = useContext(StateContext);
	return (
		<Pulse>
			<Wrapper>
				<InlineSVG
					src={MenuIcon}
					onClick={() => setMovies({ ...movies, menu: true })}
				></InlineSVG>
				<Logo src="/liteflix.png"></Logo>
				<User src="/user.png"></User>
			</Wrapper>
		</Pulse>
	);
};

export default Mobile;
