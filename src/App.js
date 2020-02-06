import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./welcome";
import LikesButton from "./components/likesButton";
import CommentList from "./components/CommentList";
// import { render } from "@testing-library/react";

const tags = ["拉比克", "屠夫", "赏金猎人"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ["this is your first reply"]
    };
    this.addComment = this.addComment.bind(this)
    this.removeComment = this.removeComment.bind(this)
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  removeComment(index) {
    let comments = [...this.state.comments]
    comments.splice(index,1)
    this.setState({
      comments: comments
    })
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="App">
        <Welcome name="廖方正清" phone="14393282342" sex="m" tags={tags} />
        <LikesButton
          commentsLength={comments.length}
          onAddComment={this.addComment}
        />
        <CommentList comments={comments} onRemoveComment={this.removeComment}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
