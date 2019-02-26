import React, {Component} from "react";
import {Comment, Avatar, Form, Button, List, Input, Icon} from "antd";
import {Link} from "react-router-dom";
import moment from "moment";

const TextArea = Input.TextArea;

const CommentList = ({comments}) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({onChange, onSubmit, submitting, value}) => (
  <div>
    <Form.Item>
      <TextArea
        onChange={onChange}
        value={value}
        autosize={{minRows: 2, maxRows: 6}}
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary">
        Send
      </Button>
    </Form.Item>
  </div>
);

const defaultData = [
  {
    id: "1FCA5132-535C-489E-B1C8-6ABDD34FFF8A",
    name: "Shehryar Assad",
    comments: [
      {
        author: "Shehryar Assad",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
        content: <p>So, how's it hanging?</p>,
        datetime: moment("2019-01-01").fromNow()
      }
    ]
  },
  {
    id: "1FCA5132-535C-489E-B1C8-6ABDD34FFF81",
    name: "John Doe",
    comments: [
      {
        author: "John Doe",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
        content: (
          <p>
            Thanks for your input. I'll let you know in about a week's time!
          </p>
        ),
        datetime: moment("2019-01-01").fromNow()
      }
    ]
  }
];

class Message extends React.Component {
  state = {
    // comments: [
    //   {
    //     author: "Shehryar Assad",
    //     avatar:
    //       "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
    //     content: <p>So, how's it hanging?</p>,
    //     datetime: moment("2019-01-01").fromNow()
    //   }
    // ],
    comments: [],
    name: "",
    submitting: false,
    value: ""
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          ...this.state.comments,
          {
            author: "Yasyf Mohamedali",
            avatar:
              "https://media.licdn.com/dms/image/C5603AQEfu3QFqJtKqA/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=51bUgMKvXPyMqntu_nD0E7MsbJ5MBN4lllwI_Wqtn-8",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          }
        ]
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  componentDidMount() {
    console.log(this.props.match);
    const {id} = this.props.match.params;
    console.log(defaultData);
    defaultData.forEach(convo => {
      if (convo.id === id) {
        this.setState({
          comments: convo.comments,
          name: convo.name
        });
      }
    });
  }

  render() {
    const {comments, submitting, value} = this.state;

    return (
      <div>
        <div>
          <Button type="primary" style={{marginBottom: 20}}>
            <Link to="/" style={{textDecoration: "none"}}>
              <Icon type="left" />
              Home
            </Link>
          </Button>
          <h1>{this.state.name}</h1>
        </div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://media.licdn.com/dms/image/C5603AQEfu3QFqJtKqA/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=51bUgMKvXPyMqntu_nD0E7MsbJ5MBN4lllwI_Wqtn-8"
              alt="Yasyf"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}

export default Message;
