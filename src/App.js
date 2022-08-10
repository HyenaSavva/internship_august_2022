import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {ThemeProvider, CssBaseline} from '@mui/material';

import { ListingPage } from 'pages/listingPage/ListingPage';
import HomePage from "./pages/homePage/HomePage";
import { appTheme } from 'themes/themes';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />

      <div className="App">
        <BrowserRouter>
          <Routes>
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
