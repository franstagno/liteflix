import React from "react";
import InlineSVG from "svg-inline-react";
import { Wrapper, Text, Spinner } from "./styles";

const Button = ({ icon, text, href = "#", loading = false, ...rest }) => {
	return (
		<a href={href}>
			<Wrapper {...rest}>
				{!loading && icon && <InlineSVG src={icon}></InlineSVG>}
				{!loading && text && <Text>{text}</Text>}
				{loading && <Spinner></Spinner>}
			</Wrapper>
		</a>
	);
};

export default Button;
