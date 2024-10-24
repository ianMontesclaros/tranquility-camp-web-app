import { LoginForm } from "@/features/authentication";
import { Logo } from "@/components/ui";
import { Heading } from "@/components/typography";

import styled from "styled-components";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading align="center" as="h1">
        Log in to your account
      </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
