import React, { useCallback, useEffect } from 'react'
import Feed from './components/layouts/Feed/Feed'
import Navbar from './components/layouts/Navbar/Navbar.jsx'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {Route,Routes, useNavigate} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import Account from './pages/Account'
import "./configs/notificationConfig.js"
import { handleKeyPress } from './utils/handleKeyPress.js'
import AuthProvider from './components/Providers/AuthProviders.jsx'
import ForgetPassword from './components/form/ForgetPassword.jsx'
import { useSelector } from 'react-redux'
import NotFound from './pages/NotFound.jsx'
const queryClient = new QueryClient()
function App() {
  const navigate = useNavigate()
  const theme = useSelector(state =>state.user.darkMode)?"dark":"light"
  const pressEvent =useCallback((e)=>{
    handleKeyPress(e,navigate)
  },[navigate])
  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', pressEvent);
    // remove the event listener
    return () => {
      document.removeEventListener('keydown', pressEvent);
    };
  }, [pressEvent]);

  return (
    <QueryClientProvider client={queryClient}>
    <div className={`App ${theme} flex`}>
       <Routes>
         <Route  path='/login' element={<Account />}/>
         <Route path='/forgetPassword/:tokenId' element={<ForgetPassword/>}/>
         
         <Route path ='*' element={<>
          <Navbar/>
          <Feed/>
          </>}/>
         <Route path='/notFound' element={<NotFound/>}/>
       </Routes>
       <ToastContainer/>
    </div>
    </QueryClientProvider>
  )
}

export default App