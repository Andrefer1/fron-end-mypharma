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
      border: solid 1px;
      padding: 10px 15px;
      color: blue;
      border-radius: 8px;
      text-decoration: none;

      &:hover {
        color: white;
        background: blue;
      }

      &:first-child {
        margin-right: 20px;
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
`;

export const BrandStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  & > div {
    flex: 1 1 190px;
  }
`;
