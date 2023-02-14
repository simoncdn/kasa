import styled from "styled-components";
import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";
import Card from "./Card";

export default function Cards() {
  const { data } = useContext(GlobalContext);

  return (
    <CardsStyled>
      {data.map((item, index) => (
        <Card key={index} item={item} index={index} />
      ))}
    </CardsStyled>
  );
}

const CardsStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-row-gap: 3rem;
  grid-column-gap: 1.5rem;
  @media screen and (max-width: 1245px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0rem;
    grid-row-gap: 0.5rem;
  }
`;
