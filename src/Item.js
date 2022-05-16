import React from 'react'
import {useDispatch} from 'react-redux'
import { addItem } from './action'

const Item = ({item}) => {
    const dispatch = useDispatch()
    const {id, name, price, image} = item
   
    return (
        <>
            <div style={{cursor: 'pointer', display: 'grid', gridTemplateColumns: '60% 20% 20%'}} 
                 onClick={() => dispatch(addItem(item))}>
                <h5>{name}</h5>
                <img src={image} alt="" style={{height: 50}} />
                <h3>{price} $ </h3>
            </div>
        </>
    )
}
export default Item