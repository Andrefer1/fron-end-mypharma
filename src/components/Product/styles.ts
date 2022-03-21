import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  border-radius: 8px;
  width: 190px;
  max-width: 190px;
  padding: 10px 15px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    border-bottom: solid 1px grey;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    border-top: solid 1px grey;
    padding: 5px 0;
    flex: 1;

    button {
      padding: 10px 10px;
      width: 45%;
      border-radius: 8px;
      border: 0;

      &:first-child {
        background: #e9dc43;
      }
      &:last-child {
        background: #ff0000;
        color: white;
      }
    }
  }
`;
