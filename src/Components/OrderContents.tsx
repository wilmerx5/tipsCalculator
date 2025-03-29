import { Dispatch } from "react";
import { formatCUrrency } from "../helpers";
import { OrderActions } from "../reducers/order-reducer";
import { OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>

}

export default function OrderContents({ order, dispatch}: OrderContentsProps) {
    return (
        <div>
            <h2 className=" font-black text-4xl">Consumo </h2>

            <div className="space-y-3 mt-5">

                {
                    order.map(i =>
                        <div
                            className="flex  justify-between border-t  py-5 border-gray-200 last-of-type:border-b"
                            key={i.id}>
                            <div>
                                <p>{i.name} - {formatCUrrency(i.price)}  </p>
                                <p className="font-black"> Quantity {i.quantity} - {formatCUrrency(i.price * i.quantity)} </p>
                            </div>
                            <button
                                onClick={() => dispatch({type:'remove-item',payload:{id:i.id}})}
                                className="bg-red-600 h-8 w-8 cursor-pointer font-black rounded text-white">X</button>
                        </div>)
                }

            </div>
        </div>
    )
}
