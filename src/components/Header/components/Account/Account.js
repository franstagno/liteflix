import React from "react";
import { Wrapper, Notification, User } from "./styles";
import InlineSVG from "svg-inline-react";
import MenuIcon from "../../../../svg/menu_icon.svg";
import Bell from "../../../../svg/bell.svg";
import Bell2 from "../../../../svg/bell2.svg";

const Account = () => {
	return (
		<Wrapper>
			<InlineSVG src={MenuIcon}></InlineSVG>
			<Notification>
				<InlineSVG src={Bell}></InlineSVG>
				<InlineSVG src={Bell2}></InlineSVG>
			</Notification>
			<User src="/user.png"></User>
		</Wrapper>
	);
};

export default Account;
