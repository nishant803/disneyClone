import React from "react";
import Styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {
  let setting = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...setting}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="d" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="d" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="d" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="d" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;
const Carousel = Styled(Slider)`
ul li button{
    &:before{
        font-size:10px;
        color:rgb(150,158,171);
    }
}
li.slick-active button:before{
    color:white;
}
button{
    z-index:1;
}




margin-top:20px;
.slick-list{
    overflow:visible;
}`;
const Wrap = Styled.div`
cursor:pointer;
img{
    width:100%;
    height:100%;
    border-radius:4px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;   
    transition-duration:300ms;

    &:hover{
        border:4px solid rgb(249,249,249,0.8);
    }
}`;
