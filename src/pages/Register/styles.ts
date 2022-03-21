import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #f0f0f5;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  padding: 20px 20px;

  #link {
    border: solid 1px;
    padding: 10px 15px;
    color: blue;
    border-radius: 8px;
    text-decoration: none;
    text-align: center;
    margin-top: 15px;

    display: block;
    transition: all 0.2s;

    &:hover {
      color: white;
      background: blue;
    }
  }
`;

export const Form = styled(Unform)`
  button {
    width: 100%;
    height: 50px;
    border: 0;
    color: white;
    border-radius: 8px;
    background: #ff1493;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
