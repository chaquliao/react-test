import React from "react";
import { Button, Icon } from "antd";

class LikesButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      date: new Date()
    };
  }

  //初始化（钩子函数）
  componentDidMount() {
    document.title = `已赞${this.state.likes}次`
    this.timeGo();
  }

  timeGo() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  //更新（钩子函数）
  componentDidUpdate(currentProps, currentState) {

    document.title = `已赞${this.state.likes}次`
    //console.log(currentState);
  }

  // 卸载（钩子函数）
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  increaseLikes() {
    console.log(this.setState);
    const likes = this.state.likes + 1
    this.setState({
      likes: likes
    });
  }

  handleSubmit() {
    const comment = this.textInput.value
    this.textInput.value = ''
    console.log(comment)
    this.props.onAddComment(comment)
  }

  render() {
    return (
      <div className="likes-button-component">
        <Button
          type="primary"
          onClick={() => {
            this.increaseLikes();
          }}
        >
          <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
          {this.state.likes}
        </Button>
        <div>{this.state.date.toLocaleTimeString()}</div>
        <form>
          <div>
            <label>留言内容</label>
            <input
              value={this.state.comment}
              ref={(textInput) => {this.textInput = textInput}}
            ></input>
          </div>
          <Button type="danger" onClick={this.handleSubmit.bind(this)}>
            提交
          </Button>
          已有评论数 {this.props.commentsLength} 条
        </form>
      </div>
    );
  }
}

export default LikesButton;
