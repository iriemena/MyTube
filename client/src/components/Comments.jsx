import styled from "styled-components";
import Img from "../Images/logo.png";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
  text-align: justify;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Avater = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
  margin-right: 20px;
`;
function Comments() {
  return (
    <Container>
      <Avater src={Img} />
      <Wrapper>
        <Name>
          John Doe <Date>1 Day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ipsam
          repudiandae. Rerum quaerat mollitia magni ut delectus impedit dolore
        </Text>
      </Wrapper>
    </Container>
  );
}

export default Comments;
