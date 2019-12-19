import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { Avatar, Icon, Typography, Menu, Input } from "antd";

const { SubMenu } = Menu;
const { Title } = Typography;
const { Search } = Input;

function Header(props) {
  const {
    logo,
    username,
    menus,
    searchValue,
    onSearch,
    onSearchChange
  } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Avatar size={64} src={logo} alt="logo" />
      <Title level={2}>Blogs</Title>
      <Search
        placeholder="Title, Tags..."
        onSearch={onSearch}
        style={{ width: 200 }}
        value={searchValue}
        onChange={onSearchChange}
        allowClear
      />
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
            menus.map((menu, index) => {
              const { title, icon, action } = menu;
              return (
                <Menu.Item key={index} onClick={action}>
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
  searchValue: PropTypes.string,
  menus: PropTypes.array,
  onProfile: PropTypes.func,
  onNewPost: PropTypes.func,
  onSearch: PropTypes.func,
  onSearchChange: PropTypes.func
};
Header.defaultProps = {
  logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  username: "Tai Nguyen",
  searchValue: "",
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
  ],
  onSearch: () => {
    alert("onSearch");
  },
  onSearchChange: () => {
    alert("onSearchChange");
  }
};

export default Header;
