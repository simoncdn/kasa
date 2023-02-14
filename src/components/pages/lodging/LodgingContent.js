import lodgingsData from "../../../data/lodging.json";
import LodgingInfo from "./LodgingInfo";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import Booking from "./Booking";
import Gallery from "./Gallery";

export default function LodgingContent() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!lodgingsData.find((item) => item.id === id)) {
      return navigate("/error404");
    }
  });

  const backToHome = () => {
    navigate("/");
  };
  return (
    <LodgingContentStyled>
      <button className="home-button" onClick={backToHome}>
        <AiOutlineArrowLeft className="return-icon" />
      </button>

      {lodgingsData
        .filter((item) => item.id === id)
        .map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>

              <Gallery images={item.pictures} />

              <div className="info-and-booking">
                <LodgingInfo
                  title={item.title}
                  location={item.location}
                  tags={item.tags}
                  host={{
                    name: `${item.host.name}`,
                    picture: `${item.host.picture}`,
                  }}
                  rating={item.rating}
                  description={item.description}
                  equipments={item.equipments}
                />

                <Booking price={item.price} />
              </div>
            </div>
          );
        })}
    </LodgingContentStyled>
  );
}
const LodgingContentStyled = styled.div`
  margin-top: 110px;
  .home-button {
    width: 40px;
    margin-top: 10px;
    height: 40px;
    background-color: #ffffff32;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-bottom: 10px;
    border-radius: 50%;
    :hover {
      background-color: #ffffff60;
      transition: all 400ms ease;
    }
    .return-icon {
      font-size: 16px;
      color: white;
    }
  }

  h1 {
    color: white;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 40px;
  }

  .info-and-booking {
    width: 100%;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 60% 40%;
    justify-items: self-end;
  }
  @media screen and (max-width: 1024px) {
    .info-and-booking {
      grid-template-columns: 1fr;
      justify-items: start;
    }
    h1 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
`;
