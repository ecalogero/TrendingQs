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

class EndCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
      answer: this.props.answer,
    };
  }

  render() {
    return (
      <div className="App container text-center d-flex justify-content-center">
        <div className="card w-100">
          <img
            src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/market-trends/jellyfish-a-new-sustainable-nutritious-and-oyster-like-food-for-the-western-world/9974704-1-eng-GB/Jellyfish-A-new-sustainable-nutritious-and-oyster-like-food-for-the-Western-world_wrbm_large.jpg"
            className="card-img-top"
            alt="jellyfish"
          />
          <div className="card-body">
            <h5 className="card-title">Congratulations!</h5>
            <p className="card-text">You have completed the quiz..</p>
          </div>
          <div className="card-body">
            <button
              className="btn btn-outline"
              onClick={this.props.gotoTwitter}
            >
              Share on Twitter
            </button>
            <Link className="btn btn-primary" to="/gamecard">
              Take another quiz
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default EndCard;
