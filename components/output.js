import React, { useState } from 'react'
import {useLocation} from 'react-router-dom';

function Output() {
    const [showstatus, setshowstatus] = useState(null);
    const {state} = useLocation();
    const [raw,setraw] = useState(state);

    const remove = (index) => {
        raw.splice(index, 1);
        setraw([...raw]);
      };

  return (
    <div>
        
    {
        raw?.length > 0 && raw.map((item, index) => {
            return (item.status === showstatus && 
                <li>
                Task: &nbsp; &nbsp;{item?.task && item.task}  &nbsp; &nbsp;
                Status:  &nbsp; &nbsp;{item.status} &nbsp;
                <button onClick={() => remove(index)}>Delete</button>
                </li>
        )})
    }
    <button onClick={(e) => {e.preventDefault();setshowstatus(0);}}>
          Zero
        </button>

        <button onClick={(e) => {e.preventDefault();setshowstatus(1);}}>
          completed
        </button>



    </div>
  )
}

export default Output;
