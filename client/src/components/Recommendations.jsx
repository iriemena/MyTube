import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;
const Image = styled.img`
  width: 100%;
  background-color: #9999;
  flex: 1;
`;

const Details = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Impression = styled.span`
  font-size: 10px;
`;
function Recommendations() {
  return (
    <Container>
      <Image />
      <Details>
        <Title>Special Javascript Course</Title>
        <Name>SunnyTech</Name>
        <Impression>123k views . 1 day ago</Impression>
      </Details>
    </Container>
  );
}

export default Recommendations;
