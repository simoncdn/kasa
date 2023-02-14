import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import GalleryBtn from "./CarouselBtn";

export default function Carousel({ images, classname, id, cover, index }) {
  const [isTransitionInProgress, setIsTransitionInProgress] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const { filterIndex } = useContext(GlobalContext);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`logements/${id}`);
  };

  const changeSlide = (direction) => {
    if (isTransitionInProgress) {
      return;
    }
    setIsTransitionInProgress(true);

    setSlideIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }

      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });

    setTimeout(() => {
      setIsTransitionInProgress(false);
    }, 400);
  };

  useEffect(() => {
    if (slideIndex !== 1) {
      setSlideIndex(0);
    }
  }, [filterIndex]);

  return (
    <GalleryStyled className={classname}>
      {images.length > 1 ? (
        <>
          {images.map((image, index) => (
            <div
              key={index}
              className={slideIndex === index ? "slide active" : "slide"}
            >
              <img
                src={`${image}`}
                alt="images de la location"
                onClick={handleClick}
              />
            </div>
          ))}

          <GalleryBtn
            moveSlide={() => changeSlide("next")}
            direction={"next"}
          />
          <GalleryBtn
            moveSlide={() => changeSlide("prev")}
            direction={"prev"}
          />

          <div className="container-dots">
            {images.map((image, index) => (
              <div
                className={slideIndex === index ? "dot active" : "dot"}
                key={index}
              ></div>
            ))}
          </div>
        </>
      ) : (
        <div className="slide active">
          <img src={cover} alt="location" />
        </div>
      )}
    </GalleryStyled>
  );
}

const GalleryStyled = styled.div`
  position: relative;
  margin: 0px 0px;
  width: 100%;
  height: 70%;
  min-width: fit-content;
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  :hover {
    .btn-slide {
      opacity: 0.8;
    }
  }
  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
    }
    &.active {
      opacity: 1;
    }
  }

  .container-dots {
    position: absolute;
    display: flex;
    bottom: 0;
    .dot {
      width: 8px;
      height: 8px;
      background-color: white;
      opacity: 0.8;
      margin: 0px 3px;
      margin-bottom: 20px;
      border-radius: 50%;
      transition: all 400ms ease;
      &.active {
        opacity: 1;
        scale: 1.2;
        transition: all 400ms ease;
      }
    }
  }

  /* @media screen and (max-width: 768px) {
    height: 255px;
    margin: 20px 0px;
    .btn-slide {
      width: 30px;
      height: 30px;
    }
    .prev {
      left: 10px;
    }
    .next {
      right: 10px;
    }
  } */
`;
