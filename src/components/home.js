import styled from "styled-components";
import Slider from "./slider";
import Viewers from "./viewer.js";


const Home = (props) => {
    return (
        
      <Container>
           <Nav>
              <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
              </Logo>
        
              {0 ? (
                <Login  href="/logf">Login</Login>
              ) : (
                <>
                  <NavMenu>
                    <a href="/home">
                      <img src="/images/home-icon.svg" alt="HOME" />
                      <span>HOME</span>
                    </a>
                    <a>
                      <img src="/images/search-icon.svg" alt="SEARCH" />
                      <span>SEARCH</span>
                    </a>
                    <a>
                      <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                      <span>WATCHLIST</span>
                    </a>
                    <a>
                      <img src="/images/original-icon.svg" alt="ORIGINALS" />
                      <span>ORIGINALS</span>
                    </a>
                    <a>
                      <img src="/images/movie-icon.svg" alt="MOVIES" />
                      <span>MOVIES</span>
                    </a>
                    <a>
                      <img src="/images/series-icon.svg" alt="SERIES" />
                      <span>SERIES</span>
                    </a>
                    
                  </NavMenu>
                  <SignOut >
                  <img src="/images/o.jpg" alt="sign out" />
                    <DropDown >
                    <a href="/">
                      <span>Sign Out</span>
                    </a>
                    </DropDown>
                  </SignOut>
                </>
              )}
            </Nav>
          <Slider></Slider>
          <Viewers/>
        
      </Container>
    );
  };



const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.jpg") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
const Stuff = styled.p`
  color: white;
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 10px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0px;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;


export default Home;