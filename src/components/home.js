import styled from "styled-components";
import Slider from "./slider";
//import NewDisney from "./NewDisney";
//import Originals from "./Originals";
//import Recommends from "./Recommends";
//import Trending from "./Trending";
import Viewers from "./viewer.js";
import { useEffect } from "react";



const Home = (props) => {
  /*  const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
  
    useEffect(() => {
      console.log("hello");
      db.collection("movies").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          console.log(recommends);
          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;
  
            case "new":
              newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
              break;
  
            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;
  
            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
          }
        });
  
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
    }, [userName]);*/
  
    return (
        
      <Container>
          <Stuff>gghfgh</Stuff>
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
export default Home;