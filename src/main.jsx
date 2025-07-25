import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import  MyProvider  from './context/MyContext.jsx'
import { Provider as ChakraProvider} from "./Components/ui/provider"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <MyProvider>
       <App/>
    </MyProvider>
      
    </ChakraProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
