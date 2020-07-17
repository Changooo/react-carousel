import React, {useState} from "react";
import Slider from "react-slick";
import CustomCard from "./CustomCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss"

function Carousel(props) {
  var initData = [
    {name: "김기덕", title: "이게 제목입니다.", date: "2020.06.10"},
    {name: "이진수", title: "제목은 이렇게 짓는다", date: "2020.09.11"},
    {name: "김장원", title: "제목은 영어로 타이틀", date: "2020.11.13"},
    {name: "박정기", title: "타이틀은 한국어로 제목", date: "2020.03.15"},
    {name: "김진아", title: "제목제목메족메족", date: "2020.04.23"},
    {name: "이회남", title: "제목타이틀제목타이틀", date: "2020.04.17"},
    {name: "강철주", title: "타목제이틀타목제이틀", date: "2020.01.13"},
    {name: "김신애", title: "제목목제제목목제제목", date: "2020.02.12"},
    {name: "곽철우", title: "제목은 이걸로 하겠습니다.", date: "2020.04.23"},
    {name: "오중수", title: "제목은 제목입니다.", date: "2020.06.14"},
    {name: "장진영", title: "근데 이제 제목을 곁들인", date: "2020.04.22"},
    {name: "이주열", title: "와 제목이다 신난다", date: "2020.06.11"},
    {name: "김기덕", title: "이게 제목입니다.", date: "2020.06.10"},
    {name: "이진수", title: "제목은 이렇게 짓는다", date: "2020.09.11"},
    {name: "김장원", title: "제목은 영어로 타이틀", date: "2020.11.13"},
    {name: "박정기", title: "타이틀은 한국어로 제목", date: "2020.03.15"},
    {name: "김진아", title: "제목제목메족메족", date: "2020.04.23"},
    {name: "이회남", title: "제목타이틀제목타이틀", date: "2020.04.17"},
    {name: "강철주", title: "타목제이틀타목제이틀", date: "2020.01.13"},
    {name: "김신애", title: "제목목제제목목제제목", date: "2020.02.12"},
    {name: "곽철우", title: "제목은 이걸로 하겠습니다.", date: "2020.04.23"},
    {name: "오중수", title: "제목은 제목입니다.", date: "2020.06.14"},
    {name: "장진영", title: "근데 이제 제목을 곁들인", date: "2020.04.22"},
    {name: "이주열", title: "와 제목이다 신난다", date: "2020.06.11"},

  ];
  const [data] = useState(initData);
  const cards = data.map((item, idx) => {
    return (
      <div className="aSlide">
          <CustomCard name={item.name} title={item.title} date={props.year} key={idx} />
      </div>
    );
  })
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows:true,
    className: 'slides',
    dotsClass: "slick-dots",
  };
    return (
        <Slider {...settings}>
          {cards}
      </Slider>
    );
  }
  
  export default Carousel;