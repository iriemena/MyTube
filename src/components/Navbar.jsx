import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

function Navbar() {
  const Container = styled.div`
    height: 56px;
    position: relative;
    background-color: ${({ theme }) => theme.bgLighter};
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    padding: 0 20px;
  `;
  const Button = styled.button`
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 3px 5px;
  `;
  const Input = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    padding: 5px;
  `;

  const Search = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    border: 1px solid gray;
    border-radius: 5px;
  `;

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>

        <Link to="login" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
