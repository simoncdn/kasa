import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../reusableui/Footer";
import Header from "../../reusableui/header/Header";

export default function Error() {
  return (
    <ErrorStyled>
      <Header />
      <div className="error-content">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retournez sur la page d'accueil</Link>
      </div>
      <Footer />
    </ErrorStyled>
  );
}

const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;

  .error-content {
    text-align: center;
    padding-top: 80px;
    flex-grow: 1;
    padding: 0px 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .error-content h2 {
    font-size: 300px;
    color: white;
  }
  .error-content p {
    font-size: 30px;
    color: white;
    margin-bottom: 150px;
  }
  .error-content a {
    color: white;
    font-size: 20px;
  }

  @media screen and (max-width: 1024px) {
    .error-content {
      padding: 0px 50px;
    }
  }
  @media screen and (max-width: 768px) {
    .error-content {
      padding: 0px 20px;
    }
    .error-content h2 {
      font-size: 96px;
    }
    .error-content p {
      font-size: 18px;
      margin-bottom: 200px;
    }
    .error-content a {
      font-size: 14px;
    }
  }
`;
