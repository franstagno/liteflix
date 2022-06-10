import React from "react";
import { Wrapper, Logo } from "./styles";
import Typography from "../Typepografy";
import AddMovie from "./components/AddMovie";
import Account from "./components/Account";


const Header = () => (
	<Wrapper>
		<Logo src="/liteflix.png"></Logo>
		<AddMovie></AddMovie>
		<Account></Account>
	</Wrapper>
);

export default Header;
