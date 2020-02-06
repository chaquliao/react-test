import React from "react";

class Welcome extends React.Component {
  render() {
    const { name, phone, sex, tags } = this.props;
    return (
      <div>
        <h1>姓名: {name}</h1>
        <span>电话: {phone}</span>
        <span>性别:{sex === "m" ? "男" : "女"}</span>
        <div>
          {tags.map((item, index) => {
            return <span key={index}> {item}</span>;
          })}
        </div>
      </div>
    );
  }
}

export default Welcome;
