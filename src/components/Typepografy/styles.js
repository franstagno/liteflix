import styled from "styled-components";

const Text = styled.div`
	font-family: ${(props) => props.theme[props.as]["fontFamily"]};
	font-size: ${(props) => props.theme[props.as]["fontSize"]};
	font-weight: ${(props) => props.theme[props.as]["fontWeight"]};
	line-height: ${(props) => props.theme[props.as]["lineHeight"]};
	letter-spacing: ${(props) => props.theme[props.as]["letterSpacing"]};
	color: ${(props) => props.theme[props.as]["color"]};
`;

export { Text };
