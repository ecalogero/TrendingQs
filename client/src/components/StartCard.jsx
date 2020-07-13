import React, { useEffect, useState } from "react";
// import styled, { keyframes } from "styled-components";
// import { ReactComponent as EmojiSmile } from "../emoji-smile.svg";
import { Link, useHistory } from "react-router-dom";
//useEffect replces ComponentDidMount() and ComponentDidUpdate()
// const StyledSVG = styled(EmojiSmile)`
//   display: block;
//   margin: auto;
//   width: 2em;
//   height: 2em;
// `;

const StartCard = ({ handleShow }) => {
  const startGame = () => {
    handleShow();
  };

  return (
    <div className="App container text-center d-flex justify-content-center">
      <div className="card w-100">
        <img
          src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/market-trends/jellyfish-a-new-sustainable-nutritious-and-oyster-like-food-for-the-western-world/9974704-1-eng-GB/Jellyfish-A-new-sustainable-nutritious-and-oyster-like-food-for-the-Western-world_wrbm_large.jpg"
          className="card-img-top"
          alt="jellyfish"
        />
        <Link className="btn btn-primary" to="/gamecard" onClick={startGame}>
          Start
        </Link>
      </div>
    </div>
  );
};
export default StartCard;
