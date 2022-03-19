import styled from "styled-components";

export const Container = styled.div`
  .createButton {
    margin: 38px 0 30px 0;
    align-self: flex-end;

    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #41c900;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }
`;

export const BrandStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  & > div {
    border-radius: 8px;
    width: 250px;
    padding: 10px;
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
  }
`;
