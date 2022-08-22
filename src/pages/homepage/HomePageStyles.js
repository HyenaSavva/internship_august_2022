import css from "styled-jsx/css";

export const customContainer = {
	"& .MuiContainer-root": {
		padding: "190px",
	},
};

export default css`
	.header--container {
		position: relative;
		height: 90px;
		z-index: 100;
		margin-bottom: 50px;
	}
	.content--container {
		width: 70%;
	}
	.container {
		position: relative;
	}
	.main {
		margin-top: 120px;
	}
	.main h1 {
		margin-bottom: 26px;
	}
`;
