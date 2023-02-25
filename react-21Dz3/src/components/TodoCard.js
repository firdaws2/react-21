const TodoCard = ({ todo, handleOpen, handleDelete }) => {
    return ( 
        <div className="todocard">
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <button onClick={() => handleOpen(todo)}>edit</button>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
        </div>
     );
}
 
export default TodoCard;