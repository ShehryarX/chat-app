import React, {Component} from "react";
import {List, Avatar, Badge, Icon} from "antd";
import {Link} from "react-router-dom";

class MessageList extends Component {
  state = {visible: false};

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <h1>Messages</h1>
        <List
          dataSource={[
            {
              uuid: "1FCA5132-535C-489E-B1C8-6ABDD34FFF8A",
              name: "Shehryar Assad",
              unread: 1,
              last_message: {
                uuid: "89A76DA9-930D-4C31-9997-3878364F7559",
                body: "Thank you for the challenge!",
                direction: "incoming",
                created_at: "2018-08-20T22:33:28.660Z"
              }
            },
            {
              uuid: "1FCA5132-535C-489E-B1C8-6ABDD34FFF81",
              name: "John Doe",
              unread: 0,
              last_message: {
                uuid: "89A76DA9-930D-4C31-9997-3878364F7551",
                body:
                  "Thanks for your input. I'll let you know in about a week's time!",
                direction: "incoming",
                created_at: "2018-06-20T22:33:28.660Z"
              }
            }
          ]}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <Link to={`/conversations/${item.uuid}`}>Message</Link>
              ]}>
              <List.Item.Meta
                avatar={
                  <Badge count={item.unread}>
                    <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                  </Badge>
                }
                title={
                  <Link to={`/conversations/${item.uuid}`}>{item.name}</Link>
                }
                description={
                  <div style={{color: item.unread == "0" ? "grey" : "black"}}>
                    {item.last_message.body}
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default MessageList;
