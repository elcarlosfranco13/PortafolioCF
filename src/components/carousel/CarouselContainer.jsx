import React from "react";
import Carousel from "react-bootstrap/Carousel";
import crud from "../../media/crud.png";
import morty from "../../media/morty.png";
import pokedex from "../../media/pokedex.png";
import carousel from "./carousel.css";

const CarouselContainer = () => {
  return (
    <div className="carousel__container">
      <div className="carousel-caption__container">
      <h2 className="carousel-caption__title" >Mis proyectos</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem perferendis rerum ipsam eligendi a 
        necessitatibus unde et quaerat aliquam odit laudantium facere iure, iusto temporibus vero repellendus quae nesciunt.
        Accusantium!
      </p>
      </div>
      <Carousel controls={true} fade = {true} pause ={false} variant="dark">
        <Carousel.Item interval = {3000} className="image__container">
          <img className="carousel__image" src={crud} alt="First slide" />
          <Carousel.Caption className="carousel__caption">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval = {3000} className="image__container">
          <img className="carousel__image" src={pokedex} alt="Second slide" />
          <Carousel.Caption className="carousel__caption">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval = {3000} className="image__container">
          <img className="carousel__image" src={morty} alt="Third slide" />
          <Carousel.Caption className="carousel__caption">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
