import { createContext, useState } from "react";

export const CartContest = createContext();

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    return <CartContest.Provider value={{ items, setItems }}>
        {props.children}
    </CartContest.Provider>
}

