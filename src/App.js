import AuthPage from './Pages/Auth';
import UsedCarsPage from './Pages/Used-Cars';
import { UserProvider } from './Context/userContext';
import ResponsiveAppBar from './Components/NavBarr/Index';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyled from './Components/GlobalStyle/globalStyled';
export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <BrowserRouter>
          <GlobalStyled />
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<UsedCarsPage />} />
            <Route path="/iniciar-sessao/:authType" element={<AuthPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
