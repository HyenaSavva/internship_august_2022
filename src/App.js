import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./pages/homePage/HomePage";
import { ListingPage } from './pages/listingPage/ListingPage';

const _JSXStyle = require('styled-jsx/style').default;
if (typeof global !== 'undefined') {
    Object.assign(global, { _JSXStyle });
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/listing-page" element={<ListingPage />} />
          <Route path="/*" element={<Navigate replace to='/' />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
