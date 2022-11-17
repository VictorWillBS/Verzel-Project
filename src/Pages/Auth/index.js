import styled from 'styled-components';
import fundo from '../../assets/image/Mulher-dirigindo-fundo.jpg';
import AuthForms from '../../Components/AuthForms';
export default function AuthPage() {
  return (
    <Container>
      <Content>
        <Figure>
          <img src={fundo} alt="Mulher dirigindo feliz" />
        </Figure>
        <UserSection>
          <AuthForms />
        </UserSection>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100%;
`;
const Content = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Figure = styled.figure`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: start;
  overflow: hidden;
  img {
    width: calc((15px * 66.66));
    height: calc((15px * 66.66));
  }
`;

const UserSection = styled.section`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
