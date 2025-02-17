import React from 'react'

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
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
      <Container>
        <Row>
            <img src={logo} alt='Logo da DIO'/>
            {autenticado ? (
              <>
              <BuscarInputContainer>
              <Input placeholder="Buscar"/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu> </>) 
              : null}
            
        </Row>
        <Row>
            {autenticado ? (
              <UserPicture src='https://avatars.githubusercontent.com/u/2254731?v=4' alt='Foto do usuário'/>
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