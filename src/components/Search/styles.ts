import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
`;

export const Content = styled.div`
  border: solid 1px var(--grey-300);
  border-radius: 20px;
  padding: 5px 15px;

  display: flex;
  align-items: center;
  gap: 5px;

  input {
    width: 100%;
    height: 30px;
    border: 0;
    color: var(--grey-300);

    &::placeholder {
      color: var(--cc);
    }
  }

  svg {
    color: var(--grey-300);
  }
`;
