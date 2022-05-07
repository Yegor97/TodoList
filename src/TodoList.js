import TodoItem from "./TodoItem"


const TodoList = ({todos,onChange,}) => {
  return (
    <div className="List">
        
      {
          todos.slice(0,15).map(todo=>{ 
           return (
               <TodoItem
                key = {todo.id}
               todo ={todo}
               onChange ={onChange}
               />
           )   
          })
      }
    </div>
  )
}

export default TodoList
