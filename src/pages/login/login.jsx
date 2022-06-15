import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from "react-router-dom";
import './login.less'
import { connect } from "react-redux";
import { login } from "../../redux/actions/handlers/userActions";
import { Counter } from "../../common/components/counter/counter";
import ErrorBoundary from "../../common/components/errorboundary/errorboundary";


const LoginComponent = (props) => {
  let nav = useNavigate()
  const onFinish = (values) => {
    props.passUserData(values)
    
    
  };

  useEffect(()=>{
    if(props.userInfo?.username) nav('/dashboard/welcome')
  },[props.userInfo?.username])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <div className="login-msg">Management System</div>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      
      <div className="login-space"></div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>

  );
};

const Login = () => {
  return (
    <div className="login">

      <LoginComponent />
    </div>
  )

}

const mapStateToProps = (state) => ({
  userInfo: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    passUserData(user) {
      dispatch(login(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)