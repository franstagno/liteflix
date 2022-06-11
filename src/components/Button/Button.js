import React from "react";
import { Wrapper } from "./styles";
import InlineSVG from "svg-inline-react";

const Button = ({ icon, text, ...rest }) => (
	<Wrapper {...rest}>
		{icon && <InlineSVG src={icon}></InlineSVG>}
		<p>{text}</p>
	</Wrapper>
);

export default Button;
