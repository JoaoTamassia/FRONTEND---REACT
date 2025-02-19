import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles"
import { IFormData } from "./types";
import { useAuth } from "../../hooks/useAuth";

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().min(3, 'Sua senha deve ter 3 caracteres').required('Campo obrigatório'),
  }).required();

const Login = () => {
    const {handleLogin} = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (FormData: IFormData) => {
        handleLogin(FormData);
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnmologias 
                     e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input name="password"  errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        
                        <CriarText>Criar conta</CriarText>
                        
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { Login }