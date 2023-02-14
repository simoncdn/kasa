import Header from "../../reusableui/header/Header";
import Footer from "../../reusableui/Footer";
import Banner from "../../reusableui/Banner";
import styled from "styled-components";
import Filters from "./Filters/Filters";
import Cards from "./Cards/Cards";

export default function Home() {
  return (
    <HomeStyled>
      <Header />

      <Banner
        image={"/Images/Paris.jpg"}
        title="Chez vous, partout et ailleurs"
      />

      <Filters />

      <Cards />

      <Footer />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
  padding: 0px 50px;
  padding-bottom: 250px;
  @media screen and (max-width: 768px) {
    padding: 0px 25px;
    padding-bottom: 250px;
  }
`;
