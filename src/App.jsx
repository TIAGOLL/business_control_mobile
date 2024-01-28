import { BrowserRouter } from "react-router-dom/dist"
import AuthProvider from './contexts/auth'
import RoutesApp from './routes/index';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
