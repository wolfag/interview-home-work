import React from "react";
import { Tag, Input, Tooltip, Icon } from "antd";
import { isEmpty } from "lodash";

class EditableTagGroup extends React.Component {
  state = {
    inputVisible: false,
    inputValue: ""
  };

  _handleClose = removedTag => {
    const {
      input: { onChange, value }
    } = this.props;
    const tags = value.filter(tag => tag !== removedTag);
    onChange(tags);
  };

  _showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  _handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  _handleInputConfirm = () => {
    const {
      input: { onChange, value }
    } = this.props;
    const { inputValue } = this.state;
    let tags = value;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    onChange(tags);
    this.setState({
      inputVisible: false,
      inputValue: ""
    });
  };

  _saveInputRef = input => (this.input = input);

  render() {
    const { inputVisible, inputValue } = this.state;
    const {
      input: { value },
      meta: { error, touched }
    } = this.props;
    return (
      <div>
        {!isEmpty(value) &&
          value.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag
                key={tag}
                closable={index !== 0}
                onClose={() => this._handleClose(tag)}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          })}
        {inputVisible && (
          <Input
            ref={this._saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this._handleInputChange}
            onBlur={this._handleInputConfirm}
            onPressEnter={this._handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this._showInput}
            style={{ background: "#fff", borderStyle: "dashed" }}
          >
            <Icon type="plus" /> New Tag
          </Tag>
        )}
        {error && touched && <span style={{ color: "red" }}>{error}</span>}
      </div>
    );
  }
}

export default EditableTagGroup;
