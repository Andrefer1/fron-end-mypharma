import styled from "styled-components";

export const Container = styled.div`
  max-width: 155px;
`;

export const Content = styled.div`
  p {
    font-size: 1.2rem;
    white-space: nowrap;
    margin-bottom: 10px;
  }

  button {
    font-size: 1rem;
    color: white;
    border: none;
    border-radius: 8px;
    background: #ff1493;
    padding: 20px 25px;
    transition: filter 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      filter: brightness(0.9);
      cursor: pointer;
    }

    svg {
      margin-left: 25px;
      color: white;
    }
  }
`;
