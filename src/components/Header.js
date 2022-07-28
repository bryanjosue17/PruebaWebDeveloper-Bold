import React from "react";
import logo from "../assets/header/logo.svg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
  },
];

const Header = () => {
  return (
    <div>
      <div
        style={{
          width: "150px",
          height: "100px",
          paddingLeft: "75px",
          paddingTop: "30px",
          position: "absolute",
          zIndex: "1",
        }}
      >
        <img src={logo} alt="React Logo" />
      </div>

      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Header;
