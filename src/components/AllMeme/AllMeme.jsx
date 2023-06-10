import React, {useContext, useState,useEffect} from 'react'
import { Container, Row, Col, Table, Button, InputGroup, FormControl, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Delete from '../Delete/Delete';
import EditUser from '../EditUser/EditUser';
const axios = require("axios").default;

const AllMeme = () => {
    const defaultAvatar = 'https://www.gigacer.it/wp-content/uploads/2020/04/avatar-large-square-1030x1030-1.jpg';
    const [user, setUser] = useState([]);

    const [delModal, setDelModal] = useState(false);
    const [itemID, setItemID] = useState(0);
    const handleClose = () => setDelModal(false);
    const delShow = (d_id) => {
        setDelModal(true);
        setItemID(d_id)
    };

    const userData = async ()=>{
        const allData = await axios({
            method: 'GET',
            header: 'Content-Type: application/json',
            url: `https://63353199849edb52d6fcfbd3.mockapi.io/customers/`
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
       <Container>
           <Row>
               <Col>
                    <h1 className="title">All Users </h1>
                    <Link to="/add"><Button className='addBtn btnGap' variant='success'>Add User</Button></Link>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Search User"/>
                    </InputGroup>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((result)=>(
                                        <tr key={result.id}>
                                            <td>{result.id}</td>
                                            <td>
                                                <img src={result.avatar} alt="person" />
                                            </td>
                                            <td>{result.first_name} {result.last_name}</td>
                                            <td>{result.email}</td>
                                            <td>
                                                <Link to={'/show/'+ result.id}><Button className='btnGap' variant='primary'>Show</Button></Link>
                                                <Button className='btnGap' variant='success'>Edit</Button>
                                                <Button variant='danger' onClick={()=>delShow(result.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))
                                }   
                            </tbody>
                        </Table>
                   
               </Col>
           </Row>

           {/* Delete Modal starts */}
           <Modal show={delModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Delete deleteID={itemID} mdlClose={handleClose}></Delete>
                </Modal.Body>
            </Modal>



       </Container>
    )
}

export default AllMeme
