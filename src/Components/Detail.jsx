import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
        }
      });
  }, []);
  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg} alt="ee" />
      </Background>
      <ImageTitle>
        <img src={movie.titleImg} alt="b" />
      </ImageTitle>
      <Controls>
        <Playbutton>
          <img src="/images/play-icon-black.png" alt="play" />
          <span>PLAY</span>
        </Playbutton>
        <Trailerbutton>
          <img src="/images/play-icon-white.png" alt="play" />
          <span>Trailer</span>
        </Trailerbutton>
        <Addbutton>
          <span>+</span>
        </Addbutton>
        <Groupwatchbutton>
          <img src="/images/group-icon.png" alt="group" />
        </Groupwatchbutton>
      </Controls>
      <Subtitle>{movie.subTitle}</Subtitle>
      <Description>{movie.description}</Description>
    </Container>
  );
}

export default Detail;
const Container = Styled.div`
min-height:calc(100vh-70px);
padding:0 calc(3.5vw+5px);

`;
const Background = Styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1; 
opacity:0.8;
img{
    width:100%;
    height:100%;
    object-fit:cover; 
}
`;
const ImageTitle = Styled.div`
height:30vh;
width:35vw;
min-height:170px;
margin-top:20px;
min-width:200px;    



img{

    height:100%;
    width:100%;
    object-fit:contain;
}
`;
const Controls = Styled.div`
display:flex;
align-items:center;
margin-top:20px;
`;
const Playbutton = Styled.button` 
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
margin-right:22px;
background-color:rgb(249,249,249);
border:none;
letter-spacing:1.8px;
margin-left:20px;
cursor:pointer;
padding:0 24px;
span{
    color:black;
}
&:hover{
    background:rgb(198,198,198);
}
`;
const Trailerbutton = Styled(Playbutton)`
background:rgb(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
text-transform:uppercase;
span{
    color:white;
    
}

`;
const Addbutton = Styled.button`
width:44px;
height:44px;
display:flex;
border-radius:50%;
border:2px solid white;
align-items:center;
justify-content:center;
background:rgb(0,0,0,0.6);
margin-right:16px;
cursor:pointer;
span{
    font-size:30px;
}
`;
const Groupwatchbutton = Styled(Addbutton)`
background:black;
`;
const Subtitle = Styled.div`
margin-top:26px;    
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-left:20px;
`;
const Description = Styled.div`
line-height:1.4;
font-size:20px;
width:800px;
max-width:760px;
margin-top:16px;
margin-left:20px;
color:rgb(249,249,249);
text-align:justify;
`;
