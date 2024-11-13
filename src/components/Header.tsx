import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, maxWidth, padding } from "../GlobalStyled";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  font-size: 20px;
  padding: 0 ${padding.sidePaddingPc};
  /* background-color: yellow; */
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1.5px solid #e9e9e9;
  box-shadow: inset;
`;

const ConWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: ${maxWidth.maxWidthPc};
`;

const Logo = styled.div`
  color: ${colors.point};
  /* background-color: red; */
  text-align: center;
  display: flex;
  align-items: center;

  img {
    width: 160px;
    margin-left: 6px;
  }

  a {
    display: flex;
    align-items: center;
  }
`;

const Manu = styled.ul`
  width: 600px;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogBox = styled.ul`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const Login = styled.li`
  margin-right: 40px;
  a {
    color: #707070;
  }
`;

const Search = styled.li`
  position: relative;
  text-align: center;

  .display_icon {
    color: #707070;
    opacity: 1;
  }

  .hover_icon {
    color: #707070;
    position: absolute;
    top: -2px;
    left: 14px;
    font-size: 24px;
    opacity: 0;
  }

  :hover {
    .display_icon {
      opacity: 0;
      transition: 0.5s;
    }

    .hover_icon {
      opacity: 1;
      transition: 0.5s;
    }
  }
`;

export const Header = () => {
  return (
    <Container>
      <ConWrap>
        <Logo>
          <Link to={routes.home}>
            <img src="https://ifh.cc/g/g2bMy3.png" />
          </Link>
        </Logo>
        <Manu>
          <li>
            <Link to={routes.musical}>뮤지컬</Link>
          </li>
          <li>
            <Link to={routes.actor}>배우</Link>
          </li>
          <li>
            <Link to={routes.notice}>공지사항 & 소식</Link>
          </li>
        </Manu>
        <LogBox>
          <Login>
            <Link to={routes.signIn}>로그인</Link>
          </Login>
          <Search>
            <Link to={routes.search}>
              <p className="display_icon">Search</p>
              <p className="hover_icon">
                <FaSearch />
              </p>
            </Link>
          </Search>
        </LogBox>
      </ConWrap>
    </Container>
  );
};
