import React from "react";
import InlineSVG from "svg-inline-react";
import Account from "../Account";
import Close from "../../../../svg/close.svg";
import { links } from "./utils";
import { Wrapper, Block, Links, Link } from "./styles";

const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
	return (
		<Wrapper>
			<Block>
				<InlineSVG
					src={Close}
					onClick={() => setIsOpenMenu(!isOpenMenu)}
				></InlineSVG>
				<Account></Account>
			</Block>
			<Links>
				{links.map((link) => (
					<Link className={link.svg && "add-movie"}>
						{link.svg && <InlineSVG src={link.svg}></InlineSVG>}
						<a href={link.url}>{link.name}</a>
					</Link>
				))}
			</Links>
		</Wrapper>
	);
};

export default Menu;
