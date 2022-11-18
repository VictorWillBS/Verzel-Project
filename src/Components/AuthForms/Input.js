import TextField from '@mui/material/TextField';

function returnSignInInput(insertSignData, signData) {
  return (
    <>
      <TextField
        id="signIn-Input"
        label="E-mail"
        name="email"
        type="email"
        value={signData.email}
        variant="outlined"
        onChange={(e) => {
          insertSignData(e);
        }}
      />
      <TextField
        id="signIn-Input password"
        label="Senha"
        variant="outlined"
        name="password"
        value={signData.password}
        type="password"
        onChange={(e) => {
          insertSignData(e);
        }}
      />
    </>
  );
}

function returnSignUpInput(insertSignData, signData) {
  return (
    <>
      <TextField
        id="signUp-Input"
        label="Nome"
        name="name"
        type="text"
        value={signData.name}
        variant="outlined"
        onChange={(e) => {
          insertSignData(e);
        }}
      />
      {returnSignInInput(insertSignData, signData)}
      <TextField
        id="signUp-Input"
        label="Confirme a Senha"
        variant="outlined"
        type="password"
        value={signData.confirmPassword}
        name="confirmPassword"
        onChange={(e) => {
          insertSignData(e);
        }}
      />
    </>
  );
}

export default function Input({ isSignUp, signData, setSignData }) {
  function insertSignData(e) {
    const value = e.target.value;
    const name = e.target.name;
    setSignData({ ...signData, [name]: value });
  }

  return isSignUp === true
    ? returnSignUpInput(insertSignData, signData)
    : returnSignInInput(insertSignData, signData);
}
