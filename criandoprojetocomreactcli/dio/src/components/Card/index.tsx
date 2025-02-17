import React from 'react'
import {CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture} from './styles'

import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://img.freepik.com/fotos-gratis/um-belo-campo-de-trevo_181624-1245.jpg?ga=GA1.1.1618914071.1739474917&semt=ais_hybrid'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/102441109?v=4'/>
                <div>
                    <h4> Joao Tamassia </h4>
                    <p> 2 hours ago </p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4> Projeto para curso de HTML E CSS </h4>
                <p> Projeto feito o curso de html e css no bootcamp dio do Global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript </h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>


    </CardContainer>
  )
}

export {Card};