import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  borderColor: "rgb(219, 219, 219)",
};
export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

// 글로벌 css는 어떤 태그에 적용할 건지까지 정확히 써야됨.
//globalstyle은 theme내부에 접근 가능
export const GlobalStyles = createGlobalStyle`
${reset}
input{
  all:unset;
}
*{
  box-sizing:border-box;
}
body{
    background-color:  #fafafa;

    font-size:14px;
    font-family:'Open Sans', sans-serif;
    color: rgb(38,38,38);

    a{
      text-decoration: none;
    }
}
`;
