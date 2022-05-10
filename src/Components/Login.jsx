import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import Homee from "../Components/Homee";
function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <Signup>
            <Link to="/home">GET ALL THERE</Link>
          </Signup>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTAlogo2 src="/images/cta-logo-two.png"></CTAlogo2>
        </CTA>
      </Content>
    </Container>
  );
}

export default Login;
const Container = Styled.div`
 position:relative;
height:calc(100vh - 70px);
display:flex;
align-items:top;
justify-content:center; 
&:before{
    background:url("/images/login-background.jpg");
    background-size:cover;
    background-repeat:no repeat;
    background-position:top;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    opacity:0.8;
    z-index:-1;
    content:"";
}

`;
const Content = Styled.div``;
const CTA = Styled.div`
  max-width:650px;
  padding:80px 40px;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:100px;
`;
const CTALogoOne = Styled.img``;
const Signup = Styled.a`
 width:100%;
 background-color:#0063e5;
 font-weight:bold;
 color:#f9f9f9;
 border-radius:4px;
 text-align:center;
 font-size:18px;
 padding:17px 0;
 cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin:bottom:12px;
 &:hover{
     background:#0483ee;
 }
`;
const Description = Styled.p`
color: rgb(243, 243, 243);
    font-size: 11px;
    margin: 0px 0px 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;
const CTAlogo2 = Styled.img`

width:90%;
`;
