import styled from "styled-components";
import Button from "../../../Button";

const Wrapper = styled.div`
	width: calc(100% - 220px);
	display: flex;
	flex-direction: column;
	justify-content: end;
	h2 {
		font-size: 20px;
		line-height: 20px;
		letter-spacing: 4px;
		color: #ffffff;
		font-family: "Bebas Neue Light";
		span {
			font-family: "Bebas Neue Bold";
		}
	}
	h1 {
		font-size: 74px;
		line-height: 100px;
		letter-spacing: 16px;
		text-transform: uppercase;
		color: #64eebc;
		font-family: "Bebas Neue Bold";
	}
`;

const Buttons = styled.div`
	display: flex;
	margin-bottom: 162px;
`;

const PlayButton = styled(Button)`
	width: 248px;
	height: 56px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #242424;
	color: #ffffff;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 4px;
	i {
		display: flex;
		margin-right: 10px;
		svg {
			width: 11px;
		}
	}
`;

const PlusButton = styled(Button)`
	width: 248px;
	height: 56px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(36, 36, 36, 0.5);
	border: 1px solid rgba(255, 255, 255, 0.5);
	color: #ffffff;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 4px;
	margin-left: 24px;
	i {
		display: flex;
		margin-right: 10px;
		svg {
			width: 25px;
		}
	}
`;

export { Wrapper, Buttons, PlayButton, PlusButton };
