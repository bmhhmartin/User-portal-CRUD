import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Container} from 'react-bootstrap';
const axios = require("axios").default;

const Delete = (props) => {
    const delID = props.deleteID;
    const navigate = useNavigate();

    const deleteUser=async (e)=>{
        e.preventDefault();
        try{
            const data = await axios({
                method: "DELETE",
                header: {'accept': 'application/json'},
                url: `https://63353199849edb52d6fcfbd3.mockapi.io/customers/${delID}`
            });
            console.log(data);
            navigate('/');
        }catch(error){
            alert(error);
        }
    }

    
    return (
        <>
            <Container>
                <div className='deleteDisplay'>
                    <h2 className='subtitle'>Confirm ?</h2>
                    <Button variant="danger" onClick={deleteUser}>Yes</Button>
                </div>
            </Container>
        </>
    );
};

export default Delete;