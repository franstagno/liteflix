import styled from "styled-components";

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
	font-family: Bebas Neue Light;
	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
const Text = styled.p``;

export { Wrapper, Text };
