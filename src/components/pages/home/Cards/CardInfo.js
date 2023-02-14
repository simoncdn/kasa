import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CardInfo({ id, title, rate, tags, location, price }) {
  return (
    <CardInfoStyled to={`logements/${id}`} className="card-info">
      <div className="title">
        <p>{title}</p>
        <div className="stars">
          <AiFillStar className="icon" />
          <span>{rate}</span>
        </div>
      </div>
      <p className="location">{location}</p>
      <div className="price">
        <p>
          <span>{price}</span> par nuit
        </p>
      </div>
      <div className="tags-container">
        <ul>
          {tags.map((element, index) => (
            <li key={index} className="tag">
              {element}
            </li>
          ))}
        </ul>
      </div>
    </CardInfoStyled>
  );
}

const CardInfoStyled = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 10px 5px;
  color: white;
  flex-direction: column;
  border-radius: 15px;
  flex: 1;
  /* color: #333; */
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    font-size: 18px;
    margin-bottom: 5px;
    width: 100%;
    font-weight: 600;
    /* white-space: nowrap; */
    p {
      width: 100%;
      /* overflow: hidden;
      text-overflow: ellipsis; */
    }
    .stars {
      height: 100%;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 16px;
        margin-right: 5px;
      }
      span {
        font-weight: 400;
      }
    }
  }
  .tags-container {
    width: 100%;
    position: relative;
    display: flex;
    text-decoration: none;
    align-items: center;
    margin-top: 20px;
    ul {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      width: auto;
      height: 25px;
      list-style-type: none;
      font-size: 12px;
      padding: 5px 10px;
      margin-right: 5px;
      background-color: #ffffff32;
      border-radius: 10px;
      color: #fff;
      font-weight: 600;

      /* background-color: #333;
        background-color: #ff6060;
        color: #fff; */
    }
  }
  .price {
    font-size: 16px;
    font-weight: 400;
    span {
      font-weight: 700;
    }
  }
`;
