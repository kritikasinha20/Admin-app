import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../Header';
const Layouts = (props) => {
    return (
        <>
        <Header/>
        <Container>
        {props.children}
        </Container>
            
            </>
    )
}

export default Layouts;
