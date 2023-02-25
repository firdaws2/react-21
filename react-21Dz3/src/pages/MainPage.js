import { useState } from "react";
import ModalWindow from "../components/ModalWindow";
import Title from "../components/Title";
import TodoList from "../components/TodoList";

const list = [ 
    { id: 1, title: 'Go to shop 1', description: 'Some desc'},
    { id: 2, title: 'Go to shop 2', description: 'Some desc'},
    { id: 3, title: 'Go to shop 3', description: 'Some desc'},
    { id: 4, title: 'Go to shop 4', description: 'Some desc'},
  ]

const MainPage = () => {

    const [ todoList, setTodoList ] = useState(list)
    const [ isShow, setIsShow] = useState(false)
    const [ currentTodo, setCurrentTodo ] = useState({})

    const [ search, setSearch ] = useState("")

    
    const handleAdd = (data) => {
      const newTodoList = [ ...todoList, { ...data, id: Date.now()} ]
      setTodoList(newTodoList)
    }
  
    const handleDelete = (id) => {
      const newTodoList = todoList.filter((item) => item.id !== id)
  
      setTodoList(newTodoList)
    }
  
    const handleEdit = (data) => {
      const newTodoList = todoList.map((item) => {
        if (item.id === data.id) {
          return data
        } else {
          return item
        }
      })
    
      setTodoList(newTodoList)
    }
  
    const handleOpen = (todo) => {
      setIsShow(true)
      setCurrentTodo(todo)
      setCurrentTodo('')
    }
    const searchs=()=>{
      const newCard=todoList.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
      return newCard
  }
    const handleSearchs=searchs()


    const sortByDate = () => {
        const sorted = handleSearchs.sort((a, b) => b.id - a.id) // desc

        setTodoList([ ...sorted ])
    }
    const handleSearch=(e)=>{
      setSearch(e.target.value)
    }

    console.log(todoList)

    return ( 
        <div className="mainPage">
            <Title size={26} search={search} handleSearch={handleSearch}>
                Todo List
            </Title>
            <button onClick={() => setIsShow(true)}>Создать таск</button>
            <button onClick={sortByDate}>sort asc</button>
            <TodoList handleEdit={handleEdit} list={todoList} handleDelete={handleDelete} handleOpen={handleOpen}  handleSearch={handleSearchs}/>
            {
                isShow && (
                <ModalWindow handleEdit={handleEdit} currentTodo={currentTodo} handleAdd={handleAdd} handleClose={() => setIsShow(false)}/>
                )
            }
        </div>
     );
}
 
export default MainPage;