import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";

const AuthFormBlock = styled.div`
    h3{
        margin: 0;
        color: #FEFEFE;
        margin-bottom: 1rem;
    }
`
const ButtonWhiteMarinTop = styled(Button)`
    margin-top: 1rem;
`
const StyledInput = styled.div`
    font-size: 1rem;
    border:none;
    border-bottom: 1px solid #FEFEFE;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus{
        color: $oc-teal-7;
        border-bottom: 1px solid #FEFEFF;
    }
    &+&{
        margin-top: 1rem;
    }
`
const Footer = styled.div`
    margin-top:2rem;
    text-align : right;
    a{
        color : 1px solid #FEFEFF;
        text-decoration: underline;
        &:hover{
            color: 1px solid #434343;
        }
    }
`
const textMap = {
    login:'로그인',
    register:'회원 가입'
}

const AuthForm = ({type}) => {
    const text = textMap[type];
    return(
        <AuthFormBlock>
            <h3>{text}</h3>
            <form>
                <StyledInput
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                />

                <StyledInput
                    autoComplete="current-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                />
                {type === 're'}
            </form>
        </AuthFormBlock>
    );
}

export default AuthForm;