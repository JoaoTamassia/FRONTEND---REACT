import React from 'react'
import { InputContainer, IconContainer, InputText, ErrorText } from './styles';
import { Controller } from 'react-hook-form'
import { IIinput } from './types';


const Input = ({leftIcon, name, control,errorMessage,  ...rest}: IIinput) => {
  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller 
            name={name}
            control={control}
            rules={{ required: true }}
            render={({field}) => <InputText {...field}{...rest} />}
        />
        
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input };