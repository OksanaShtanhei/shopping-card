export const addItem = item => {
    return {
        type: 'ADD',
        payload: {id: item.id, name: item.name, price: item.price, amount: 1}
    }
}
export const deleteItem = id => {
    return {
        type: 'DELETE',
        payload: id
    }
}
