const initialState = {
    items: []
}

const setSum = (arr, sum) => {
    sum = arr.reduce((acc, cur) => acc + cur.price , 0)
    return sum
}

export const reducer = (state = initialState, action) => {
    let itemExists;
    switch (action.type) {
        case 'ADD':
            itemExists = false
            
            const newState = state.items.map((item) => {
                if(item.id === action.payload.id){
                    item.amount +=1
                    item.price = Number((item.price + action.payload.price).toFixed(2))
                    itemExists = true
                    }
                    return item 
                })
            if(itemExists){
                setSum(state.items, state.total)
                return {...state, items: [...newState]};
            } 
            else {
                setSum(state.items, state.total)
                return {...state, items: [...state.items, {...action.payload}]}; 
            } 
                     
        case 'DELETE':
            return {
                ...state,
                items: state.items.filter(el => el.id !== action.payload.id)
            }

        default:
            return state;
    }
}