import css from "styled-jsx/css";

export const noBorder = {
	"& .MuiOutlinedInput-notchedOutline": {
		border: "none",
	},
};

export const filterBy = {
	"& .MuiOutlinedInput-notchedOutline": {
		border: "none",
	},
};

export default css`
	.flex {
		display: flex;
	}
	.tabs {
		align-items: center;
		justify-content: space-between;
	}
	.tabs--left {
		display: flex;
		align-items: center;
	}
	.tabs--right {
		justify-content: space-between;
		align-items: center;
	}
	.grid-buttons {
		margin-left: 40px;
	}
`;
