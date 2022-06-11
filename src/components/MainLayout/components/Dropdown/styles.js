import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	img {
		margin-bottom: 2px;
		margin-left: 4px;
		opacity: ${(props) => (!props.isOpen ? "1" : "0")};
	}
`;
const Text = styled.p`
	cursor: pointer;
`;
const BoxDown = styled.div`
	display: ${(props) => (props.isOpen ? "block" : "none")};
	position: absolute;
	width: 220px;
	top: 25px;
	background: #242424;
	left: -31px;
`;

const Triangle = styled.div`
	display: ${(props) => (props.isOpen ? "block" : "none")};
	position: absolute;
	width: 12px;
	height: 12px;
	left: 124px;
	top: 20px;
	background: #242424;
	transform: rotate(45deg);
`;

const Option = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 15px;
	align-items: center;
	font-family: ${(props) =>
		props.selected ? "Bebas Neue Bold" : "Bebas Neue Light"};

	img {
		margin-bottom: 0;
		opacity: 1;
		height: 10px;
	}
`;

export { Wrapper, BoxDown, Triangle, Option, Text };
