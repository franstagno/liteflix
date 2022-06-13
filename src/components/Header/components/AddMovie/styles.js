import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	margin-left: 60px;
	display: flex;
	align-items: center;
	cursor: pointer;
	i {
		display: flex;
		svg {
			height: 25px;
		}
	}
	h3 {
		text-transform: uppercase;
		font-size: 18px;
		line-height: 18px;
		letter-spacing: 4px;
		padding-left: 5px;
		padding-top: 4px;
		width: 168px;
	}
`;

export { Wrapper };
