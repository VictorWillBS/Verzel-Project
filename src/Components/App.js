import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import { UserProvider } from '../Context/userContext';
import AuthPage from '../Pages/Auth';
import UsedCarsPage from '../Pages/Used-Cars';
import GlobalStyled from './GlobalStyle/globalStyled';
import ResponsiveAppBar from './NavBarr/Index';
export default function App() {
  return (
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
  );
}
