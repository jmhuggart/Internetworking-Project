import React from 'react';
import {Radio, Form, Button,Card } from 'antd';
import { withRouter, Link } from 'react-router-dom';

var taskObject;
var postDT;
var subject;
var question;

class viewTaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ""
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

    render() {
      if (this.props.location.passData !== undefined) {
          postDT = this.props.location.passData.taskData.postDT;
          subject = this.props.location.passData.taskData.subject;
          question = this.props.location.passData.taskData.question;

          var answers = [
            {key: "A", answer: this.props.location.passData.taskData.answerA},
            {key: "B", answer: this.props.location.passData.taskData.answerB},
          ];

          if (this.props.location.passData.taskData.answerC !== "empty") {
              answers.push({key: "C", answer: this.props.location.passData.taskData.answerC});

            if (this.props.location.passData.taskData.answerD !== "empty") {
                answers.push({key: "D", answer: this.props.location.passData.taskData.answerD});
            }
          }
      } else {
          taskObject = JSON.parse(window["task"].replace(/u&#39;/g,'"').replace(/&#34;/g,'"'));
          postDT = taskObject.postDT;
          subject = taskObject.subject;
          question = taskObject.question;

          var answers = [
            {key: "A", answer: taskObject.answerA},
            {key: "B", answer: taskObject.answerB}
          ];

          if (taskObject.answerC !== "empty") {
              answers.push({key: "C", answer: taskObject.answerC})

              if (taskObject.answerD !== "empty") {
                answers.push({key: "D", answer: taskObject.answerD})
              }
          }
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
                    <Link to='/questionList'>Back to Task list</Link>
                  </span>
                  <span style={{'float':'right'}}>
                    <Link to='/home'>Sign out</Link>
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
                    {answers.map(item=>
                 <Card  title={`${item.key}. ${item.answer}`}>
                 </Card>
                   )}
                    <Form onSubmit = {this.handleSubmit}>
                      <Form.Item >
                        {getFieldDecorator('buttons', {})(
                          <Radio.Group onChange = {this.onChange} value = {this.state.value} >
                            {answers.map(item=>
                              <Radio style={radioStyle} value={item.key}> {"Answer " + item.key } </Radio>
                            )}
                          </Radio.Group>
                          )}
                      </Form.Item>
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
const viewTask = Form.create()(viewTaskApp);

export default withRouter(viewTask)