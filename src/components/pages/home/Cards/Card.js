import styled from "styled-components";
import CardInfo from "./CardInfo";
import Gallery from "./Gallery";
import LikeButton from "../../../reusableui/LikeButton";

export default function Card({ item, index }) {
  return (
    <CardStyled>
      <Gallery
        images={item.pictures}
        classname="gallery"
        id={item.id}
        cover={item.cover}
        index={index}
      />
      <LikeButton id={item.id} />
      <CardInfo
        title={item.title}
        rate={item.rating}
        tags={item.tags}
        location={item.location}
        id={item.id}
        price={item.price}
      />
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 550px;
  .location {
    font-size: 14px;
    margin-bottom: 2px;
  }

  /* @media screen and (max-width: 1350px) {
    max-width: 370px;
  } */
`;