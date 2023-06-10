import React from 'react';
import { Container } from 'react-bootstrap';
import useWindowSize from '../../Hooks/useWindowSize';


const CustomHook = () => {

    const myHook = useWindowSize();

    return (
        <Container className='my-5'>
            <h1 className={myHook ? 'small' : 'large'}>Custom Hook</h1>
        </Container>
    );
};

export default CustomHook;