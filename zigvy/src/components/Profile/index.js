import React from "react";
import { Card, Avatar, Icon } from "antd";
import moment from "moment";

import Constant from "common/constant";

const { Meta } = Card;

function Profile(props) {
  const { profile } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 20
      }}
    >
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[<Icon type="edit" key="edit" />]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={profile.name}
          description={moment(profile.dob).format(Constant.dateFormat)}
        />
      </Card>
    </div>
  );
}

Profile.defaultProps = {
  profile: {
    id: 1,
    username: "meowmeow",
    password: "1234567890",
    name: "Cat face",
    dob: "01/06/2016",
    created_at: 1576506719083
  }
};

export default Profile;
