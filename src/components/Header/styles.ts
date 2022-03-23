import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

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
    background: var(--pink-500);
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
