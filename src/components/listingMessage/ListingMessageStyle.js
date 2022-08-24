import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css`
  .listing-message {
    display: flex;
    flex-direction: column;
  }

  /* mobile */
  @media screen and (max-width: 639px) {
    .listing-message {
      width: 95%;
    }
  }

  /* tablet */

  @media (min-width: 640px) and (max-width: 1023px) {
  }

  /* laptop */

  @media (min-width: 1024px) and (max-width: 1199px) {
  }

  /* desktop */

  @media (min-width: 1200px) {
    .listing-message {
      margin-top: 32px;
      width: 750px;
    }
  }
`;

export const messageTitle = {
  fontWeight: "700",
  marginBottom: "12px",
};

export const textareaStyle = {
  color: "#1C1C1E",
  borderRadius: "8px",
  [appTheme.breakpoints.only("mobile")]: {},
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    width: "750px",
  },
};

export const textareaErrorStyle = {
  borderColor: "#DD1018",
};

export const errorMessage = {
  color: "#DD1018",
};

export const sendBtn = {
  [appTheme.breakpoints.only("mobile")]: {
    marginTop: "12px",
    marginBottom: "68px",
    marginLeft: "78%",
  },
  [appTheme.breakpoints.only("tablet")]: {
    marginTop: "12px",
    marginBottom: "68px",
    marginLeft: "78%",
  },
  [appTheme.breakpoints.only("laptop")]: {
    marginTop: "12px",
    marginBottom: "68px",
    marginLeft: "78%",
  },
  [appTheme.breakpoints.only("desktop")]: {
    marginTop: "12px",
    marginBottom: "68px",
    marginLeft: "78%",
  },
};
