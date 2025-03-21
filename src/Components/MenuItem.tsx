import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item:MenuItem)=> void,
}

const MenuItem = ({ item,addItem }: MenuItemProps) => {
    return (
        <>
        <button 
        onClick={()=> addItem(item)}
        className="w-full p-3 border-teal-400 border-2 flex justify-between hover:bg-teal-500 cursor-pointer">
        <p>{item.name} </p>

        <p className="font-black">${item.price} </p>
        </button>


        </>
    )
}
export default MenuItem
