import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Output from './output';

function Todo(){
    const Navigate = useNavigate();
    const [task,settask] = useState('');
    const [taskList,settaskList] = useState([]);
    const [status,setstatus] = useState(null);

    const taskChange = (e) =>{
        settask(e.target.value);
    }
    const add = () => {
        if(task !== '')
        {   
            settaskList((oldData) => {
                return [...oldData,{"id" : taskList.length+1, "task" : task, "status" : 0}]
            })
        }
        else{
            alert("Enter Your Task");
        } 
        settask('');
    }

    const up = (index) => {
        settaskList((oldData) => {
          oldData[index].status = 1; 
          return [...oldData];
        });
      };

      const del = (index) => {
        taskList.splice(index, 1);
        settaskList([...taskList]);
      };

    return(
        <>
        <h1>Task Manager</h1>
        <input type="text" value={task} placeholder="Enter Your Task" onChange={(e) => taskChange(e)}/>
        <button onClick={() => add()}>Add-Task</button>
      
        {
            taskList.map((item, index) => {
                return(
                    <>
                    <ul>
                       <li><b>ID</b> : {item.id}&nbsp;&nbsp;&nbsp;<b>Task</b> : {item.task}&nbsp;&nbsp;&nbsp;<b>Status</b> : {item.status}&nbsp; 
                       <button style={{margin: '10px'}} onClick={() => up(index)}>Update</button>
                       <button style={{margin: '10px'}} onClick={() => del(index)}>Delete</button>
                       </li>
                    </ul>                 
                    </>
                )  
            })

            
        }
       <button onClick={() => Navigate('/output', { state: taskList })}>view</button>
       </>
    )
}

export default Todo;