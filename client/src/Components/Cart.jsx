import { useContext } from "react"
import { GlobalContext } from "../GlobalContext.jsx"


export default function Cart() {
    const { cart } = useContext(GlobalContext)

    return <section id="cart">
        {
            
            cart.length == 0 ?
                <p>Cart is empty</p>
                :
                cart.map(
                    (item, index) => <p key={item + "-" + index}>{item.name}, {item.amount}</p>
                )
        }
    </section>
}