import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import './QuestionListPage.css'

var questionsObject = (window["data"].replace(/&#34;/g,'"'));

var data = [];

for (var i in questionsObject)
    data.push([i, questionsObject [i]]);

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
