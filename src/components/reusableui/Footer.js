import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyled>
      <div className="footer-logo">
        <img src="/Images/logo.svg" alt="logo Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  height: 200px;
  padding: 50px 0px 30px 0px;
  text-align: center;
  border-top: 2px solid #ffffff32;
  position: relative;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  .footer-logo img {
    filter: brightness(10);
    max-width: 130px;
  }
  p {
    color: white;
    font-size: 24px;
    font-weight: 100;
    margin-top: 30px;
  }

  @media screen and (max-width: 1024px) {
    height: 150px;
    padding: 30px 0px 30px 0px;
    .footer-logo img {
      max-width: 100px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
  }
`;
