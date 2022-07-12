import React from 'react'
import Todo from './Todo'
import {useState} from 'react'

function UseRefExample3() {
    const [showTodo, setShowToDo] = useState (true)

  return (
    <div> 
        {showTodo && <Todo />} 
         <button 
         className="btn btn-primary" onClick={() => setShowToDo(!showTodo)}
         >  
         Toggle Todo
        </button>
    </div>
  )
}

export default UseRefExample3