import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


//No deben haber funciones dentro de un componente ya que en cada reenderización se consume mucha memoria
export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);


  return (
   <>
    <h3>{category}</h3>
    {
      //if o and logico: isLoading es la expresion a evaluar
      isLoading && (<h2>Cargando...</h2>)
    }
   
    <div className="card-grid">
      {
        images.map((image) =>(
          <GifItem
          key={image.id}
          //operador spread nos ayuda a tomar todas las props del objeto en cuestion
          {...image }
          ></GifItem>
        ))
      }
    </div>
   </>
  )
}
