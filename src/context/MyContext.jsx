import { createContext, useState } from "react";

export let MyContext=createContext()
let  MyProvider=({children})=>{
    let [data,setData]=useState()
    console.log(data)
    
    return (
        <MyContext.Provider value={{data}}>{children}</MyContext.Provider>
    )

}
export default MyProvider

// import { createContext, useState } from "react";

// export const MyContext = createContext();

// export const MyProvider = ({ children }) => {
//   const [sharedData, setSharedData] = useState("Hello from Context!");

//   return (
//     <MyContext.Provider value={{ sharedData, setSharedData }}>
//       {children}
//     </MyContext.Provider>
//   );
// };
