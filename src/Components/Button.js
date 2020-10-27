import React from 'react'

import styled,{css} from 'styled-components'

import {Wrapper, FadeIn} from './styled/index'

const OuterWrapper = styled.div`
    /* display: flex; */
    width: 100%;
    background-color: blueviolet;
    margin-top: 2rem;
    cursor: pointer;

`


const StyledButton = styled.button`
    background-color:white;
    color: ${props => props.theme.colors.main};
    font-size: 1.${props => props.theme.fontSizes.small};
    margin: ${({margin}) => margin || '2rem'};
    padding: 0.5rem 1rem;
    border: 1px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
    animation: 1s ${FadeIn} ease-in;

    ${({primary}) => primary && css`
        background-color: palevioletred;
        color: white;
        box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.5)

        
    }
    `}

    &:hover{
        color: white;
        background-color: palevioletred;
        box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,5)
    }

    @media ${({theme}) => theme.mediaQueries['below-768']}{
        font-size: 0.4rem;
        color: blue;
    }

    ${OuterWrapper}:hover &{
        color:black;
    }
`



const SuperButton = styled(StyledButton)`
    font-size: 2.5rem
`


const Button = ({primary, margin, children}) =>{
    return(
            <OuterWrapper>
                    <StyledButton primary={primary} >
                        {children}
                    </StyledButton>
            </OuterWrapper>
            
            
    )
}

export default Button