import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { Redirect } from 'react-router-dom';

const { TextArea } = Input;


const answers = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
}


class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            asnum: 0,
            didSubmit: false
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                var task_data = values;

                var request = new Request('/adminPage', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(task_data)
                });

                const that = this;

                fetch(request)
                .then(function(response) {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response;
                }).then(function(response) {
                    console.log('ok');
                    that.setState({
                        didSubmit: true
                    });
                }).catch(function(error) {
                    that.setState({
                        didSubmit: false
                    });
                    console.log(error);
                });
            }
        });
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            asnum: e.target.value,
        });
    };

    render() {
        if (this.state.didSubmit) {
            return <Redirect to='/adminPage' />
        }

        const { getFieldDecorator } = this.props.form;
        const { asnum } = this.state;

        const InputApp = (asnum) => {
            var items = [];
            for (var i = 0; i < asnum; i++) {
                items.push(
                    <Form.Item key={i} label={answers[i]}>
                      {getFieldDecorator(`subject${answers[i]}`, {
                        rules: [
                          {
                            required: true,
                            message: 'Please enter the answer',
                          },
                        ],
                      })(<Input  placeholder='Please enter the answer'/>)}
                    </Form.Item>
                );
            }
            console.log("items -->", items);
            return items
        }
        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>
                <Form onSubmit={this.handleSubmit} >
                <Form.Item label="subject">
                  {getFieldDecorator('subject', {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter subject',
                      },
                    ],
                  })(<Input  placeholder='Please enter subject'/>)}
                </Form.Item>
                <Form.Item label="question">
                  {getFieldDecorator('question', {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter question',
                      },
                    ],
                  })(<TextArea  rows={4}  placeholder='Please enter question'/>)}
                </Form.Item>
                <Form.Item label="the number of answers">
                  {getFieldDecorator('number', {
                    rules: [
                      {
                        required: false,
                        message: 'select the number',
                      },
                    ],
                  })(
                  <Radio.Group onChange={this.onChange} >
                     <Radio  value="2"> Two </Radio>
                     <Radio  value="3"> Three </Radio>
                     <Radio  value="4"> Four </Radio>
                   </Radio.Group>
                  )}
                </Form.Item>
                    {InputApp(asnum)}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Create a Task
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
CreateTask = Form.create()(CreateTask);

export default CreateTask
