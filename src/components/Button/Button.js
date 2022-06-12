import React from "react";
import { Wrapper, Text } from "./styles";
import InlineSVG from "svg-inline-react";

const Button = ({ icon, text, ...rest }) => (
	<Wrapper {...rest}>
		{icon && <InlineSVG src={icon}></InlineSVG>}
		{text && <Text>{text}</Text>}
	</Wrapper>
);

export default Button;
