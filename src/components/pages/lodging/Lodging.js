import Footer from "../../reusableui/Footer";
import Header from "../../reusableui/header/Header";
import styled from "styled-components";
import LodgingContent from "./LodgingContent";

export default function Lodging() {
  return (
    <LodgingStyled>
      <Header />
      <LodgingContent />
      <Footer />
    </LodgingStyled>
  );
}

const LodgingStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 0px 50px;
  align-items: center;
  padding-bottom: 250px;

  @media screen and (max-width: 768px) {
    padding: 0 25px;
    padding-bottom: 250px;
  }
`;
