

const TodoItem = ({todo,onChange}) => {
    return (
      <div className="Item">
        <div style={{npmarginLeft: 20,marginRight:100,color:todo.completed?'green':'red' }}>
          <input type="checkbox" checked={todo.completed } onChange={(e)=>{
           onChange(
             {
               ...todo,
               completed:e.target.checked
             },
             
           )
          } }/>
            {todo.title}
            </div>   
      </div> 
    )
  }
  
  export default TodoItem
  