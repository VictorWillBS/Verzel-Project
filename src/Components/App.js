import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from '../Pages/Auth';
import UsedCarsPage from '../Pages/Used-Cars';
import GlobalStyled from './GlobalStyle/globalStyled';
import ResponsiveAppBar from './NavBarr/Index';
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<UsedCarsPage />} />
        <Route path="/inciar-sessao/:authType" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
