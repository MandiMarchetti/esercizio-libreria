import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleBook = function (props) {
  return (
    <Card style={{ height: "25rem" }}>
      <Card.Img className="h-50 object-fit-cover" variant="top" src={props.bookDetails.img} />
      <Card.Body>
        <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {props.bookDetails.title}
        </Card.Title>
        <Card.Text>{props.bookDetails.category}</Card.Text>
        <Card.Text>{props.bookDetails.price}</Card.Text>
        <Button variant="warning">Buy it Now!</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
