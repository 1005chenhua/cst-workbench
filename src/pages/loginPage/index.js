import React, { useState } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { loginByUsername } from '@/redux/actions';
import { createHashHistory } from 'history';
const history = createHashHistory();

const LoginPage = ({ handleLogin }) => {
  const [userNameObj, getUserName] = useState({ value: '' });
  const [passWorldObj, getPassWord] = useState({ value: '' });
  return (
    <div className="login-container">
      <Form className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            value={userNameObj.value}
            onChange={e => {
              getUserName({
                value: e.target.value
              });
            }}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            value = {passWorldObj.value}
            onChange={e => {
              getPassWord({
                value: e.target.value
              });
            }}
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>

          <Button type="primary" onClick={() => {
            if (userNameObj.value && passWorldObj.value) {
              handleLogin(userNameObj.value, passWorldObj.value);
            }
          }}
          className="login-form-button">
					登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (name, passworld) => {
      dispatch(loginByUsername(name, passworld)).then(res => {
        history.push('/');
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
