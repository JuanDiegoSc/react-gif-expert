import React, { useState } from 'react'
import { AddCategory, GifGrid, GifItem} from './components';

export const GifExpertApp = () => {

  //Hook para mantener el estado de una aplicación; useState
  //Los Hooks nunca se usan con condicionales

  const [categories, setCategories] = useState([])
  
  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

  //con tres puntos hacemos una copia del arreglo categorias
  setCategories([newCategory,...categories]);
  }

  return (
    <>

        <h1>Gif Expert App</h1>
        <AddCategory 
        //setCategories = {setCategories}
        onNewCategory = {onAddCategory}>  
        </AddCategory>

          {/* map permite recorrer un arreglo y devolver un valor diferente */}
          { 
            categories.map( (category) => 
             (
              <GifGrid
               key={ category }  
               category={category}>
               </GifGrid>
            ))
          }
    </>
  )
}


