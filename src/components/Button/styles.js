import styled from "styled-components";
import SpinnerComponent from "../Spinner";

const Wrapper = styled.button`
	cursor: pointer;
	background: none repeat scroll 0 0 transparent;
	border: medium none;
	border-spacing: 0;
	font-weight: normal;
	list-style: none outside none;
	margin: 0;
	padding: 0;
	text-align: left;
	text-decoration: none;
	text-indent: 0;
	color: #ffffff;
	font-family: Bebas Neue Regular;
	width: 250px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 4px;
	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
const Text = styled.p``;
const Spinner = styled(SpinnerComponent)`
	width: 10px;
	height: 10px;
`;

export { Wrapper, Text, Spinner };
