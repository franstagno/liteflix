import React from "react";
import { Wrapper, Logo, Menu } from "./styles";
import AddMovie from "./components/AddMovie";
import Account from "./components/Account";

const Header = () => (
	<Wrapper>
		<Menu>
			<Logo src="/liteflix.png"></Logo>
			<AddMovie></AddMovie>
		</Menu>
		<Account></Account>
	</Wrapper>
);

export default Header;
