import styled from "styled-components";

const Wrapper = styled.div`
	background-image: url(${(props) => props.src});
	width: 220px;
	height: 145px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
	border-radius: 4px;
	margin-bottom: 20px;
	@media screen and (min-width: 800px) and (max-height: 750px) {
		width: 190px;
		height: 115px;
	}
`;

const NotHover = styled.div`
	width: 100%;
	height: 100%;
	display: ${(props) => (!props.isOver ? "flex" : "none")};
	align-items: flex-end;
	justify-content: center;
	position: relative;
	i {
		top: calc(50% - 20px);
		left: calc(50% - 20px);
		position: absolute;

		svg {
			width: 40px;
			height: 40px;
			background: rgba(36, 36, 36, 0.5);
			border-radius: 20px;
		}
	}
`;
const Title = styled.p`
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	letter-spacing: 4px;
	margin-bottom: 10px;
	font-family: Bebas Neue Light;
	display: ${(props) => (!props.isOver ? "block" : "none")};
`;

const Hover = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(36, 36, 36, 0.7);
	display: ${(props) => (!props.isOver ? "none" : "flex")};
	flex-direction: column;
	justify-content: end;
	cursor: pointer;
`;

const Play = styled.div`
	display: flex;
	height: 32px;
	margin: 0 16px;
	align-items: center;
	p {
		margin-bottom: 0;
		text-align: start;
		max-height: 32px;
		margin-left: 5px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		font-family: Bebas Neue Regular;
		font-size: 19px;
		font-family: auto;
		span {
			font-family: Bebas Neue Light;
			font-size: 16px;
		}
	}
	svg {
		width: 20px;
		height: 20px;
		background: rgba(36, 36, 36, 0.5);
		border-radius: 20px;
		background: #64eebc;
		path {
			fill: #242424;
		}
	}
`;
const Info = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px 16px 16px;
`;
const Score = styled.div`
	font-size: 14px;
	line-height: 12px;
	letter-spacing: 2px;
	margin-left: 5px;
`;
const Year = styled.div`
	font-size: 14px;
	line-height: 12px;
	letter-spacing: 2px;
`;

const ScoreWrapper = styled.div`
	display: flex;
`;

export {
	Wrapper,
	Title,
	Hover,
	NotHover,
	Play,
	Info,
	Score,
	Year,
	ScoreWrapper,
};
