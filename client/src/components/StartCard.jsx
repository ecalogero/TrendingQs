import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as EmojiSmile } from "../emoji-smile.svg";
import { Link } from "react-router-dom";

const StyledSVG = styled(EmojiSmile)`
  display: block;
  margin: auto;
  width: 2em;
  height: 2em;
`;

class StartCard extends Component {
  constructor(props) {
    super(props);
  }

  startGame = () => {
    
  };

  render() {
    return (
      <div className="App container text-center d-flex justify-content-center">
        <div className="card w-100">
          <img
            src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/market-trends/jellyfish-a-new-sustainable-nutritious-and-oyster-like-food-for-the-western-world/9974704-1-eng-GB/Jellyfish-A-new-sustainable-nutritious-and-oyster-like-food-for-the-Western-world_wrbm_large.jpg"
            className="card-img-top"
            alt="jellyfish"
          />
          <Link className="btn btn-primary" to="/gamecard">
            Start
          </Link>
        </div>
      </div>
    );
  }
}
export default StartCard;
