import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Icon, Input, Button, Checkbox, Tabs, Select } from 'antd';
import CreateTask from './create-task.js';
import './login.css';



const { TabPane } = Tabs;
const { Option } = Select;

class Admin extends React.Component {
    constructor(props) {
        super(props);
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

                fetch(request)
                .then(function() {
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;


        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>
                <div style={{overflow:'hidden',textAlign:'right'}}>
                  <Link to='/login'>Sign out</Link>
                </div>
                <Tabs animated={true} style={{textAlign: 'center'}}>
                   <TabPane tab="Task List" key="1" style={{textAlign: 'left'}}>
                     Content of Tab 1
                   </TabPane>
                   <TabPane tab="Worker List" key="2" style={{textAlign: 'left'}}>
                     Content of Tab 2
                   </TabPane>
                   <TabPane tab="Create Task" key="3" style={{textAlign: 'left'}}>
                     <CreateTask />
                   </TabPane>
                 </Tabs>
                 <p>userType is {window.userType}</p>
            </div>
        )
    }
}
Admin = Form.create()(Admin);

export default Admin;
