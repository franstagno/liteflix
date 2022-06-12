import React, { useState } from "react";
import { Wrapper, Logo, Brand } from "./styles";
import AddMovie from "./components/AddMovie";
import Options from "./components/Options";
import Menu from "./components/Menu";

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<Wrapper>
			<Brand>
				<Logo src="/liteflix.png"></Logo>
				<AddMovie></AddMovie>
			</Brand>
			<Options
				isOpenMenu={isOpenMenu}
				setIsOpenMenu={setIsOpenMenu}
			></Options>
			{isOpenMenu && (
				<Menu
					isOpenMenu={isOpenMenu}
					setIsOpenMenu={setIsOpenMenu}
				></Menu>
			)}
		</Wrapper>
	);
};

export default Header;
