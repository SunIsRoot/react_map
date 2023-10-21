import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import routes from "../routes";
import styled from "styled-components";
import AuthLayout from "../compoments/auth/Container";
import Button from "../compoments/auth/Button";
import Separator from "../compoments/auth/Separator";
import Input from "../compoments/auth/Input";
import FormBox from "../compoments/auth/FormBox";
import BottonBox from "../compoments/auth/BottomBox";
import { FatLink } from "../compoments/shared";
import { Helmet } from "react-helmet-async";
import PageTitle from "./PageTitle";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
`;
function SignUp() {
  // const [potato, setPotato] = useState(false);
  //const togglePotato = () => setPotato((currunt) => !currunt);
  return (
    <AuthLayout>
      <PageTitle title="Sign up"></PageTitle>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        <form>
          <Input type="text" placeholder="Email" required />
          <Input type="text" placeholder="Name" required />
          <Input type="text" placeholder="Username" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit" value="Log in" />
        </form>
      </FormBox>

      <BottonBox cta="Have an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}
export default SignUp;
