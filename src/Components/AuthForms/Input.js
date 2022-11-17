import TextField from '@mui/material/TextField';

export default function Input({ isSignUp }) {
  function returnInput() {
    if (isSignUp === true) {
      return (
        <>
          {' '}
          <TextField id="signUp-Input" label="Nome" variant="outlined" />
          <TextField id="signIn-Input" label="E-mail" variant="outlined" />
          <TextField id="signIn-Input" label="Senha" variant="outlined" />
          <TextField
            id="signUp-Input"
            label="Confirme a Senha"
            variant="outlined"
          />
        </>
      );
    } else {
      return (
        <>
          <TextField id="signIn-Input" label="E-mail" variant="outlined" />
          <TextField id="signIn-Input" label="Senha" variant="outlined" />
        </>
      );
    }
  }
  return returnInput();
}
