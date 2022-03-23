import styled, { css } from "styled-components";

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  margin-bottom: 15px;

  span {
    color: red;
    font-size: 0.875rem;
  }
`;

export const InputStyles = styled.div<InputProps>`
  display: flex;
  align-items: center;

  background: var(--white);
  border-radius: 8px;
  padding: 5px 20px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--orange-500);
      border-color: var(--orange-500);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--orange-500);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    height: 40px;
    margin-left: 10px;
    color: var(--purple-100);

    &::placeholder {
      color: var(--purple-100);
    }

    &[type="number"] {
      -webkit-appearance: none;
      -moz-appearance: textfield;
    }
  }
`;
