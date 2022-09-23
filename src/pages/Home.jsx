import styled from "styled-components";
import Card from "../components/Card";

function Home() {
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}

export default Home;
