import styled from "styled-components";

const Wrapper = styled.div`
	width: 20%;
	margin-bottom: 80px;
	text-transform: uppercase;
	color: #ffffff;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: 4px;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		margin-bottom: 20px;
		font-family: Bebas Neue Light;
		span {
			font-family: "Bebas Neue Bold";
			padding-left: 5px;
		}
	}
`;
const Movie = styled.div`
	background-image: url(${(props) => props.src});
	width: 220px;
	height: 145px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
	border-radius: 4px;
	margin-bottom: 20px;
`;
export { Wrapper, Movie };
