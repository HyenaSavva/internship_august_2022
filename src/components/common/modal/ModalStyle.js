import css from "styled-jsx/css";

export default css`
  .modal {
    position: absolute;
    background-color: #fff;
    z-index: 100;
    display: flex;
    flex-direction: column;
  }

  .modal__header {
    display: flex;
    justify-content: space-between;
  }

  /* small */
  @media screen and (max-width: 480px) {
  }

  /* medium */

  @media (min-width: 481px) and (max-width: 1024px) {
  }

  /* large */
  @media (min-width: 1025px) {
    .modal {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 80vh;
    }
  }
`;

export const modalImageListStyles = {
  width: { lg: "678px" },
  height: "56vh",
  margin: "20px auto",
};
