import Form from "./Form";

const ModalWindow = ({ handleClose, handleEdit, handleAdd, currentTodo }) => {
    return (
        <>
            <div className="modalWrapper" onClick={handleClose}>
            </div>
            <div className="modal">
                <Form handleClose={handleClose} handleEdit={handleEdit} handleAdd={handleAdd} currentTodo={currentTodo}/>
            </div>
        </>
     );
}
 
export default ModalWindow;