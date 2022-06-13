import React, { useState } from "react";
import { Wrapper, Logo, Brand } from "./styles";
import LinkAddMovie from "./components/AddMovie";
import Options from "./components/Options";
import Menu from "./components/Menu";
import AddMovie from "../AddMovie";

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isAddMovie, setIsAddMovie] = useState(false);
	return !isAddMovie ? (
		<Wrapper>
			<Brand>
				<Logo src="/liteflix.png"></Logo>
				<LinkAddMovie
					isAddMovie={isAddMovie}
					setIsAddMovie={setIsAddMovie}
				></LinkAddMovie>
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
	) : (
		<AddMovie
			isAddMovie={isAddMovie}
			setIsAddMovie={setIsAddMovie}
		></AddMovie>
	);
};

export default Header;
