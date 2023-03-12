import React from 'react'
import { useCounterStore } from './Store/counterStore'
import shallow from 'zustand/shallow'

function App(){

    const  {title, count} = useCounterStore((state) => ({
        count: state.count,
        title: state.title
    }), shallow) /*me devuelve un valor un objeto x eso se guarda dentro de una funcion */
    const increment= useCounterStore(state => state.increment)    
    
    /*pero asi x si solo no se puede es donde comienzo el uso de zustand*/ 
  
    return(
        <div>
            <h1>{title} : {count}</h1>

            <button onClick={()=> {
                    increment(10)
                    }}
            >
                Increment by 10

                
            </button>
        </div>
    )
} 
export default App