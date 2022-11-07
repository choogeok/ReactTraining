import { fontFamily, fontSize } from "@mui/system";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from '../../../images/image1.jpg';
import image2 from '../../../images/image2.jpg';
import image3 from '../../../images/image3.jpg';

const styles = {
  color:"blue",
  fontSize:"38px"
}

function playerImage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={styles}>Player Number 1</h3>
          <p>Player Number 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={styles}>Player Number 2</h3>
          <p>Player Number 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={styles}>Player Number 3</h3>
          <p>
            Player Number 3
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    );
}

export default playerImage;
