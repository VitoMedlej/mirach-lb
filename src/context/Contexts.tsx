"use client"
import { createContext, useContext, useEffect, useState } from "react";
import NextNProgress from 'nextjs-progressbar';
import { loadState, saveState } from "@/Utils/LocalstorageFn";
import useCategories from "@/Hooks/useCategories";


export const DrawerContext = createContext < any > ({});
export const CartContext = createContext < any > ({});
export const Categories = createContext < any > ([]);
export const LangContext = createContext < any > ('en');






 const ContextWrapper  = ({children}:  {
        children: React.ReactNode;
      }
      ) => {

    
        const [open,
            setOpen] = useState(false);
               
        const [categories,
            setCategories] = useState([]);
        const [cartOpen,
            setCartOpen] = useState(false);
   
            return (
                
                <DrawerContext.Provider value={{open,setOpen}}>
        <Categories.Provider value={{categories,setCategories}}>
            
        <CartContext.Provider value={{cartOpen, setCartOpen}}>

        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            {children}
   
        </CartContext.Provider>
        </Categories.Provider>
    </DrawerContext.Provider>
            )
        }

export default ContextWrapper

export const useDrawerContext = () => useContext(DrawerContext);
export const useCartContext = () => useContext(CartContext);
export const useCategoriesContext = () => useContext(Categories);
export const useLangContext = () => useContext(LangContext);
