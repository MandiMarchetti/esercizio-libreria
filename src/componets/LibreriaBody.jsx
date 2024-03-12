import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Carousel, CarouselItem, Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

//Listi Jason per i libri
import BooksFantasy from "../data/fantasy.json";
//import of CSS
import "../componets/libreria_general.css";

const LibreriaBody = function () {
  return (
    <Container>
      <Row className="mt-2 gy-5">
        <h3 className="titolo-section">Fantasy Books</h3>
        {BooksFantasy.map((fantasy) => {
          return (
            <Col lg={3}>
              <Card style={{ height: "25rem" }}>
                <Card.Img className="h-50 object-fit-cover" variant="top" src={fantasy.img} />
                <Card.Body>
                  <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {fantasy.title}
                  </Card.Title>
                  <Card.Text>{fantasy.category}</Card.Text>
                  <Card.Text>{fantasy.price}</Card.Text>
                  <Button variant="warning">Buy it Now!</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default LibreriaBody;
