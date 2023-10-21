import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 20px;
  background-color: #fafafa;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  box-shadow: 1px 1px rgb(0, 0, 0, 0.3);
  &::placeholder {
    font-size: 16px;
  }
`;

export default Input;
