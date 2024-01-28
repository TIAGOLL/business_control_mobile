import { Routes, Route } from 'react-router-dom'
import Private from './private';
import Service from '../pages/Service';
import SignIn from './../pages/SignIn/index';




function RoutesApp() {
  return (
    <Routes>

      {/* SignIn */}
      <Route path='/' element={<SignIn />} />

      {/* Service */}
      <Route path='/service' element={<Private><Service /></Private>} />

    </Routes>
  )
}

export default RoutesApp;
