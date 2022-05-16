import React from 'react'
import products from './products.json'
import Item from './Item'
import Card from './Card'

const App = () => {
   
    return (
        <div style={{width: 400}}>
            <div>
                {products && products.map(item => <Item item={item} key={item.id} />
                )}
            </div>
            <Card />
        </div>
    )
}
export default App