import styled from "styled-components";

export default function PillButton({ onClick, label }) {
  return (
    <PillButtonStyled onClick={onClick}>
      <p>{label}</p>
    </PillButtonStyled>
  );
}
const PillButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  font-weight: 600;
  color: white;
  padding: 0px 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: left;
  :hover {
    background-color: #ffffff60;
    transition: all 400ms ease;
  }
  p {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 12px;
    }
  }
`;
