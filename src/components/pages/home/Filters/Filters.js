import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import lodgingData from "../../../../data/lodging.json";

export default function Filters() {
  const { setData, isLiked, filterIndex, setFilterIndex } =
    useContext(GlobalContext);
  const filters = [
    {
      index: 1,
      value: "Tous",
    },
    {
      index: 2,
      value: "Favoris",
    },
    {
      index: 3,
      value: "Studio",
    },
    {
      index: 4,
      value: "Luxe",
    },
    {
      index: 5,
      value: "Forêt",
    },
    {
      index: 6,
      value: "Maison",
    },
    {
      index: 7,
      value: "Métros",
    },
    {
      index: 8,
      value: "Charme",
    },
    {
      index: 9,
      value: "Commerces",
    },
  ];

  const toggleChangeIndex = (index) => {
    setFilterIndex(index);
  };

  useEffect(() => {
    let dataFiltered = [];
    let filterSelected = filters.find((filter) => filter.index === filterIndex);

    if (filterSelected.index === 1) {
      setData(lodgingData);
    } else if (filterSelected.index === 2) {
      setData(isLiked);
    } else if (filterSelected.index > 2) {
      lodgingData.forEach((lodging) => {
        if (lodging.tags.find((tag) => tag === filterSelected.value)) {
          dataFiltered.push(lodging);
          setData(dataFiltered);
        }
      });
    }
  }, [filterIndex, isLiked]);
  return (
    <FilsterStyled className="filter-container">
      {filters.map(({ index, value }) => (
        <button
          key={index}
          index={index}
          onClick={() => toggleChangeIndex(index)}
          value={value}
          className={filterIndex === index ? "filter open" : "filter"}
        >
          {value}
        </button>
      ))}
    </FilsterStyled>
  );
}

const FilsterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0px 0px;
  margin-bottom: 40px;
  width: 100%;
  flex-wrap: wrap;
  .filter {
    width: auto;
    margin: 0px 0px;
    border: none;
    padding: 10px 14px;
    border-radius: 8px;
    margin-right: 20px;
    color: white;
    font-weight: 600;
    background-color: #ffffff32;
    transition: all 400ms ease;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 12px;
    :hover {
      background-color: #ffffff60;
      transition: 400ms ease;
    }
    &.open {
      background-color: #fff;
      font-weight: 600;
      color: #191919;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    .filter {
      font-size: 10px;
      padding: 6px 12px;
      margin-right: 10px;
    }
  }
`;
