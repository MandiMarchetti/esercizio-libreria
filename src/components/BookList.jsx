import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = function (props) {
  return (
    <Container fluid>
      <Row className="cards_row">
        {props.listOfBooks.map((oneBook) => {
          return (
            <Col lg="2" className="my-2" key={oneBook.asin}>
              <SingleBook bookDetails={oneBook} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;
