import routes from "../routes";
import styled from "styled-components";
import AuthLayout from "../compoments/auth/Container";
import Button from "../compoments/auth/Button";
import Input from "../compoments/auth/Input";
import FormBox from "../compoments/auth/FormBox";
import BottonBox from "../compoments/auth/BottomBox";
import { FatLink } from "../compoments/shared";
import PageTitle from "./PageTitle";
import { useEffect } from "react";
import MakeMap from "./MakeMap";
import { BaseBox } from "../compoments/shared";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 5;
  height: 200px;
`;

const Container = styled.div`
  width: 393px;
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  form {
    z-index: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

function Start() {
  return (
    <Container>
      <form onsubmit="searchPlaces(); return false;">
        <Input
          type="text"
          placeholder="출발지를 입력하세요!"
          id="keyword"
          required
        />
      </form>
      <ul id="placesList"></ul>
      <div id="pagination"></div>
      <MakeMap></MakeMap>
    </Container>
  );
}
export default Start;
