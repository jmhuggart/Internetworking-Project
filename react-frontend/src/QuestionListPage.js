import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import './QuestionListPage.css'

const data = [];

var tasksObject = JSON.parse(window["tasks"].replace(/u&#39;/g,'"').replace(/&#34;/g,'"'));

for (var i = 0; i < tasksObject.numTasks; i++) {
  data.push(tasksObject["task" + i]);
}

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
                       <Link to={{
                          pathname: "/questionDetails",
                          passData: { taskData: item }
                       }}>
                        <List.Item.Meta
                          title={item.subject}
                          description= {"Posted on: " + item.postDT}
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
