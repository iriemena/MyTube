import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import { css } from "styled-components";
import { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utility/Theme";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

function App() {
  const Container = styled.div`
    display: flex;
  `;

  const Main = styled.div`
    flex: 7;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  `;

  const Wrapper = styled.div`
    padding: 22px 96px;
  `;

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <Container>
          <Router>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="login" element={<SignIn />} />
                    <Route path="video">
                      <Route path=":id" element={<Video />} />
                    </Route>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </Router>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
