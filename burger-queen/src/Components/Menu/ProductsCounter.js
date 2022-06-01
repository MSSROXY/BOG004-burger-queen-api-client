import React, { useState } from "react";
import add from '../../img/mas.png';
import remove from '../../img/menos.png';

export const Counter = (id, name) => {
    let [counter, setCounter] = useState(0);

    const addProduct= () => {
        setCounter(counter +1)
        console.log(id,name)
    }
    const removeProduct= () => {
        if(counter >=1){
            setCounter(counter--)
            console.log(id,name)
        }
        setCounter(counter)
    }

    return(
        <div className="div-select-button">
            <button onClick={addProduct}>
                <img src={add} alt='Agregar'></img>
            </button>
            <p>{counter}</p>
            <button onClick={removeProduct}>
                <img src={remove} alt='Quitar'></img>
            </button>
        </div>
    )
}