export function authErrosParse(statusCode, isSignUp) {
  console.log(statusCode);
  if (isSignUp === false) {
    return 'E-mail ou senha incorreto.';
  }
  switch (statusCode) {
    case 409:
      return 'Usuário já existente.';
    case 401:
      return 'Usuário não Autorizado.';
    case 422:
      return 'Confira e preencha todos os campos.';
    default:
      return 'Falha no cadastro.';
  }
}
