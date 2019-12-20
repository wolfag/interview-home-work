import React from "react";
import { Card, Avatar, Icon } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import Constant from "common/constant";
import * as AuthSelector from "store/auth/selector";

const { Meta } = Card;

function Profile(props) {
  const profile = useSelector(AuthSelector.getAuthInfo);

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

Profile.defaultProps = {};

export default Profile;
