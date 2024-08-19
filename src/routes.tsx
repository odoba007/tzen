import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import ReLogin from './pages/relogin'
import Check from './pages/check'
import ThankYou from './pages/thanks'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<Navigate to={"/login"} />} /> */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/re-login' element={<ReLogin/>}/>
            <Route path='/check-user' element={<Check/>}/>
            <Route path='/thank-you' element={<ThankYou/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}