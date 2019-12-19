import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { Avatar, Icon, Typography, Menu } from "antd";

const { SubMenu } = Menu;
const { Title } = Typography;

function Header(props) {
  const { logo, username, menus } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Avatar size={64} src={logo} alt="logo" />
      <Title level={2}>Blogs</Title>
      <Menu mode="horizontal">
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Avatar size={64} icon="user" shape="square" />
              <span
                style={{
                  margin: 5
                }}
              >
                {username}
              </span>
            </span>
          }
        >
          {!isEmpty(menus) &&
            menus.map(menu => {
              const { title, icon, action } = menu;
              return (
                <Menu.Item onClick={action}>
                  <span>
                    {icon && <Icon type={icon}></Icon>}
                    <span>{title}</span>
                  </span>
                </Menu.Item>
              );
            })}
        </SubMenu>
      </Menu>
    </div>
  );
}

Header.propTypes = {
  logo: PropTypes.string,
  username: PropTypes.string,
  menus: PropTypes.array,
  onProfile: PropTypes.func,
  onNewPost: PropTypes.func
};
Header.defaultProps = {
  logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  username: "Tai Nguyen",
  menus: [
    {
      title: "title 1",
      icon: "user",
      action: () => {
        alert("action1");
      }
    },
    {
      title: "title 2",
      icon: "setting",
      action: () => {
        alert("action2");
      }
    }
  ]
};

export default Header;
