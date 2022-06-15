import styled from "styled-components";

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgba(36, 36, 36, 0.9);
	top: 0;
	left: 0;
	z-index: 20;
`;

const Block = styled.div`
	width: 100%;
	height: 100%;
	width: 90%;
	margin: auto;
	margin-top: 22px;
	margin-bottom: 100px;
	display: flex;
	max-height: 50px;
	align-items: center;
	justify-content: space-between;
	svg {
		width: 30px;
	}
	@media screen and (min-width: 800px) and (max-height: 800px) {
		margin-bottom: 20px;
	}
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: auto;
	svg {
		width: 21px;
	}
`;
const Link = styled.div`
	display: flex;
	margin-bottom: 40px;
	font-size: 22px;
	line-height: 22px;
	letter-spacing: 4px;
	&.add-movie {
		margin-bottom: 70px;
		margin-top: 30px;
	}
	a {
		text-decoration: none;
		color: #ffffff;
	}
	@media screen and (min-width: 800px) and (max-height: 800px) {
		margin-bottom: 20px;
		&.add-movie {
			margin-bottom: 350px;
		}
	}
`;

export { Wrapper, Block, Links, Link };
