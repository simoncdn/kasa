import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { BiMailSend } from "react-icons/bi";

export default function Booking({ price }) {
  const [isUserEmail, setIsUserEmail] = useState("");

  const handleChangeEmail = (event) => {
    setIsUserEmail(event.target.value);
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();

    toast.info("Email envoyé ✅", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: <BiMailSend />,
    });
    setIsUserEmail("");
  };
  return (
    <BookingStyled onSubmit={handleBookingSubmit}>
      <h3>
        <span>{price}</span> par nuit
      </h3>
      <p>
        Veuillez renseigner votre adresse mail. <br />
        L'hôte prendra contact avec vous pour les disponibilités du logement.
      </p>
      <div className="booking-input">
        <input
          type="email"
          name="mail"
          id="mail"
          placeholder="Entrez votre adresse email"
          value={isUserEmail}
          onChange={handleChangeEmail}
          required
        />
        <button>Réserver</button>
      </div>
    </BookingStyled>
  );
}

const BookingStyled = styled.form`
  background-color: white;
  border-radius: 15px;
  width: 80%;
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-weight: 700;
    font-size: 30px;
  }
  h3 {
    font-weight: 400;
    font-size: 20px;
  }
  .booking-input {
    display: flex;
    flex-direction: column;
    input {
      height: 50px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid black;
      margin-bottom: 15px;
      font-size: 18px;
    }
    button {
      border: none;
      background-color: #ff6060;
      height: 50px;
      border-radius: 5px;
      color: white;
      font-size: 18px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
    width: 50%;
    span {
      font-size: 26px;
    }
    p {
      font-size: 14px;
    }
    .booking-input {
      input,
      button {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
`;
