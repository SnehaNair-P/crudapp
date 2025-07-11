import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ViewProduct from './Component/Product/ViewProduct';
import { toast, ToastContainer } from 'react-toastify';
import Login from '../src/Pages/Login/Login';
import { useAuth } from './Component/UseContext/UseContext';
import Contacts from './Component/Product/Contact';


function App() {

  const { user, loading } = useAuth()
  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <ToastContainer/>
      {
        user ? <>
         <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes></> :
       <Login/>
      }
    </BrowserRouter>
  );
}
export default App;

