import React from 'react';
import { Wrapper } from './styles';
import InlineSVG from 'svg-inline-react';
import MenuIcon from '../../../../svg/menu_icon.svg'

const Account = () => {
	return (
		<Wrapper>
			<InlineSVG src={MenuIcon} ></InlineSVG>
		</Wrapper>
	);
};

export default Account;