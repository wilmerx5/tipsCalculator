import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {

        let orderItem = { ...item, quantity: 1 }

        const itemExist = order.find(e => e.id == item.id)

        if (itemExist) {
            setOrder([...order.map(e => { return e.id == itemExist.id ? { ...itemExist, quantity: itemExist.quantity + 1 } : e })])
            return
        }

        setOrder([...order, orderItem])


    }
    const removeItem = (id: MenuItem['id']) => {

        setOrder(order.filter(e => e.id !== id))

    }
    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }
    return {
        addItem,
        removeItem,
        order,
        tip,
        setTip,
        placeOrder
    }
}