import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {ThemeProvider, CssBaseline} from '@mui/material';

import { ListingPage } from 'pages/listingPage/ListingPage';
import HomePage from "./pages/homePage/HomePage";

import { appTheme } from 'themes/themes';

const _JSXStyle = require('styled-jsx/style').default;
if (typeof global !== 'undefined') {
    Object.assign(global, { _JSXStyle });
}

function App() {
  return (
    <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme />
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/listing-page' element={<ListingPage/>}/>
          <Route path="/*" element={<Navigate replace to='/' />} />

        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
