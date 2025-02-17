import React, { useContext } from 'react'

import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper

 } from './styles';
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png'
import { AuthContext } from '../../context/auth';
import { Link } from 'react-router-dom';

const Header = () => {

  const {user, handleSignOut} = useContext(AuthContext);

  return (
    <Wrapper>
      <Container>
        <Row>
            <img src={logo} alt='Logo da DIO'/>
            {user.id ? (
              <>
              <BuscarInputContainer>
              <Input placeholder="Buscar"/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu> </>) 
              : null}
            
        </Row>
        <Row>
            {user.id ? (<>
              <UserPicture src='https://avatars.githubusercontent.com/u/2254731?v=4' alt='Foto do usuário'/>
              <a href='#' onClick={handleSignOut}>Sair</a>
              </>
            ) : (
              <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
              </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }