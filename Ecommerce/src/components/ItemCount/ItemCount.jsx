import React, { useState } from 'react'

const ItemCount = ({stock=10,initial=1,onAdd}) => {

    const [count,SetCount]=useState(0)

    const addCount=()=>{
      SetCount(count+1)
    }

    const subCount=()=>{
        SetCount(count-1)
      }



    return (
        <div className="card m-5">
            <div className='card-handler'>
                <label htmlFor="">{count}</label>
            </div>
            <div className='card-body'>
                <button onClick={addCount} className='btn btn-outline-primary'>+</button>
                <button onClick={subCount} className='btn btn-outline-primary'>-</button>
            </div>
            <div className='card-footer'>
                <button className='btn btn-outline-success btn-block' onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemCount