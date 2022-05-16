import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { deleteItem } from './action'

const Card = () => {
    const products = useSelector(state => state.items) 
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(true)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    
    useEffect(() => {
        if(products.length > 0){
            setFlag(false)
            let items = 0
            let price = 0
            products.forEach(el => {
                items += el.amount
                price += el.price
            })
            setTotalItems(items)
            setTotalPrice(price.toFixed(2))
        } else {
            setFlag(true)
            setTotalItems(0)
            setTotalPrice(0)
        }
    }, [products])

    return (
        <div style={{border: '2px solid lightpink', padding: 5}}>
            <h3>{flag === false ? 'Added products :' : 'Please, add some products'}</h3>
            <ul>
                {products && products.map(el => {
                    return <div style={{display: 'grid', gridTemplateColumns: '60% 20% 10% 10%'}} key={el.id}>
                                <li>{el.name} </li>
                                <span>{el.price}</span>
                                <span>{el.amount}</span>
                                <span style={{color: 'red', cursor: 'pointer'}} 
                                      onClick={() => dispatch(deleteItem(el))} >X</span>
                            </div>})}
            </ul>
                <h3 style={{display: 'grid', gridTemplateColumns: '60% 20% 20%', paddingLeft: 25}}>
                    Total 
                    <span>{totalPrice} $</span> 
                    <span>{totalItems}</span>
                </h3>
        </div>
    )
}
export default Card