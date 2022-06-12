import React from "react";
import Account from "../Account";
import InlineSVG from "svg-inline-react";
import MenuIcon from "../../../../svg/menu_icon.svg";
import { Wrapper } from "./styles";

const Options = ({ isOpenMenu, setIsOpenMenu }) => {
	return (
		<Wrapper>
			<InlineSVG
				src={MenuIcon}
				onClick={() => setIsOpenMenu(!isOpenMenu)}
			></InlineSVG>
			<Account></Account>
		</Wrapper>
	);
};

export default Options;
