import styled from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import Image from "../Images/logo.png";
import Comment from "../components/Comment";
import Recommendations from "../components/Recommendations";
import Card from "../components/Card";

function Videos() {
  const Container = styled.div`
    display: flex;
    gap: 10px;
  `;
  const VideoWrapper = styled.div``;

  const Main = styled.div`
    flex: 5;
    /* background-color: #999; */
  `;

  const Recommendation = styled.div`
    flex: 2;
  `;
  const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
  `;

  const Impression = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin: 10px 0;
    align-items: center;
  `;
  const Buttons = styled.div`
    display: flex;
    color: ${({ theme }) => theme.text};
    gap: 10px;
  `;

  const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
  `;
  const Button = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
  `;

  const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
  `;

  const Channel = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
  `;
  const ChannelDetail = styled.div`
    color: ${({ theme }) => theme.text};
  `;
  const ChannelImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `;
  const ChannelTitle = styled.div`
    font-weight: 500;
  `;
  const Counter = styled.div`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textSoft};
    font-size: 12px;
  `;
  const ChannelText = styled.p`
    font-size: 14px;
  `;
  const Subscription = styled.button`
    background-color: #cc0000;
    margin: 0px 4px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 16px;
    cursor: pointer;
  `;

  return (
    <Container>
      <Main>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Title>CSS Crash Course with project</Title>
          <Impression>
            <Info>1000 views . Jan 2010</Info>
            <Buttons>
              <Button>
                <ThumbUpOffAltIcon />
                123
              </Button>
              <Button>
                <ThumbDownOffAltIcon />
                Dislike
              </Button>
              <Button>
                <ReplyIcon />
                Share
              </Button>
              <Button>
                <BeenhereOutlinedIcon />
                Save
              </Button>
            </Buttons>
          </Impression>
          <Hr />
        </VideoWrapper>

        <Channel>
          <ChannelImage src={Image} />
          <ChannelDetail>
            <ChannelTitle>SunnyTech</ChannelTitle>
            <Counter>18.9k Subscribers</Counter>
            <ChannelText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              quibusdam minus ipsam eaque nihil. Tenetur temporibus assumenda
              nesciunt laboriosam id voluptates ratione quasi expedita
            </ChannelText>
          </ChannelDetail>
          <Subscription>SUBSCRIBE</Subscription>
        </Channel>
        <Hr />
        <Comment />
      </Main>
      <Recommendation>
        {/* <Recommendations />
        <Recommendations />
        <Recommendations />
        <Recommendations />
        <Recommendations />
        <Recommendations />
        <Recommendations />
        <Recommendations />
        <Recommendations />
        <Recommendations /> */}
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
}

export default Videos;
