import styled from "styled-components";
import ButtonComponent from "../../../components/Button";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	padding: 40px 0;
	.custom-progres-bar {
		width: 600px;
		margin: 15px 0;
		div {
			display: flex;
			align-items: center;
			height: 4px !important;
			div {
				height: 10px !important;
			}
		}
	}
`;

const Title = styled.h3`
	color: #64eebc;
	font-size: 20px;
	line-height: 20px;
	letter-spacing: 4px;
	font-family: Bebas Neue Bold;
`;
const InputText = styled.input`
	background: none;
	border: none;
	border-bottom: 1px solid #ffffff;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	letter-spacing: 4px;
	color: #ffffff;
	padding-bottom: 5px;
	&:focus {
		outline: none;
	}
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
	cursor: pointer;
	width: 600px;
	display: flex;
	justify-content: center;
`;
const Button = styled(ButtonComponent)`
	background: #ffffff;
	color: #242424;
	margin-top: 40px;
`;

const Text = styled.p``;
const Legend = styled.p`
	align-self: flex-end;
	cursor: pointer;
`;

const WrapperBar = styled.div`
	display: flex;
	flex-direction: column;
	margin: 40px 0;
`;
export {
	Wrapper,
	Title,
	InputText,
	InputFile,
	Close,
	Button,
	Upload,
	Text,
	Legend,
	WrapperBar,
};
