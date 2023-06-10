import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

const AllPost = () => {
    const [posts, setPosts] = useState([]);

    const allPost = async ()=>{
        const postData = await axios({
            method: 'GET',
            header: {'accept': 'application/json'},
            url: 'https://jsonplaceholder.typicode.com/photos',
        }).then(response=>{
            setPosts(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(() => {
       allPost();
    }, []);

    return (
        <div>
            <h2 className="title">All Post</h2>
            <Container>
                <Row>
                    {
                        posts.map(result=>(
                            <Col lg={3} md={6} key={result.id}>
                                <LazyLoad height={200}>
                                    <Card>
                                        <Card.Img variant="top" src={result.url} />
                                        <Card.Body>
                                            <Card.Title>{result.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </LazyLoad>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllPost;