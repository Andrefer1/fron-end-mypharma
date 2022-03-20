import styled, { css } from "styled-components";

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  border: solid 1px red;

  span {
    color: red;
    font-size: 0.875rem;
  }
`;

export const InputStyles = styled.div<InputProps>`
  border: solid 1px blue;
  display: flex;
  align-items: center;

  background: #fff;
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
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    border: solid 1px red;
    height: 40px;
    margin-left: 10px;
    color: #b7b7cc;

    &::placeholder {
      color: #b7b7cc;
    }

    &[type="number"] {
      -webkit-appearance: none;
      -moz-appearance: textfield;
    }
  }
`;
