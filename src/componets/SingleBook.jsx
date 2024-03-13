import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//Listi Jason per i libri
import BooksFantasy from "../data/fantasy.json";
//import of CSS
import "../componets/libreria_general.css";

function SingleBook(fantasy) {
  return (
    <Container>
      <Row className="mt-2 gy-5">
        <h3 className="titolo-section">Single Book</h3>
        <Col className="mt-2 gy-5">
          <Card style={{ height: "25rem" }}>
            <Card.Img className="h-50 object-fit-cover" variant="top" src={fantasy.img} />
            <Card.Body>
              <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {fantasy.title}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleBook;
