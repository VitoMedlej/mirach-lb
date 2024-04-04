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
        const [cartOpen,
            setCartOpen] = useState(false);
            
                const categories = useCategories()
                const [lang,
                    setLang] = useState('en');
                        // Load language from localStorage on component mount

                        // const fetchDataAndSetCates = async () => {
                        //     try{


                        //         const response = await fetch('https://api.jsonbin.io/v3/b/65c0fe93266cfc3fde861dfb', {
                        //           method: 'GET',
                        //           headers: {
                        //             'Content-Type': 'application/json',
                        //             'X-Master-Key': '$2a$10$FjBR4hwwu8E5waevcvrb0uWtCoiXS0JN0Ut2bxF55izDfGmh0GDUG'
                        //           }
                        //         })
                        //         if (!response?.ok) {
                        //           throw new Error(`Failed to fetch data. Status: ${response?.status}`);
                        //         }
                            
                        //         const data = await response.json();
                        //         console.log('data: ', data);
                        //         setCates(data?.record); // Assuming 'record' is the property containing the images in the response
                        //       }
                        //       catch(e){
                        //         console.log('e: ', e);
                            
                        //       }
                        //  }
    useEffect(() => {
        const savedLang = loadState('Vz124tf');
        if (savedLang) {
            setLang(savedLang);
        }
        // fetchDataAndSetCates()

    }, []);

 
    // Save language to localStorage whenever it changes
    useEffect(() => {
        saveState('Vz124tf', lang);



     





    }, [lang]);
            return (
                
                <DrawerContext.Provider value={{open,setOpen}}>
        <Categories.Provider value={{categories}}>
            
        <CartContext.Provider value={{cartOpen, setCartOpen}}>
        <LangContext.Provider value={{lang, setLang}}>

        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            {children}
            </LangContext.Provider>
   
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
