import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";

function Menu({ darkMode, setDarkMode }) {
  const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
  `;

  const Wrapper = styled.div`
    padding: 18px 26px;
  `;
  const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-weight: bold;
    margin-bottom: 25px;
  `;
  const Img = styled.img`
    height: 1.6rem;
  `;

  const Items = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 6.5px 0;

    &:hover {
      background-color: ${({ theme }) => theme.soft};
    }
  `;

  const Line = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({ theme }) => theme.soft};
  `;
  const Login = styled.div`
    font-size: 11px;
  `;
  const Button = styled.button`
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 3px 5px;
  `;
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} />
            MyTube
          </Logo>
        </Link>
        <Items>
          <HomeIcon />
          Home
        </Items>
        <Items>
          <ExploreIcon /> Explore
        </Items>
        <Items>
          <SubscriptionsIcon /> Subscription
        </Items>
        <Line />
        <Items>
          <LibraryAddIcon /> Library
        </Items>
        <Items>
          <HistoryIcon /> History
        </Items>
        <Line />
        <Login>
          Sign in to like videos, comment, and subscribe
          <Link to="login" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Line />
        <Items>
          <LibraryMusicIcon /> Music
        </Items>
        <Items>
          <SportsBasketballOutlinedIcon /> Sports
        </Items>
        <Items>
          <SportsEsportsOutlinedIcon /> Gaming
        </Items>
        <Items>
          <MovieCreationOutlinedIcon /> Movies
        </Items>
        <Items>
          <FeedOutlinedIcon /> News
        </Items>
        <Items>
          <LiveTvOutlinedIcon /> Live
        </Items>
        <Line />
        <Items>
          <SettingsOutlinedIcon /> Settings
        </Items>
        <Items>
          <FlagOutlinedIcon /> Report
        </Items>
        <Items>
          <HelpOutlineOutlinedIcon /> Help
        </Items>
        <Items onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon /> {darkMode ? "Light" : "Dark"} Mode
        </Items>
      </Wrapper>
    </Container>
  );
}

export default Menu;
