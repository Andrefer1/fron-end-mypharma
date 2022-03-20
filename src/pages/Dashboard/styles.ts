import styled from "styled-components";

export const Container = styled.div`
  .links {
    margin-top: 20px;

    .link {
      border: solid 1px;
      padding: 10px 15px;
      color: blue;
      border-radius: 8px;
      text-decoration: none;

      &:first-child {
        margin-right: 20px;
      }

      &:hover {
        color: orange;
      }
    }
  }

  .createButton {
    margin: 48px 0 20px 0;
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

  h2 {
    margin-bottom: 15px;
  }
`;

export const ProductStyles = styled.div`
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
    flex: 0 0 200px;
    gap: 10px;
    }
  }
`;
