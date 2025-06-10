import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    /*Här ligger varje kurs i ett Bootstrap Card*/
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Button as={Link} to={`/courses/${course.id}`} variant="primary">
          Läs mer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
