import { appTheme } from "themes/themes";
import css from "styled-jsx/css";

export const shareBtn = {
	width: 92,
	color: "primary",
	fontSize: "14px",
	fontWeight: "600",

	"&:hover": {
		backgroundColor: "#fff",
	},
};

export default css`
	* {
		box-sizing: border-box;
	}
	.header--left {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header--searchbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 0px;
	}
	.header--right {
		display: flex;
		align-items: center;
		color: #4d5464;
		gap: 30px;
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 22px;
	}
	.header--icon {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.navbar {
		border-bottom: 1px solid black;
		margin-bottom: 10px;
		position: fixed;
		top: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		padding: 0px;
		width: 100%;
		gap: 30px;
		height: 92px;
		left: 0px;
		background: #fff;
	}
`;
