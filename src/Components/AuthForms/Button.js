import { Button, useEventCallback } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export function ButtonSign({ signData, isSignUp }) {
  return (
    <>
      <Button
        id="submit"
        variant="contained"
        sx={{
          '&': { width: '55ch', backgroundColor: '#212121' },
          '&:hover': { backgroundColor: '#212121', filter: 'brightness(1.50)' },
        }}
        onClick={() => {
          console.log(signData);
        }}
      >
        {isSignUp === true ? 'Fazer Cadastro' : 'Iniciar Sessão'}
      </Button>
    </>
  );
}

export function ButtonChangeSign({ signData, isSignUp }) {
  const navigate = useNavigate();

  function redirect() {
    if (isSignUp === true) {
      return navigate('/iniciar-sessao/sign-in');
    } else {
      return navigate('/iniciar-sessao/sign-up');
    }
  }

  return (
    <>
      <Button
        id="submit"
        variant="contained"
        sx={{
          '&': {
            marginTop: '10px',
            width: '55ch',
            color: '#fff  ',
            backgroundColor: '#2196f3',
          },
          '&:hover': { backgroundColor: '#2196f3', filter: 'brightness(1.05)' },
        }}
        onClick={() => {
          redirect();
        }}
      >
        {isSignUp === true ? 'Ou Entre já!' : 'Ou Cadastre-se!'}
      </Button>
    </>
  );
}
