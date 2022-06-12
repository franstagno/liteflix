import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;
const Notification = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 25px;
	svg {
		width: 23px;
	}
	i:nth-of-type(2) {
		position: absolute;
		bottom: -17px;
		svg {
			width: 10px;
			padding-bottom: 10px;
		}
	}
`;

const User = styled.img`
	border-radius: 50%;
	width: 34px;
	margin-left: 25px;
`;
export { Wrapper, Notification, User };
