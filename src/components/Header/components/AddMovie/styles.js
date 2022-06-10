import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	margin-left: 60px;
	display: flex;
    align-items: center;
	cursor: pointer;
	img {
		position: absolute;
		top: 50%;
	}
	img:nth-child(2) {
		transform: rotate(90deg);
	}
	h3 {
		text-transform: uppercase;
		font-weight: 700;
		font-size: 18px;
		line-height: 18px;
		letter-spacing: 4px;
		padding-left: 20px;
		color: #FFFFFF;
		padding-top: 4px;
	}
`;

export { Wrapper };
