import { useMemo } from "react"
import { formatCUrrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalsProps={
  order: OrderItem[]
  tip:number
  placeOrder: ()=> void
}
function OrderTotals({order,tip, placeOrder}:OrderTotalsProps) {

  const subtotalAmount = useMemo(()=> order.reduce((total, item)=> total + (item.quantity+ item.price),0),[order])
  const tips=useMemo(()=> subtotalAmount*tip, [tip,subtotalAmount]) 
  const total=useMemo(()=> subtotalAmount+tips, [tip,subtotalAmount]) 

  return (
    <div
    className='space-y-3'
    >
      <h2 className='font-black text-2xl'>Totals & tips</h2>
      <p>Subtotal: {""}
<span className="font-bold"> {formatCUrrency(subtotalAmount)}</span>

      </p>
      <p>Tips: {""}
<span className="font-bold">{formatCUrrency(tips)}</span>

      </p>
      <p>Total: {""}
<span className="font-bold">{formatCUrrency(total)}</span>

      </p>
      <button 
      onClick={()=>placeOrder()}
      disabled={total==0}
      className="
      disabled:opacity-8
      w-full bg-black p-3 uppercase text-white font-bold mt-10">
      Save Order
      </button>
    </div>
  )
}

export default OrderTotals