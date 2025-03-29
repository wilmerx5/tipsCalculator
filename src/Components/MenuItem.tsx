import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

const MenuItem = ({ item,dispatch }: MenuItemProps) => {
    return (
        <>
        <button 
        onClick={()=> dispatch({type:"add-item",payload:{item}})}
        className="w-full p-3 border-teal-400 border-2 flex justify-between hover:bg-teal-500 cursor-pointer">
        <p>{item.name} </p>

        <p className="font-black">${item.price} </p>
        </button>


        </>
    )
}
export default MenuItem
