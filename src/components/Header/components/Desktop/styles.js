import styled from "styled-components";

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
	padding-top: 30px;
	@media screen and (max-width: 800px) {
		display: none;
	}
`;
const Logo = styled.img`
	height: 23px;
`;
const Brand = styled.div`
	display: flex;
	align-items: center;
`;

export { Wrapper, Logo, Brand };
