import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Container, Card} from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
const axios = require("axios").default;

const ShowUser = () => {
    const {showID} = useParams();
    const [user, setUser] = useState([]);

    const userData = async ()=>{
        const allData = axios({
            method: 'GET',
            header: 'Content-Type: application/json',
            url: `https://63353199849edb52d6fcfbd3.mockapi.io/customers/${showID}`
        }).then(response=>{
            setUser(response.data);
            console.log(user);
        }).catch(error=>{
            console.log(error);
        })
    }
    useEffect(() => {
       userData();
    }, []);

    return (
        <div>
            <Navigation></Navigation>
            <Container className='mt-4'>
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={user.avatar} />
                    <Card.Body>
                        <Card.Title>{user.first_name} {user.Last_name}</Card.Title>
                            <Card.Text>
                                {user.email}
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ShowUser;