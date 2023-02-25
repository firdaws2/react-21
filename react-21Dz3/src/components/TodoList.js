import TodoCard from "./TodoCard";

const TodoList = ({ list, handleDelete, handleEdit, handleOpen,handleSearch }) => {
    return (
        <div className="todoList">
            {handleSearch.map((item) => 
                <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
        </div>
     );
}
 
export default TodoList;