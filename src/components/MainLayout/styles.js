import styled from "styled-components";

const Wrapper = styled.div`
	width: 90%;
	padding-top: 35px;
	margin: auto;
`;
const Background = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
`;
const WrapperSpinner = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #242424;
`;

export { Wrapper, Background, WrapperSpinner };
