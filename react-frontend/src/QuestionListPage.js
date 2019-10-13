import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import './QuestionListPage.css'

var questionsObject = JSON.parse(window["questionsdata"].replace(/u&#39;/g,'"').replace(/&#39;/g,'"'));

console.log(questionsObject);

var qLength, text, i;

var qLength = questionsObject.length;

console.log(qLength);

for (i = 0; i<qLength; i++){
  text = questionsObject[i];
}

console.log(text);

var t = JSON.stringify(text.Subject);

var data = [t];

class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                var list_data = values;
                const that = this;

                var request = new Request('/questionList', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(list_data)
                });
              }
          });
      };

    render() {



        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>

                <div style={{overflow:'hidden',textAlign:'right'}}>
                  <Link to='/home'>Sign out</Link>
                </div>
                <div>
                  <h1>LIST OF TASKS</h1>

                  <List
                    size="small"
                    bordered
                    style={{textAlign:'center'}}
                    dataSource={data}
                    renderItem={item =>
                      <List.Item className="list-wap">
                       <Link to="/questionDetails">

                        <List.Item.Meta
                          title={item}
                          description= "Subject:[subjectName]&nbsp;&nbsp;&nbsp;&nbsp; CreationDate:[date]"
                        />
                      </Link>
                      </List.Item>

                    }
                  />

                </div>







            </div>
        )
    }
}

export default ListPage;
