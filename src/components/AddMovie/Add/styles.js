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
	.input-file {
		border: 1px dashed #ffffff;
		margin: 40px 0;
		padding: 30px 0;
		cursor: pointer;
		width: 600px;
		display: flex;
		justify-content: center;
		min-width: auto;
		max-width: auto;
		border-radius: 0;
		height: auto;
		.file-types {
			display: none;
		}
		div {
			flex-grow: 0;
			span {
				font-size: 16px;
				line-height: 16px;
				letter-spacing: 4px;
				text-align: center;
				color: #ffffff;
				span {
					text-decoration: none;
				}
			}
		}
		svg {
			display: none;
		}
		@media screen and (max-width: 800px) {
			width: 270px;
			padding: 20px 0;
		}
	}
	@media screen and (max-width: 800px) {
		.custom-progres-bar {
			width: 270px;
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
const Close = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	svg {
		width: 25px;
	}
	@media screen and (max-width: 800px) {
		display: none;
	}
`;
const ButtonSubmit = styled(ButtonComponent)`
	background: #ffffff;
	color: #242424;
	margin-top: 40px;
`;
const ButtonExit = styled(ButtonComponent)`
	border: 1px solid rgba(255, 255, 255, 0.5);
	margin-top: 20px;
	@media screen and (min-width: 800px) {
		display: none;
	}
`;

const Text = styled.p``;
const Legend = styled.p`
	align-self: flex-end;
	cursor: ${(props) =>
		props.progress === 100 && !props.error ? "initial" : "pointer"};
	color: ${(props) =>
		props.progress === 100 && !props.error ? "#64EEBC" : "#FFFFFF"};
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
	Close,
	ButtonSubmit,
	Text,
	Legend,
	WrapperBar,
	ButtonExit,
};
