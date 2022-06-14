import React from "react";
import { Wrapper, Logo, Title, Text, Button } from "./styles";

const Success = () => {
	return (
		<Wrapper>
			<Logo src="/liteflix.png"></Logo>
			<Title>¡felicitaciones!</Title>
			<Text>liteflix The Movie fue correctamente subida.</Text>
			<Button text="ir a home" href="/"></Button>
		</Wrapper>
	);
};

export default Success;
