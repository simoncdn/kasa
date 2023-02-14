import styled from "styled-components";

export default function Banner({ image, title }) {
  return (
    <BannerStyled>
      <img src={image} alt="mountain" />
      <h2>{title}</h2>
    </BannerStyled>
  );
}

const BannerStyled = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 140px;
  margin-bottom: 50px;
  overflow: hidden;
  img {
    top: 50%;
    opacity: 0.9;
    position: relative;
    width: 100%;
  }

  h2 {
    position: absolute;
    color: white;
    font-weight: 400;
    font-size: 48px;
    padding: 30px;
  }
  @media screen and (max-width: 1250px) {
    height: 200px;
    h2 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 200px;
    margin-top: 100px;
    margin-bottom: 30px;
    img {
      top: 0%;
    }
    h2 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 490px) {
    height: 150px;
    margin-top: 100px;
    margin-bottom: 30px;
    img {
      top: 10%;
    }
    h2 {
      font-size: 20px;
    }
  }
`;
