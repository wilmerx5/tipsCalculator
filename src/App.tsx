import { useState } from 'react'
import './App.css'
import MenuItem from './Components/MenuItem'
import OrderContents from './Components/OrderContents'
import OrderTotals from './Components/OrderTotals'
import TipPercentageForm from './Components/TipPercentageForm'
import { menuItems } from './db/db'
import useOrder from './hooks/useOrder'
function App() {

  const{order,addItem, removeItem, tip, setTip,placeOrder}= useOrder()
  const [items] = useState(menuItems)
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
                addItem={addItem}
      
              ></MenuItem>
            ))}
          </div>
        </div>
        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-5 ml-10'>

{   order.length>0? ( 
  <>
  <OrderContents
         order={order}
         removeItem={removeItem}
         ></OrderContents>

        <TipPercentageForm
        setTip={setTip}
        tip={tip}
        ></TipPercentageForm>

         <OrderTotals
         tip={tip}
         order={order}
         placeOrder={placeOrder}
         ></OrderTotals> </>):        <p className="text-center"> Empty order</p>}
        
 
        </div>
      </main>
    </>
  )
}

export default App
