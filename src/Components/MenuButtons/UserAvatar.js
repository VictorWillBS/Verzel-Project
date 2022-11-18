import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import userContext from '../../Context/userContext';
import { useNavigate } from 'react-router-dom';
export function UserButtom() {
  const { userData, setUserData } = useContext(userContext);
  const navigate = useNavigate();
  function redirectToSign() {
    if (userData.name) {
      return;
    }
    navigate('/iniciar-sessao/sign-in');
  }
  const name = userData.name || '';
  console.log(name);
  const firstName = name.split(' ')[0];
  return (
    <UserSection
      onClick={() => {
        redirectToSign();
      }}
    >
      <IconContext.Provider
        value={{
          size: '30px',
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <HiOutlineUserCircle />
      </IconContext.Provider>
      <h5>{name ? firstName : 'Cadastrar'}</h5>
    </UserSection>
  );
}
const UserSection = styled.section`
  max-width: 200px;
  width: 100%;
  height: 85px;
  margin-right: 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-size: 18px;
    font-weight: 600;

    :active {
      color: #1e88e5;
    }
  }
  :hover {
    cursor: pointer;
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    h5 {
      display: none;
    }
  }
  @media (min-width: 0px) and (max-width: 900px) {
    display: none;
  }
`;
