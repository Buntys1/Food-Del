import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const[cartItems,setCartitems]=useState({});

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartitems((prev)=>({...prev,[itemId]:1.}))
        }else{
            setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFrromCart=(itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalamount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                totalamount += itemInfo.price * cartItems[item];
            }
        }
        return totalamount;
    }

    const cotextValue={
        food_list,
        cartItems,
        setCartitems,
        addToCart,
        removeFrromCart,
        getTotalCartAmount
    }
    
        return (
            <StoreContext.Provider value={cotextValue}>
              {props.children}
            </StoreContext.Provider>
          );
          
    
}

export default StoreContextProvider