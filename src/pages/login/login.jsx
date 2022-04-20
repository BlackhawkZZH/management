import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from "react-router-dom";
import './login.less'
import axios from "axios";
import { connect } from "react-redux";
import { getUserInfo } from "../../redux/actions/handlers/userActions";


const LoginComponent = (props) => {
    console.log(10, props)
    let nav = useNavigate()
    const onFinish = (values) => {
        axios.post('http://localhost:8088/api/login', values).then(res => {
            
            props.passUserData(res.data.user)
            nav('/dashboard/welcome')
        })

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
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
    );
};

const Login = () => {
    return (
        <div className="login">
            <div className="login-msg">Management System</div>
            <div className="login-space"></div>
            <LoginComponent />
        </div>
    )

}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        passUserData(user){
            dispatch(getUserInfo(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)