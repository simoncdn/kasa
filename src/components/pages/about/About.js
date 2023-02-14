import Banner from "../../reusableui/Banner";
import Header from "../../reusableui/header/Header";
import Collapse from "./Collapse";
import Footer from "../../reusableui/Footer";
import styled from "styled-components";

export default function About() {
  return (
    <AboutStyled>
      <Header />
      <Banner image={"/Images/chicago.jpg"} title={""} />
      <div className="collapse-bloc">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 50px;
  padding-bottom: 200px;
  .collapse-bloc {
    min-height: 900px;
    width: 80%;
    flex-grow: 1;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
