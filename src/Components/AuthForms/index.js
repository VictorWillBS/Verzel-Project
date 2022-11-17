import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import Input from './Input';
export default function AuthForms() {
  const { authTypes } = useParams();

  return (
    <FormStyled>
      <TitleArticle>
        <h4> Crie ou Inicie uma Sessão</h4>
        <p> Insira as informações nos campos abaixo:</p>
      </TitleArticle>
      <Section>
        <Input isSignUp={false} />
      </Section>
      <Button
        id="submit"
        variant="contained"
        sx={{ '&': { width: '55ch', backgroundColor: '#000' } }}
      >
        Iniciar sessão
      </Button>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  width: 700px;
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #submit {
    width: 400px;
    height: 50px;
    border-radius: 10px;
  }
`;
const TitleArticle = styled.article`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  h4 {
    font-size: 28px;
    font-weight: 700px;
  }
  p {
    font-size: 14px;
    font-weight: 500px;
    color: #424242;
  }
`;

const Section = styled.section`
  width: 400px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  margin: 20px 0;
  div,
  #signIn-Input,
  #signUp-Input {
    width: 100%;
    height: 50px;
    border-radius: 08px;
    box-sizing: border-box;
  }
  #signUp-Input {
    display: ${(props) => (props.isSignUp ? 'block' : 'none')};
  }
`;
