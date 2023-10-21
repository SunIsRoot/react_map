import { Link } from "react-router-dom";
import { BaseBox } from "../shared";
import styled from "styled-components";

const SBottonBox = styled(BaseBox)`
  padding: 20px 0;
  text-align: center;
  a {
    font-weight: 600;
    margin-left: 5px;
    color: ${(props) => props.theme.accent};
  }
`;

function BottonBox({ cta, link, linkText }) {
  return (
    <SBottonBox>
      <span> {cta}</span>
      <Link to={link}>{linkText} </Link>
    </SBottonBox>
  );
}

export default BottonBox;
