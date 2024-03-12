import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Carousel, CarouselItem, Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

//Listi Jason per i libri
import BooksFantasy from '../data/fantasy.json'
import BooksHistory from '../data/history.json'
import BooksRomance from '../data/romance.json'




const LibreriaBody = function(){
    return(
        <Container>
            <Row className=''>
                <Col xs={4}>
                <h3>Fantasy Books</h3>
                    <Carousel>
                        {
                            BooksFantasy.map(fantasy => {
                                return (
                                    <Carousel.Item>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={fantasy.img} />
                                            <Card.Body>
                                                <Card.Title>{fantasy.title}</Card.Title>
                                                <Card.Text>{fantasy.category}</Card.Text>
                                                <Card.Text>{fantasy.price}</Card.Text>
                                                <Button variant="primary">Buy it Now!</Button>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </Col>

                <Col xs={4}>
                <h3>History Books</h3>
                    <Carousel>
                        {
                            BooksHistory.map(history => {
                                return (
                                    <Carousel.Item>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={history.img} />
                                            <Card.Body>
                                                <Card.Title>{history.title}</Card.Title>
                                                <Card.Text>{history.category}</Card.Text>
                                                <Card.Text>{history.price}</Card.Text>
                                                <Button variant="primary">Buy it Now!</Button>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </Col>

                <Col xs={4}>
                <h3>Romance Books</h3>
                    <Carousel>
                        {
                            BooksRomance.map(romance => {
                                return (
                                    <Carousel.Item>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={romance.img} />
                                            <Card.Body>
                                                <Card.Title>{romance.title}</Card.Title>
                                                <Card.Text>{romance.category}</Card.Text>
                                                <Card.Text>{romance.price}</Card.Text>
                                                <Button variant="primary">Buy it Now!</Button>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default LibreriaBody