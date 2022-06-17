import styled from "styled-components";
import ButtonComponent from "../../Button";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	padding: 40px 20px;
`;

const Logo = styled.img``;

const Title = styled.h3`
	margin: 70px 0 40px;
	font-family: Bebas Neue Bold;
	font-size: 24px;
	line-height: 26px;
	text-align: center;
	letter-spacing: 4px;
`;

const Text = styled.p`
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	letter-spacing: 4px;
`;
const Button = styled(ButtonComponent)`
	margin-top: 90px;
	background: #ffffff;
	color: #242424;
`;

export { Wrapper, Logo, Title, Text, Button };
