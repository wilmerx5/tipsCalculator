import { MenuItem, OrderItem } from "../types";

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const InitialSate: OrderState = {
    order: [],
    tip: 0
}

export const OrderReducer = (
    state: OrderState = InitialSate,
    action: OrderActions) => {


    if (action.type == "add-item") {

        let orderItem:OrderItem = { ...action.payload.item, quantity: 1 }

        const itemExist = state.order.find(e => e.id == action.payload.item.id)

        let updatedOrder=[]
        if (itemExist) {
            updatedOrder=([...state.order.map(e => { return e.id == itemExist.id ? { ...itemExist, quantity: itemExist.quantity + 1 } : e })])
            
        }else{

            updatedOrder=[...state.order, orderItem]
        }

        return{
            ...state,
            order:updatedOrder
        }
    }
    if (action.type == "add-tip") {
        const tip = action.payload.value
        return{
            ...state,
            tip
        }
    }
    if (action.type == "place-order") {
        return InitialSate
    }
    if (action.type == "remove-item") {

        return{
            ...state,
            order:state.order.filter(e => e.id !== action.payload.id)
        }
    }
    return state
}