import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  width: 190px;
  max-width: 190px;
  padding: 10px 15px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 10px;

  .content {
    padding: 10px 0;
    border-top: solid 1px var(--grey-300);
    border-bottom: solid 1px var(--grey-300);

    h5:not(:first-child) {
      margin-top: 5px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    transition: filter 0.2s;

    button {
      padding: 10px 10px;
      width: 45%;
      border-radius: 8px;
      border: 0;

      &:hover {
        filter: brightness(0.9);
      }

      &:first-child {
        background: var(--yellow-500);
      }
      &:last-child {
        background: var(--red-500);
        color: white;
      }
    }
  }
`;
