import React from "react";
import styled from "styled-components";

export default function LodgingInfoBottom({ description, equipments }) {
  return (
    <LodgingInfoBottomStyled>
      <div className="description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div className="equipments">
        <h3>Équipements</h3>
        <div className="equipments-list">
          {equipments.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </LodgingInfoBottomStyled>
  );
}

const LodgingInfoBottomStyled = styled.div`
  margin-top: 50px;
  width: 100%;
  border-top: 2px solid grey;

  .equipments {
    margin: 10px 0;
    padding: 10px 0px 30px 0px;
    h3 {
      margin-bottom: 20px;
      color: white;
      font-size: 24px;
      font-weight: 400;
    }
    p {
      color: white;
    }
  }

  .description {
    border-bottom: 2px solid grey;
    padding: 10px 0px 30px 0px;
    h3 {
      margin-bottom: 20px;
      color: white;
      font-size: 24px;
      font-weight: 400;
    }
    p {
      color: white;
    }
  }
  @media screen and (max-width: 1024px) {
    .equipments,
    .description {
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
`;
