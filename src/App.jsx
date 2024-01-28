import { BrowserRouter } from "react-router-dom/dist"
import AuthProvider from './contexts/auth'
import RoutesApp from './routes/index';
import { Flip, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
        <ToastContainer autoClose={2000} transition={Flip} closeButton draggable theme='light' />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
