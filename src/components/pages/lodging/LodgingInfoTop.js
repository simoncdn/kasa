import React from "react";
import styled from "styled-components";
import Rating from "./Rating";

export default function LodgingInfoTop({ location, tags, host, rating }) {
  return (
    <LodgingInfoTopStyled>
      <div className="location-and-tags">
        <h2>{location}</h2>
        <div className="tags-container">
          <ul>
            {tags.map((element, index) => (
              <li key={index} className="tag">
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="host-and-rating">
        <div className="host">
          <p>{host.name}</p>
          <img src={host.picture} alt="host img" />
        </div>
        <Rating rating={rating} />
      </div>
    </LodgingInfoTopStyled>
  );
}
const LodgingInfoTopStyled = styled.div`
  display: flex;
  justify-content: space-between;
  .location-and-tags {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      color: white;
      font-weight: 400;
      font-size: 30px;
    }
    .tags-container ul {
      margin: 0px 0px;
      display: flex;
      width: 100%;
      li {
        list-style-type: none;
        color: white;
        background-color: #ffffff32;
        font-weight: 600;
        border-radius: 10px;
        padding: 5px 10px;
        margin-right: 10px;
      }
    }
  }

  .host-and-rating {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    .host {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      p {
        color: white;
        font-size: 18px;
        margin-right: 15px;
        width: min-content;
      }
      img {
        width: 60px;
        border-radius: 50%;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 24px;
    }
    .tags-container ul {
      li {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .star-grey {
      width: 15px;
      margin-left: 0px;
    }
    .star-red {
      width: 15px;
      margin-left: 0px;
      margin-right: 5px;
    }
  }
`;
