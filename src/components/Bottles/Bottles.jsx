import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../Utilities/localstorate";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(() =>{
        console.log('called useEffect', bottles.length)
        if(bottles.length > 0 ){
            const storedCart = getStoredCart();
            console.log(storedCart,bottles)
            const savedCart = [];
            for(const id of storedCart){
                console.log(id)
                const bottle = bottles.find(bottle =>bottle.id === id)
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            console.log('save cart',savedCart)
            setCart(savedCart)
        }
    },[bottles])

    const handleAddToChart = (bottle) =>{
        const newCart = [...cart,bottle]
        setCart(newCart);
        addToLS(bottle.id)
    }

    return (
        <div>
            <h3>Bottles Available : {bottles.length}</h3>
            <Cart cart={cart}></Cart>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle 
                    key={bottles.id}
                    bottle={bottle}
                    handleAddToChart = {handleAddToChart}
                    ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;