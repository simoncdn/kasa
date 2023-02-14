import styled from "styled-components";
import LodgingInfoBottom from "./LodgingInfoBottom";
import LodgingInfoTop from "./LodgingInfoTop";

export default function LodgingInfo({
  location,
  tags,
  host,
  rating,
  description,
  equipments,
}) {
  return (
    <LodgingInfoStyled>
      <LodgingInfoTop
        location={location}
        tags={tags}
        host={host}
        rating={rating}
      />
      <LodgingInfoBottom description={description} equipments={equipments} />
    </LodgingInfoStyled>
  );
}

const LodgingInfoStyled = styled.div`
  width: 100%;
  flex-direction: column;
  @media screen and (max-width: 768px) {
  }
`;
