import styled from "styled-components";
import Header from "../../Header";

const Wrapper = styled.div`
	padding-top: 30px;
	display: flex;
	justify-content: space-between;
	svg {
		width: 27px;
		transform: scaleX(-1);
	}
	@media screen and (min-width: 800px) {
		display: none;
	}
`;

const Logo = styled.img`
	width: 100px;
	height: 30px;
`;

const User = styled.img`
	border-radius: 50%;
	width: 34px;
	margin-left: 25px;
`;

export { Wrapper, Logo, User };
