import React from "react";
import Styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="images/logo.svg" />
      <NavMenu>
        <a href="# ">
          <img src="images/home-icon.svg" alt="imag" />
          <span>HOME</span>
        </a>
        <a href="# ">
          <img src="images/search-icon.svg" alt="imag" />
          <span>SEARCH</span>
        </a>
        <a href="# ">
          <img src="images/watchlist-icon.svg" alt="imag" />
          <span>WATCHLIST</span>
        </a>
        <a href="# ">
          <img src="images/original-icon.svg" alt="imag" />
          <span>ORIGINALS</span>
        </a>
        <a href="# ">
          <img src="images/movie-icon.svg" alt="imag" />
          <span>MOVIES</span>
        </a>
        <a href="# ">
          <img src="images/series-icon.svg" alt="imag" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src="https://tse1.mm.bing.net/th?id=OIP.TUZxSRMq6m2pqs9UId34LAHaEo&pid=Api&rs=1&c=1&qlt=95&w=161&h=100"></UserImage>
    </Nav>
  );
}

export default Header;

const Nav = Styled.nav`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding: 0 36px ;
`;

const Logo = Styled.img`
width:80px;`;

const NavMenu = Styled.div`
display:flex;
flex:1  ;
margin-left:25px;
 a{
     display:flex;
     align-items:center;
     padding:0 12px;
     text-decoration:none;
     img{
         height:20px;
     }
     span{
         font-size:13px;
         letter-spacing:1.42px;
         position:relative;
         &:after{
             content:"";
             height:2px;
             background:white;
             position:absolute;
             bottom:-6px;
             opacity:0;
             transform: scaleX(0);
             transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
             left:0;
             right:0;
         }
     }
     &:hover{
         span:after {
             opacity:1;
             transform:scaleX(1);
         }
     }
 }
`;
const UserImage = Styled.img`
width:40px;
height:40px;
border-radius:50%;
cursor:pointer;


`;
