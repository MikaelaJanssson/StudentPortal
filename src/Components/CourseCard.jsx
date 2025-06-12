import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function CourseCard({ course }) {
  return (
    /*Här ligger varje kurs i ett Bootstrap Card*/
    <Card className="mb-3">
      {course.image && (
        <Card.Img
          variant="top"
          src={course.image}
          alt={course.name}
          className="card-img-top"
        />
      )}
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>
          {course.description}
          <br />
          <strong>Längd:</strong> {course.duration}
        </Card.Text>
        <Button as={Link} to={`/courses/${course.id}`} variant="primary">
          Läs mer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
