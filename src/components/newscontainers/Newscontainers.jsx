import React, { Component } from "react";
import news from "../../models/news/news.js";
import "./Newscontainers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Newscontainers() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="news-container">
      <div className="cards">
        <Slider {...settings}>
          {
            news.map((n) => (
              <div className="card-container">
                <div className="card-preview">
                  <div className="card-image">
                    <a href={`/news/${n.key}`}><img src={n.preview} alt="image not found" /></a>
                  </div>
                </div>
                <div className="card-text">
                  <p className="card-title">{n.title}</p>
                  <p className="card-content">{n.content}</p>
                  <div className="card-button">
                    <a href={`/news/${n.key}`}>Read More!</a>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )

}

export default Newscontainers;