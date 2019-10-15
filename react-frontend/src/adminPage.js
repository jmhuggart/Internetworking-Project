import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Tabs } from 'antd';
import CreateTask from './create-task.js';
import './login.css';

function checkAdmin(userType) {
    if (userType === "Admin") {
        return true;
    }
    return false;
}

const { TabPane } = Tabs;

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
        var userObject = JSON.parse(window["user"].replace(/&#34;/g,'"'));
        var isAdmin = checkAdmin(userObject.type);
        var tabs;

        if (isAdmin) {
            tabs = [
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
            ];
        } else {
            tabs = [
                <Tabs animated={true} style={{textAlign: 'center'}}>
                   <TabPane tab="Task List" key="1" style={{textAlign: 'left'}}>
                     Content of Tab 1
                   </TabPane>
                 </Tabs>
            ];
        }

        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>
                <div style={{overflow:'hidden', textAlign:'right'}}>
                  <Link to='/login'>Sign out</Link>
                </div>
                {tabs}
            </div>
        )
    }
}
Admin = Form.create()(Admin);

export default Admin;
