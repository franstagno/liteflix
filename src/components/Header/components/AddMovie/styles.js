import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	img {
		position: absolute;
		top: 50%;
	}
	img:nth-child(2) {
		transform: rotate(90deg);
	}
	p {
		text-transform: uppercase;
	}
`;

export { Wrapper };
