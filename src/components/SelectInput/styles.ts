import styled from "styled-components";

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  align-items: center;
  padding: 5px 24px;
  background: #fff;
  border-radius: 8px;

  & + div {
    margin-top: 15px;
  }

  select {
    width: 100%;
    font-size: 0.8rem;
    border: 0;
    height: 40px;
    color: #b7b7cc;
  }

  svg {
    margin-right: 6px;
  }
`;
