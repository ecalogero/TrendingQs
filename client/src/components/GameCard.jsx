import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import { ReactComponent as EmojiSmile } from "../emoji-smile.svg";

// const StyledSVG = styled(EmojiSmile)`
//   display: block;
//   margin: auto;
//   width: 2em;
//   height: 2em;
// `;

const GameCard = (props) => {
  //console.log("GameCard props:", props);
  return (
    <div className="App container text-center d-flex justify-content-center">
      <div className="card w-100">
        <img
          src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/market-trends/jellyfish-a-new-sustainable-nutritious-and-oyster-like-food-for-the-western-world/9974704-1-eng-GB/Jellyfish-A-new-sustainable-nutritious-and-oyster-like-food-for-the-Western-world_wrbm_large.jpg"
          className="card-img-top"
          alt="jellyfish"
        />
        <div className="card-body">
          <h5 className="card-title">Question {props.count + 1}</h5>
          <p className="card-text">{props.text}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Your answer</span>
              </div>
              <textarea
                name="answer"
                className="form-control"
                aria-label="With textarea"
                onChange={props.handleAnswer}
                value={props.answer.text}
              ></textarea>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-group">
              <label htmlFor="formControlRange">
                How do you rate this question?
              </label>
              <input
                name="rating"
                type="range"
                className="form-control-range"
                id="formControlRange"
                value={props.rating.value}
                onChange={props.handleRating}
              />
            </div>
          </li>
        </ul>
        <div className="card-body">
          <button className="btn btn-outline" onClick={props.gotoTwitter}>
            View on Twitter
          </button>
          <button className="btn btn-primary" onClick={props.handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default GameCard;
