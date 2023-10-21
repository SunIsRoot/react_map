//import { useState } from "react";
//import { Link } from "react-router-dom";
//import { isLoggedInVar } from "../apllo";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import routes from "../routes";
import AuthLayout from "../compoments/auth/Container";
//import { BaseBox } from "../compoments/shared";
import Button from "../compoments/auth/Button";
import Separator from "../compoments/auth/Separator";
import Input from "../compoments/auth/Input";
import FormBox from "../compoments/auth/FormBox";
import BottonBox from "../compoments/auth/BottomBox";
import userState from "react";
import { Helmet } from "react-helmet-async";
import PageTitle from "./PageTitle";
import { useForm } from "react-hook-form";

//import { css } from "styled-components";
//import { darkModeVar } from "../apllo";

// const Title = styled.h1`
//   color: ${(props) => props.theme.fontColor};
// `;

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  //register 사용시 사용 input에 name 필요
  const { register } = useForm();

  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form>
          <Input
            ref={register({ required: true, minLength: 5 })}
            name="username"
            type="text"
            placeholder="Username"
          />
          <Input
            ref={register({ required: true })}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button type="submit" value="Log in" />
        </form>
        <Separator></Separator>
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>

      <BottonBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
export default Login;
