import React from 'react';
import {Radio, Form, Button, Card, Typography } from 'antd';
import { withRouter, Link, Redirect } from 'react-router-dom';
const { Paragraph } = Typography;

var taskObject;
var postDT;
var subject;
var question;
var correctAnswer;
var votes;
var answers;

function checkAdmin(userType) {
    return userType === "Admin";
}

function simpleMajorityAggregation(votes, answers) {
    var highestVoteHolder = 0;
    var correctAnswerHolder = [];
    var keepString = "";
  
    for (var i = 0; i < votes.length; i++) {
        if (parseInt(votes[i].votes, 10) > highestVoteHolder) {
            highestVoteHolder = parseInt(votes[i].votes, 10);
            correctAnswerHolder = [{key: votes[i].key, votes: highestVoteHolder}];
            keepString = answers[i].answer;
        } else if ( (parseInt(votes[i].votes, 10) === highestVoteHolder) && ( (answers[i].answer.localeCompare(keepString)) > 0) ) {
            highestVoteHolder = parseInt(votes[i].votes, 10);
            correctAnswerHolder = [{key: votes[i].key, votes: highestVoteHolder}];
            keepString = answers[i].answer;
        }
    }
    return correctAnswerHolder;
}

class viewTaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "",
          signedOut: false
        };
    }

    onChange = e => {
      console.log("radio checked", e.target.value);
      this.setState({
        value: e.target.value
      });
    };

    handleSubmit = e => {
      var voteData = {};
      voteData["selectedAnswer"] = this.state.value;
      if (this.props.location.passData !== undefined) {
        voteData["question"] = this.props.location.passData.taskData.question;
      } else {
        taskObject = JSON.parse(window["task"].replace(/u&#39;/g,'"').replace(/&#34;/g,'"'));
        voteData["question"] = taskObject.question;
      }
      
      var request = new Request('/questionDetails', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(voteData)
      });

      fetch(request)
      .then(function(response) {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response;
      }).then(function(response) {
          console.log('ok');
      }).catch(function(error) {
          console.log(error);
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
      var userType;
      if (this.props.location.passData !== undefined) {
          userType = this.props.location.passData.userData.type;
      } else {
          var userObject = JSON.parse(window["user"].replace(/&#34;/g,'"'));
          userType = userObject.type;
      }
      var isAdmin = checkAdmin(userType);

      if (this.state.signedOut) {
          return <Redirect to='/' />
      }

      if (this.props.location.passData !== undefined) {
          postDT = this.props.location.passData.taskData.postDT;
          subject = this.props.location.passData.taskData.subject;
          question = this.props.location.passData.taskData.question;

          answers = [
            {key: "A", answer: this.props.location.passData.taskData.answerA},
            {key: "B", answer: this.props.location.passData.taskData.answerB},
          ];

          votes = [
            {key: "A", votes: this.props.location.passData.taskData.A},
            {key: "B", votes: this.props.location.passData.taskData.B}
          ];

          if (this.props.location.passData.taskData.answerC !== "empty") {
              answers.push({key: "C", answer: this.props.location.passData.taskData.answerC});
              votes.push({key: "C", votes: this.props.location.passData.taskData.C});

            if (this.props.location.passData.taskData.answerD !== "empty") {
                answers.push({key: "D", answer: this.props.location.passData.taskData.answerD});
                votes.push({key: "D", votes: this.props.location.passData.taskData.D})
            }
          }
      } else {
          taskObject = JSON.parse(window["task"].replace(/u&#39;/g,'"').replace(/&#34;/g,'"'));
          postDT = taskObject.postDT;
          subject = taskObject.subject;
          question = taskObject.question;

          answers = [
            {key: "A", answer: taskObject.answerA},
            {key: "B", answer: taskObject.answerB}
          ];

          votes = [
            {key: "A", votes: taskObject.A},
            {key: "B", votes: taskObject.B},
          ];

          if (taskObject.answerC !== "empty") {
              answers.push({key: "C", answer: taskObject.answerC});
              votes.push({key: "C", votes: taskObject.C});

              if (taskObject.answerD !== "empty") {
                answers.push({key: "D", answer: taskObject.answerD});
                votes.push({key: "D", votes: taskObject.D});
              }
          }
      }
      correctAnswer = simpleMajorityAggregation(votes, answers);
      var canConductMAJ;
      if (correctAnswer[0].votes !== 0) {
          canConductMAJ = true;
      } else {
          canConductMAJ = false;
      }

      

      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
        const { getFieldDecorator } = this.props.form;

        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>
                <div style={{overflow:'hidden',}}>
                  <span>
                    <Link to='/adminPage'>Back to Task list</Link>
                  </span>
                  <span style={{'float':'right'}}>
                    <a href='/' onClick = {this.handleSignOut}>Sign out</a>
                  </span>
                </div>
                <div>
                  <h1>{"Subject: " + subject}</h1>
                  <div>
                    <Card>
                    <Card.Grid>                     
                       {"Posted on: " + postDT}
                     </Card.Grid>
                     <Card.Grid>
                       {"Question: " + question}
                     </Card.Grid>
                     </Card>
                  </div>
                  <div>
                    {answers.map(item =>
                 <Card  title={`${item.key}. ${item.answer}`}>
                 </Card>
                   )}
                    <Form onSubmit = {this.handleSubmit}>
                      <Form.Item >
                        {getFieldDecorator('buttons', {})(
                          <Radio.Group onChange = {this.onChange} value = {this.state.value} >
                            {answers.map(item=>
                              <Radio style={radioStyle} value={item.key}> {"Answer " + item.key} </Radio>
                            )}
                          </Radio.Group>
                          )}
                      </Form.Item>
                      {isAdmin ? (
                        <>
                          <Paragraph>
                            <ul>
                              {votes.map(item =>
                                <li>
                                  {item.key + " - " + item.votes + " votes"}
                                </li>                            
                              )}
                            </ul>
                            {canConductMAJ ? (
                              "Simple Majority Aggregation indicates that answer " + correctAnswer[0].key + " is most likely to be correct."
                            ) : (
                              <>
                                <p>This task has not yet been evaluated by a user. In order to conduct Simple Majority Aggregation, a minimum of one response is required.</p>
                                <p>The reliability of this method increases with the number of responses received.</p>
                              </>
                            )}
                          </Paragraph>
                        </>
                      ) : null }
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
            </div>
        )
    }
}
viewTaskApp = Form.create()(viewTaskApp);

export default withRouter(viewTaskApp)