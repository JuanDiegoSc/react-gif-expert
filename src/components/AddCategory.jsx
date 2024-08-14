import React, { useState } from 'react'
import { GifExpertApp} from '../GifExpertApp'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState([])


    const onInputChange = (event) =>{
        //Para poder tener el valor de la informacion ingresada tomamos del target y luego su value
        setinputValue(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <=1 ) return;

        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

 
  return (
    <form onSubmit={onSubmit}>
        <input
        type = "text"
        placeholder = "Buscar un GIF"
        value = {inputValue}
        onChange={onInputChange}>
        </input>
    </form>
  )
}
