import styled from "styled-components";

export default function CarouselBtn({ moveSlide, direction }) {
  return (
    <GalleryBtnStyled
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={
          direction === "next"
            ? "/Images/RightArrow.svg"
            : "/Images/LeftArrow.svg"
        }
        alt="left arrow"
      />
    </GalleryBtnStyled>
  );
}

const GalleryBtnStyled = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
  opacity: 0;
  border-radius: 50%;
  transition: 400ms ease;
  z-index: 100;

  img {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    cursor: pointer;
  }
  &.prev {
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
  &.next {
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;
