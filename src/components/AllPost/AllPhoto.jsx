import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import useInView from "react-cool-inview";

const AllPhoto = () => {
    const [photo, setPhoto] = useState([]);

    const userPhoto = async () => {
        const allData = await axios({
            method: "GET",
            header: {'accept': 'application/json'},
            url: `https://jsonplaceholder.typicode.com/photos`
        }).then(res=>{
            setPhoto(res.data);
            console.log(res.data);  
        })
    };
    useEffect(() => {
        userPhoto();
    }, []);
    
    const { observe } = useInView({
        rootMargin: "50px 0px",
        onEnter: ({ unobserve, observe }) => {
          unobserve();
          userPhoto();
          observe();
        },
      });


    return (
        <div>
            <h2 className="title">All Photo</h2>
            <Container>
                <Row>
                    {
                        photo.map((result, idx)=>(
                            <Col lg={3} md={6} key={idx}>
                                    <Card>
                                        <Card.Img variant="top" src={result.url} />
                                        <Card.Body>
                                            <Card.Title>{result.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllPhoto;