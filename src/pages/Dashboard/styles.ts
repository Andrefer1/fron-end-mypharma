import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  & > div {
    :not(:first-child) {
      display: flex;
      justify-content: center;
    }
  }

  section {
    right: 0;
  }

  .links {
    margin-top: 20px;

    .link {
      min-width: 120px;
      padding: 10px 15px;
      color: blue;
      border: solid 1px;
      border-radius: 8px;
      text-decoration: none;
      text-align: center;
      transition: all 0.2s;

      &:first-child {
        margin-right: 20px;
      }

      &:hover {
        color: white;
        background: blue;
      }
    }
  }

  .createButton {
    margin: 38px 0 30px 0;
    align-self: flex-end;

    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;
    transition: filter 0.2s;

    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover {
      filter: brightness(0.9);
    }

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
    flex: 1 1 190px;
  }
`;
