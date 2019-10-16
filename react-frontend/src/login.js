import React from 'react';
import { Alert, Row, Col, Card, Form, Icon, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import './login.css';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false,
            isInvalid: false
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                var login_data = values;
                const that = this;

                var request = new Request('/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(login_data)
                });

                fetch(request)
                .then(function(response) {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response;
                }).then(function(response) {
                    console.log('ok');
                    that.setState({
                        isComplete: true,
                        isInvalid: false
                    });
                }).catch(function(error) {
                    that.setState({
                        isComplete: false,
                        isInvalid: true
                    });
                    console.log(error);
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const isInvalid = this.state.isInvalid;
        if (this.state.isComplete) {
            return <Redirect to='/' />
        }
        return (
            <div style={{ marginTop: '10%' }}>
                <Row >
                    <Col span={6} offset={9} style={{ background: 'red', }}>
                        <Card title="Login" style={{ width: "100%" }} className='login-card'>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please enter your email!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="enter your email"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('pass', {
                                        rules: [{ required: true, message: 'Please enter your password!' }],
                                    })(
                                        <Input.Password
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="enter your password" />
                                       ,
                                    )}
                                </Form.Item>
                                <Form.Item>

                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    <a href="/register" className='login-form-reg'>register now!</a>
                                </Form.Item>
                            </Form>
                        </Card>
                        {isInvalid ? (
                            <Alert
                            message="Invalid credentials"
                            description="Your username or password is incorrect."
                            type="error"
                            />
                        ) : null }
                    </Col>
                </Row>
            </div>
        )
    }
}
LoginForm = Form.create()(LoginForm);

export default LoginForm;
