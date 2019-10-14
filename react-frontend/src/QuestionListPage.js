import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import './QuestionListPage.css'

console.log(window["tasks"].replace(/&#39;/g,'"').replace(/&#34;/g,'"'));
var tasksObject = JSON.parse(window["tasks"].replace(/u&#39;/g,'"').replace(/&#34;/g,'"'));

console.log(tasksObject);

for (var i = 0; i < tasksObject.numTasks; i++) {
  console.log(tasksObject["task" + i]["answerA"]);
}


// for the moment
var data = null;

class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }

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
