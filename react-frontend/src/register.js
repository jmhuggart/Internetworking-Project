import React from 'react';
import { Row, Col, Card, Form, Icon, Input, Button } from 'antd';
import './login.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                var register_data = values;

                var request = new Request('/register', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(register_data)
                });

                fetch(request)
                .then(function() {
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ marginTop: '10%' }}>
                <Row >
                    <Col span={6} offset={9} style={{ background: 'red', }}>
                        <Card title="Register" style={{ width: "100%" }} className='login-card'>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please enter your email!' }],
                                    })(
                                        <label>
                                            Email
                                        <Input
                                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="enter your email"
                                        />
                                        </label>,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('pass', {
                                        rules: [{ required: true, message: 'Please enter your password!' }],
                                    })(
                                        <label>
                                            Password

                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}

                                            placeholder="enter your password" />
                                         </label>
                                       ,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: 'Please enter your username!' }],
                                    })(
                                        <label>
                                            Username
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="enter your username"
                                        />
                                        </label>,
                                    )}
                                </Form.Item>
                                <Form.Item>

                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Sign up
                                    </Button>
                                    <a href="/" className='login-form-reg'>login</a>
                                </Form.Item>
                            </Form>
                        </Card>

                    </Col>
                </Row>
            </div>
        )
    }
}

RegisterForm = Form.create()(RegisterForm);

export default RegisterForm;
