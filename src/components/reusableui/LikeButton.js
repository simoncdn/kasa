import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../context/GlobalContext";
export default function LikeButton({ id }) {
  const { isLiked, setIsLiked, data } = useContext(GlobalContext);

  const favoriteToggle = (event) => {
    let lodgingsLiked = [...isLiked];
    let lodgingFiltered = data.find(
      (lodging) => lodging.id === event.target.id
    );
    let lodgingAlreadyLiked = lodgingsLiked.find(
      (lodging) => lodging.id === event.target.id
    );

    if (lodgingFiltered && !lodgingAlreadyLiked) {
      lodgingsLiked.push(lodgingFiltered);
      setIsLiked(lodgingsLiked);
    } else if (lodgingAlreadyLiked) {
      let lodgingsLikedWithoutSelectedLodging = lodgingsLiked.filter(
        (lodging) => lodging.id !== event.target.id
      );
      setIsLiked(lodgingsLikedWithoutSelectedLodging);
    }
  };

  return (
    <LikeButtonStyled>
      <button onClick={favoriteToggle}>
        <img
          id={id}
          src={
            isLiked.find((lodging) => lodging.id === id)
              ? "/Images/heartLiked.svg"
              : "/Images/heart.svg"
          }
          alt="like button"
        />
      </button>
    </LikeButtonStyled>
  );
}

const LikeButtonStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  button {
    background: transparent;
    border: none;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:active {
      scale: 1.1;
      transition: all 400ms ease;
    }
  }
`;
