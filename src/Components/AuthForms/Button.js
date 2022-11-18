import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signUp, signIn } from '../../Services/authApi';
import { toast } from 'react-toastify';
import { authErrosParse } from '../../utils/apiErrosParse';
import { useContext } from 'react';
import userContext from '../../Context/userContext';

export function ButtonSign({ signData, isSignUp, setSignStatus }) {
  const { setUserData } = useContext(userContext);
  const navigate = useNavigate();
  async function submit(e) {
    e.preventDefault();
    if (isSignUp === true) {
      try {
        toast('Cadastro Concluído!');
        await signUp(signData);
        setSignStatus({ sucess: true, message: '' });
        navigate('/iniciar-sessao/sign-in');
      } catch ({ response }) {
        setSignStatus({
          sucess: false,
          message: authErrosParse(response.status, isSignUp),
        });
      }
    } else {
      delete signData.confirmPassword;
      delete signData.name;
      try {
        const response = await signIn(signData);
        toast('Bem-vindo!');
        setUserData(response);
        setSignStatus({ sucess: true, message: '' });
        navigate('/');
      } catch ({ response }) {
        setSignStatus({
          sucess: false,
          message: authErrosParse(response.status, isSignUp),
        });
      }
    }
  }
  return (
    <>
      <Button
        id="submit"
        variant="contained"
        sx={{
          '&': { width: '55ch', backgroundColor: '#212121' },
          '&:hover': { backgroundColor: '#212121', filter: 'brightness(1.50)' },
        }}
        onClick={(e) => {
          submit(e);
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
