import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import axios from "axios";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "100px" : "202px")};
  background-color: #9999;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  /* background-color: #999; */
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div`
  line-height: 1;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
function Card({ type, video }) {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const channelUser = async () => {
      const res = await axios.get(`/user/find/${video.userId}`);
      setChannel(res.data);
    };
    channelUser();
  }, [video.userId]);

  return (
    <Link to="video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} />
        <Details>
          <ChannelImage src={channel.img} type={type} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} views • {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
