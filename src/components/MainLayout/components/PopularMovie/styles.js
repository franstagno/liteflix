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
		font-family: "Bebas Neue Light";
		span {
			font-family: "Bebas Neue Bold";
		}
	}
	h1 {
		font-size: 74px;
		line-height: 100px;
		letter-spacing: 16px;
		color: #64eebc;
		font-family: "Bebas Neue Bold";
	}
	@media screen and (max-width: 800px) {
		width: 100%;
		justify-content: center;
		align-items: center;
		h1 {
			line-height: 61px;
			font-size: 45px;
			text-align: center;
		}
	}
	/* @media screen and (min-width: 800px) and (max-height: 750px) {
		h1 {
			line-height: 61px;
			font-size: 55px;
		}
	} */
`;

const Buttons = styled.div`
	display: flex;
	margin-bottom: 162px;
	@media screen and (min-width: 800px) and (max-height: 750px) {
		margin-bottom: 20px;
	}
	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

const PlayButton = styled(Button)`
	background: #242424;
	margin-right: 25px;

	i {
		display: flex;
		margin-right: 10px;
		svg {
			width: 11px;
		}
	}
	@media screen and (max-width: 800px) {
		margin: 10px 0 15px 0;
	}
`;

const PlusButton = styled(Button)`
	background: rgba(36, 36, 36, 0.5);
	border: 1px solid rgba(255, 255, 255, 0.5);
	i {
		display: flex;
		margin-right: 10px;
		svg {
			width: 25px;
		}
	}
`;

export { Wrapper, Buttons, PlayButton, PlusButton };
