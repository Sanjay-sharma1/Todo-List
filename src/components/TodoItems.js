import React from 'react';
import './css/TodoItems.css';

const TodoItems = ({no,display,text,setTodos}) => {

   const dlt = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no!==no);
    setTodos(data);
   }

    const toggle = ()=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i=0;i<data.length;i++){
            if(data[i].no===no){
                if(data[i].display===""){
                    data[i].display = "line-through";
                }
                else{
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }
  return (
    <div className='todoitems'>
      <div className="todoitems-container" onClick={()=>{toggle(no)}}>
        {display===""?<i className="fi fi-rs-circle circle"></i>:<i className="fi fi-ss-check-circle tick"></i>}        
        <div className={`todoitems-text ${display}`}>{text}</div>
      </div>
      <i className="fi fi-sr-cross-circle cross" onClick={()=>{dlt(no)}}></i>
    </div>
  )
}

export default TodoItems;
