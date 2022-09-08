import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color:lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhilteBox = styled.div`
    .logo-area{
        display:block;
        padding-bottom: 2rem;
        text-align: bold;
        letter-spacing: 2px;
        
    }
    box-shadow: 0 0 8px rgba(0,0,0,0.025);
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 2px;

`;

const AuthTemplate = ({children}) => {
    return(
        <AuthTemplateBlock>
            <WhilteBox>
                <div className="logo-area">
                    <Link to="/">ORANGE</Link>
                </div>
            {children}
            </WhilteBox>
        </AuthTemplateBlock>
    );
}

export default AuthTemplate;