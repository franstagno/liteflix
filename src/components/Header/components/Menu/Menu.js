import React, { useContext } from "react";
import StateContext from "../../../../context/StateContext";
import InlineSVG from "svg-inline-react";
import Account from "../Account";
import Close from "../../../../svg/close.svg";
import { links } from "./utils";
import { Wrapper, Block, Links, Link } from "./styles";

const Menu = () => {
	const { movies, setMovies } = useContext(StateContext);
	return (
		<Wrapper>
			<Block>
				<InlineSVG
					src={Close}
					onClick={() => setMovies({ ...movies, menu: false })}
				></InlineSVG>
				<Account></Account>
			</Block>
			<Links>
				{links.map((link, index) => (
					<Link className={link.svg && "add-movie"} key={index}>
						{link.svg && <InlineSVG src={link.svg}></InlineSVG>}
						<a
							href={link.url}
							onClick={
								link.svg &&
								(() => setMovies({ ...movies, addMovie: true }))
							}
						>
							{link.name}
						</a>
					</Link>
				))}
			</Links>
		</Wrapper>
	);
};

export default Menu;
