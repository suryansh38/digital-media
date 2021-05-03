import styled from "styled-components";
import Slider from "./slider";
//import NewDisney from "./NewDisney";
//import Originals from "./Originals";
//import Recommends from "./recommends";
//import Trending from "./Trending";
import Viewers from "./viewer.js";
import { useEffect } from "react";



const Home = (props) => {
    return (
        
      <Container>
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
                    <a href="/">
                      <span>Sign Out</span>
                    </a>
                  </NavMenu>
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
export default Home;