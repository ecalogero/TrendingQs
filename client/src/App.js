import React, { Component } from "react";
import GameCard from "./components/GameCard";
import StartCard from "./components/StartCard";
import EndCard from "./components/EndCard";
import InitModal from "./components/InitModal";
import SurveyNavBar from "./components/SurveyNavBar";
import "./App.css";
import { Switch, Route, Link, useHistory } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "1",
      complete: null,
      rating: { value: 50.0, userid: "1", qid: "" },
      answer: { text: "", userid: "1", qid: "" },
      text: "This is a test question?",
      twurl: "",
      id: "",
      timestamp: "",
      qname: "test_quiz",
      n: 20,
      count: 0,
      show: false,
      questions: [],
      answers: [],
      ratings: [],
    };
  }
  register = () => {
    //put the login in here
  };
  handleShow = () => {
    this.setState({ show: true });
    //maybe add a routing to the GameCard in here?
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  //Generic input handler
  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  //answer handler in the quiz
  handleAnswer = (e) => {
    let answer = { ...this.state.answer, text: e.target.value };
    this.setState({ answer });
  };
  //rating handler in the quiz
  handleRating = (e) => {
    this.setState({ rating: { value: e.target.value } });
  };
  //fetch request for the questions in the quiz
  //need to debug the access to the nested objects and the way of increenting count
  getQuestions = () => {
    let { n } = this.state;
    let request = `/questions/?n=${n}`;
    fetch(request)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ questions: response });
        this.setState({
          text: this.state.questions[0].text,
          id: this.state.questions[0].id,
          twurl: this.state.questions[0].twurl,
          timestamp: this.state.questions[0].timestamp,
          complete: false,
        });
      });
    this.handleClose();
  };
  //handler to move onto the next question
  handleNext = () => {
    let { answer, rating, count, ratings, answers } = this.state;
    if (count === this.state.n - 1) {
      this.postAnswers();
      //re-routes the page to the EndCard component
      window.location = "/endgame";
      this.setState({
        answers: [],
        ratings: [],
        questions: [],
        count: 0,
        complete: true,
      });
      //This is the end of the quiz.
      return;
    } else {
      count++;
      answer = { ...this.state.answer, qid: this.state.id };
      rating = { ...this.state.rating, qid: this.state.id };
      // console.log(
      //   `These are the values to be stored for question ${
      //     count + 1
      //   }: answer: ${answer}, rating: ${rating}`
      // );
      answers = [...this.state.answers, answer];
      ratings = [...this.state.ratings, rating];
      // console.log(
      //   `These are the values to be stored in the arrays for question ${
      //     count + 1
      //   }: answers: ${answers}, rating: ${ratings}`
      // );
      this.setState({
        answer: {
          text: "",
        },
        rating: {
          value: 50.0,
        },
        answers,
        ratings,
        text: this.state.questions[count].text,
        id: this.state.questions[count].id,
        twurl: this.state.questions[count].twurl,
        timestamp: this.state.questions[count].timestamp,
        count,
      });
    }
  };
  //send a fetch request to the server to post the results of the quiz
  postAnswers = () => {
    let { answers, ratings, questions, qname, userid } = this.state;
    let answer = { ...this.state.answer, qid: this.state.id };
    let rating = { ...this.state.rating, qid: this.state.id };
    answers = [...this.state.answers, answer];
    ratings = [...this.state.ratings, rating];

    let body = JSON.stringify({ answers, ratings, questions, qname, userid });
    // console.log("Here's the body: ", body);
    fetch(`/quizzes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }).then((response) => response.json());
  };
  //open new browsing tab to twurl
  gotoTwitter = () => {};
  //share your answers to twitter
  shareOnTwitter = () => {};

  render() {
    return (
      <div className="App">
        <SurveyNavBar register={this.register}></SurveyNavBar>
        <InitModal
          show={this.state.show}
          handleClose={this.handleClose}
          handleInput={this.handleInput}
          getQuestions={this.getQuestions}
        ></InitModal>
        <br></br>
        <br></br>
        <Switch>
          <Route
            path="/gamecard"
            render={(props) => {
              return (
                <GameCard
                  {...props}
                  handleNext={this.handleNext}
                  gotoTwitter={this.gotoTwitter}
                  handleInput={this.handleInput}
                  handleAnswer={this.handleAnswer}
                  handleRating={this.handleRating}
                  rating={this.state.rating}
                  answer={this.state.answer}
                  text={this.state.text}
                  count={this.state.count}
                />
              );
            }}
          />
          <Route
            path="/endgame"
            render={(props) => {
              return (
                <EndCard
                  {...props}
                  gotoTwitter={this.shareOnTwitter}
                  handleShow={this.handleShow}
                />
              );
            }}
          />
          <Route
            path="/"
            render={(props) => {
              return <StartCard {...props} handleShow={this.handleShow} />;
            }}
            exact
          />
        </Switch>
      </div>
    );
  }
}
export default App;
