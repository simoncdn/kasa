import React from "react";
import styled from "styled-components";
export default function Gallery({ images }) {
  return (
    <MosaiqueStyled>
      {images.map((image, index) => (
        <div className={`part${index}`} key={index}>
          <img src={image} alt="lodging" />
        </div>
      ))}
    </MosaiqueStyled>
  );
}

const MosaiqueStyled = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 25px;
  overflow: hidden;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: minmax(1fr, max-content) repeat(4, 1fr);
  grid-template-rows: repeat(2, 50%);
  position: relative;
  overflow: hidden;
  .part0,
  .part1,
  .part2,
  .part3,
  .part4 {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .part0 {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  .part1 {
    grid-column: 3/4;
  }
  .part2 {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  .part3 {
    grid-column: 4/5;
    grid-row: 1/2;
  }
  .part4 {
    grid-column: 4/5;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    height: 400px;
    .part0 {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .part1 {
      grid-column: 2/3;
    }
    .part2 {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .part3 {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }
`;
