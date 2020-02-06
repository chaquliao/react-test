import React from 'react'
import {Icon} from 'antd' 

class CommentList extends React.Component {
    constructor(props) {
        super(props)
    }

    removeComment(index) {
        this.props.onRemoveComment(index)
    }

    render() {
        return (
            <div>
                <label>评论列表</label>
                <ul>
                    {this.props.comments.map ((comment,index) => {
                        return (
                            <li key= {index}>{comment}  <span onClick={this.removeComment.bind(this,index)}><Icon type="close-circle" /></span></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


// 如果一个组建没有生命周期，就可以写成一个函数类型的

export default CommentList