import React, { useEffect } from "react";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.phtotURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;

      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.phtotURL,
        })
      );
      history.push("/");
    });
  };
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };
  return (
    <Nav>
      <Logo src="images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
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
          <UserImage
            onClick={signOut}
            src="https://tse1.mm.bing.net/th?id=OIP.TUZxSRMq6m2pqs9UId34LAHaEo&pid=Api&rs=1&c=1&qlt=95&w=161&h=100"
          ></UserImage>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = Styled.nav`
height:70px;
overflow:hidden;
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
              transform-origin:left center;
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
const Login = Styled.div`
cursor:pointer;
border:1px solid #f9f9f9;
padding:8px 16px;
border-radius:4px;
letter-spacing:1.5px;
text-transform:uppercase;
background-color: rgba(0,0,0,0.6);
transition:all 0.2s ease 0s;
&:hover{
    background-color:#f9f9f9;
    color:black;
    border-color:transparent;
}
`;
const LoginContainer = Styled.div`
display:flex;
justify-content:flex-end;
flex:1;
`;
