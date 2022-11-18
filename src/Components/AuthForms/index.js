import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Input from './Input';
import { ButtonChangeSign, ButtonSign } from './Button';
import { useEffect, useState } from 'react';
export default function AuthForms() {
  const { authType } = useParams();
  const signInitial = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  };
  const [signData, setSignData] = useState({ ...signInitial });
  const [isSignUp, setIsSignUp] = useState('');
  const [signStatus, setSignStatus] = useState(false);
  useEffect(() => {
    setIsSignUp(Boolean(authType === 'sign-up'));
    setSignData({ ...signInitial });
    setSignStatus(false);
  }, [authType]);
  return (
    <FormStyled>
      <TitleArticle>
        <h4> Crie ou Inicie uma Sessão</h4>
        <p> Insira as informações nos campos abaixo:</p>
      </TitleArticle>
      <Section isSignUp={isSignUp}>
        <Input
          isSignUp={isSignUp}
          signData={signData}
          setSignData={setSignData}
        />
      </Section>
      <HelperText sucess={signStatus.sucess}>
        <p> {signStatus && signStatus.message}</p>
      </HelperText>
      <ButtonSign
        isSignUp={isSignUp}
        signData={signData}
        signStatus={signStatus}
        setSignStatus={setSignStatus}
      />
      <ButtonChangeSign isSignUp={isSignUp} signData={signData} />
    </FormStyled>
  );
}

const FormStyled = styled.form`
  width: 70%;
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
    @media (max-width: 1000px) {
      width: 90%;
    }
  }
  @media (max-width: 1000px) {
    width: 90%;
    justify-content: start;
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
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const Section = styled.section`
  width: 400px;
  height: ${(props) => (props.isSignUp ? '280px' : '150px')};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin: 20px 0;
  div,
  #signIn-Input,
  #signUp-Input {
    width: 100%;
    height: 50px;
    border-radius: 08px;
    box-sizing: border-box;
  }
  #signUp-Input #password {
    margin-bottom: 10px;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const HelperText = styled.section`
  display: ${(props) => (props.sucess !== true ? 'initial' : 'none')};
  width: 400px;
  margin: 0 0 15px 0;
  padding: 0 10px;
  p {
    font-size: 14px;
    color: #f44336;
  }
  @media (max-width: 1000px) {
    width: 90%;
    padding: 0;
  }
`;
