import React from 'react';
import { Form } from 'antd';
import { withRouter, Link } from 'react-router-dom';

class HomePageApp extends React.Component {
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
        var isLoggedIn = false;
        var userObject = JSON.parse(window["user"].replace(/&#34;/g,'"'));
            if (userObject.name !== "nil") {
                isLoggedIn = true;
            }
        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>
                <div style={{overflow:'hidden',textAlign:'right'}}>
                {isLoggedIn ? (
                  <a href='/' onClick = {this.handleSignOut}>Sign Out</a>
                ) : (
                <>
                  <Link to='/login'>Sign in</Link>
                  <span>&nbsp; &nbsp; &nbsp;</span>
                  <Link to='/register'>Create an account</Link>
                </>
                ) }
                </div>
                <div>
                  <h1>HomePage</h1>
                  {isLoggedIn ? (
                      <p style={{textAlign:'center'}}>{"Welcome, " + userObject.name + "."}</p>
                  ) : null }
                  <p style={{textAlign:'center'}}>Answer simple questions to help us get the most correct answer.</p>
                  {isLoggedIn ? (
                      <p style={{textAlign:'center'}}>Click <a href="/adminPage">here</a> to get started.</p>
                  ) : (
                      <p style={{textAlign:'center'}}>You must be logged in to get started.</p>
                  )}
                  <div>
                    <p>Project Team : </p>
                    <p>Jack Huggart - 12604512</p>
                    <p>William Roson - 11041249</p>
                    <p>Colin Luu - 99131753</p>
                    <p>Sebastian Aroney - 12606481</p>
                    <p>Xiaohan Wang - 12806295</p>
                    <p>Ty Yarwood - 12552434</p>
                    <p>Supervisor - Xianzhi Wang</p>
                  </div>
                </div>
            </div>
        )
    }
}
const HomePage = Form.create()(HomePageApp);

export default withRouter(HomePage)