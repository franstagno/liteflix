import styled from "styled-components";
import ButtonComponent from "../../components/Button";

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background: #242424;
	top: 0;
	left: 0;
	z-index: 20;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px;
`;

const Block = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	padding: 40px;
`;

const Text = styled.h3``;
const InputText = styled.input`
	background: none;
	border: none;
	border-bottom: 1px solid #ffffff;
`;
const InputFile = styled.input`
	display: none;
`;
const Close = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	svg {
		width: 25px;
	}
`;
const Upload = styled.div`
	border: 1px dashed #ffffff;
	margin: 40px 0;
	padding: 40px;
`;
const Button = styled(ButtonComponent)`
	background: #ffffff;
	color: #242424;
	text-transform: uppercase;
	margin-top: 40px;
	width: 250px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { Wrapper, Block, Text, InputText, InputFile, Close, Button, Upload };
