import React from 'react';

import styled from 'styled-components'
import Button from'./Components/Button'

import "survey-react/survey.css"
import DropDownSurvey from './Components/DropDownSurvey'
import DragDrop from './Components/DragDrop'

const MainWrapper = styled.section`
    width: 100%;
    max-width: 1200px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
`

const PaginationWrapper = styled.div`
    display: flex;
    width :100%;
    justify-content: ${({page}) =>{
        if(page === 'first') return 'flex-end';
        else if (page === 'middle') return 'space-between';
        else return 'flex-start';
    }}
`

const Link = styled.a.attrs(props => ({
    target: '_blank'
}))`
    color: violet;
    font-size: 1.5rem;
`

function App() {
    return (
        <MainWrapper>
        <Button primary margin='5rem'>
            My Primary Button
        </Button>
        <Button>
            My button
        </Button>
        <PaginationWrapper page={'first'}>
            <Button>Page 1</Button>
        </PaginationWrapper>
        <DragDrop />
        <DropDownSurvey />

        <Link href='https://www.facebook.com' >Facebook</Link>
        <Link href='https://www.google.com' >Google</Link>
    </MainWrapper>
    )
}

export default App;