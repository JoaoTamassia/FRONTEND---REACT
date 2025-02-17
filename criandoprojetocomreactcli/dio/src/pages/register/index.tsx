import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Column, Container, Row, SubtitleLogin, TextNegrito, Title, TitleLogin, Wrapper, SubTextoRegister, FazerLoginText } from "./styles"
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { api } from "../../services/api"



const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  senha: yup.string().min(6, 'Sua senha deve ter 6 caracteres').required('Campo obrigatório'),
}).required();

const Register = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data: any) => {
        try{
            api.post('users', data)
            navigate('/login')
        } catch{
            alert('Erro ao fazer cadastro')
            console.log(data)
        }

    };

    return (<>
        <Header/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnmologias 
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors?.name?.message} placeholder="Nome completo" control={control} leftIcon={<MdPerson/>}/>
                            <Input name="email" errorMessage={errors?.email?.message} placeholder="E-mail" control={control} leftIcon={<MdEmail/>}/>
                            <Input name="senha" errorMessage={errors?.senha?.message} placeholder="Password" control={control} leftIcon={<MdLock/>}/>
                            <Button title="Criar minha conta" variant="secondary" type="submit"/>
                        </form>
                        <Row>
                            <SubTextoRegister>Ao clicar em "criar minha conta grátis", 
                                declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTextoRegister>
                        </Row>
                        <Row>
                            <>
                                <TextNegrito>Já tenho conta</TextNegrito>
                                <FazerLoginText>Fazer login</FazerLoginText>
                            </>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>)
    }

export { Register }