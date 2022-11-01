import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Home({ type }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    getVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card video={video} />
      ))}
    </Container>
  );
}

export default Home;
