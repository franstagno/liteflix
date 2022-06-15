import styled from "styled-components";

const Wrapper = styled.div`
	width: 90%;
	height: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const Background = styled.div`
	width: 100%;
	height: 100vh;
	${(props) =>
		props.src
			? `background-image: url(${props.src})`
			: `background: rgba(36,36,36,0.9);`};
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
`;
const Loading = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #242424;
`;

const Movies = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export { Wrapper, Background, Loading, Movies };
