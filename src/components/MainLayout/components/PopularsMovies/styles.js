import styled from "styled-components";

const Wrapper = styled.div`
	width: 220px;
	margin-bottom: 80px;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: 4px;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 700px;
	@media screen and (min-width: 800px) and (max-height: 750px) {
		height: auto;
		margin-bottom: 0;
		div:nth-of-type(4) {
			display: none;
		}
	}
`;

export { Wrapper };
