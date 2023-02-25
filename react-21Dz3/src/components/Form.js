import { useState } from "react";
import Input from "./Input";

const Form = ({ handleAdd, handleEdit, handleClose, currentTodo }) => {

    const [ value, setValue ] = useState(currentTodo.title ? currentTodo : {
        title: '',
        description: '',
    })
    const isEdit = currentTodo.title ? true : false

    const handleOnChange = (e) => {
        setValue({
            ...value,
            [ e.target.name ]: e.target.value
        })
    }

    const action = () => {
        if (isEdit) {
            handleEdit(value)
            handleClose()
            setValue('')
        } else {
            handleAdd(value)
        }
    }

    return ( 
        <div className="form">
        {
            Object.keys(value).map((item) => 
                item !== 'id' && (
                    <Input key={item} style={{ border: '1px solid red' }} name={item} value={value[item]} onChange={handleOnChange} placeholder='Search some'/>
                ) 
            )
        }
        <button onClick={action}>{isEdit ? 'Редактировать' : 'Создать таск'}</button>
        </div>
     );
}
 
export default Form;