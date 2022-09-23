import styled from "styled-components";

function SignIn() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.text};
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.soft};
    background-color: ${({ theme }) => theme.bgLighter};
    padding: 20px 50px;
    gap: 10px;
  `;
  const Title = styled.h1`
    font-size: 24px;
  `;
  const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
  `;
  const Input = styled.input`
    background-color: transparent;
    width: 100%;
    color: ${({ theme }) => theme.text};
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.soft};
    outline: none;
  `;
  const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
  `;
  const Footer = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.textSoft};
  `;
  const Links = styled.div`
    margin-left: 50px;
  `;
  const Link = styled.span`
    margin-left: 20px;
  `;
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to MyTube</SubTitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
        <Title>Or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign up</Button>
      </Wrapper>
      <Footer>
        English (US)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </Footer>
    </Container>
  );
}

export default SignIn;
