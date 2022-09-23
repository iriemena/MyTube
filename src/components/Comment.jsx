import styled from "styled-components";
import Img from "../Images/logo.png";
import Comments from "./Comments";

function Comment() {
  const Container = styled.div``;

  const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `;

  const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
  `;
  return (
    <Container>
      <NewComment>
        <Image src={Img} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comments />
      <Comments />
      <Comments />
    </Container>
  );
}

export default Comment;
