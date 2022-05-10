import React, { useEffect } from "react";
import Styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import db from "../firebase";
import Viewer from "./Viewers";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  });
  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Movies />
    </Container>
  );
}

export default Home;
const Container = Styled.main`
overflow:hidden;
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
  &:before{
      background:url("/images/home-background.png");
      background-size:cover;
      background-repeat:no repeat;
      background-position:fixed;
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      z-index:-1;
      content:"";
  }




`;
