import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './pages/authentification/style';

import HomePage from "./pages/homepage/HomePage";
import Login from './pages/authentification/Login'
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<HomePage />} />
          <Route path="/*" element={<Navigate replace to='/' />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
