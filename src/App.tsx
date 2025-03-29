import { useReducer, useState } from 'react'
import './App.css'
import MenuItem from './Components/MenuItem'
import OrderContents from './Components/OrderContents'
import OrderTotals from './Components/OrderTotals'
import TipPercentageForm from './Components/TipPercentageForm'
import { menuItems } from './db/db'
import { InitialSate, OrderReducer } from './reducers/order-reducer'
function App() {

  const [items] = useState(menuItems)
  
  const [state, dispatch ]= useReducer(OrderReducer,InitialSate)
  return (
    <>
      <header className='bg-teal-400 py-10'>
        <h1 className='text-center text-4xl font-black'>Tips calculator </h1>
      </header>

      <main className=" max-w-4xl mx-auto mt-20 grid md:grid-cols-2  ">
        <div className='' >
          <h2 className='text-4xl font-black'>Menu</h2>

          <div className='space-y-3 mb-2 mt-10'>


            {items.map((it) => (
              <MenuItem
                key={it.id}
                item={it}
                dispatch={dispatch}
      
              ></MenuItem>
            ))}
          </div>
        </div>
        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-5 ml-10'>

{   state.order.length>0? ( 
  <>
  <OrderContents
         order={state.order}
         dispatch={dispatch}
         ></OrderContents>

        <TipPercentageForm
        dispatch={dispatch}
        tip={state.tip}
        ></TipPercentageForm>

         <OrderTotals
         tip={state.tip}
         order={state.order}
         dispatch={dispatch}
         ></OrderTotals> </>):        <p className="text-center"> Empty order</p>}
        
 
        </div>
      </main>
    </>
  )
}

export default App
