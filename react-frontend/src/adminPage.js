import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Tabs } from 'antd';
import CreateTask from './create-task.js';
import ListPage from './QuestionListPage.js';
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
        this.state = {
            signedOut: false
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

                fetch(request)
                .then(function() {
                });
            }
        });
    };

    handleSignOut = e => {
        var request = new Request('/signOut', {
            method: 'GET',
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
                signedOut: true
            });
        }).catch(function(error) {
            that.setState({
                signedOut: false
            });
            console.log(error);
        });
    };

    render() {
        var userObject = JSON.parse(window["user"].replace(/&#34;/g,'"'));
        var isAdmin = checkAdmin(userObject.type);
        var tabs;

        if (this.state.signedOut) {
            return <Redirect to='/' />
        }

        if (isAdmin) {
            tabs = [
                <Tabs animated={true} style={{textAlign: 'center'}}>
                    <TabPane tab="Task List" key="1" style={{textAlign: 'left'}}>
                        <ListPage />
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
                        <ListPage />
                    </TabPane>
                </Tabs>
            ];
        }

        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>
                <div style={{overflow:'hidden', textAlign:'right'}}>
                  <a href='/' onClick = {this.handleSignOut}>Sign out</a>
                </div>
                {tabs}
            </div>
        )
    }
}
Admin = Form.create()(Admin);

export default Admin;
