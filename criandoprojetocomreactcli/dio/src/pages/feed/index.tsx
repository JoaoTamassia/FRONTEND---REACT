import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"

import { Container, Column, Title, TitleHighlight } from "./styles"

const Feed = () => {

    return (<>
        <Header/>
        <Container>
            <Column flex={3}>
                <Title> Feed </Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo percentual={35} nome="Joao Tamassia" image="https://avatars.githubusercontent.com/u/102441109?v=4"/>
                <UserInfo percentual={50} nome="Joao Tamassia" image="https://avatars.githubusercontent.com/u/102441109?v=4"/>
                <UserInfo percentual={70} nome="Joao Tamassia" image="https://avatars.githubusercontent.com/u/102441109?v=4"/>
                <UserInfo percentual={90} nome="Joao Tamassia" image="https://avatars.githubusercontent.com/u/102441109?v=4"/>
            </Column>
        </Container>
        </>
    )
}

export { Feed }