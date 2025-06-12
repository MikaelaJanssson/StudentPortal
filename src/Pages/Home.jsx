import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

function Home() {
  return (
    <Container className="mt-4">
      <h1>Välkommen till StudentPortalen!</h1>
      <p>Här kan du läsa om kurser, nyheter och registrera dig.</p>

      <Row className="mt-4">
        {courses.map((course) => (
          <Col md={4} key={course.id} className="mb-3">
            {/* Gör hela kortet klickbart med Link */}
            <Card
              as={Link}
              to={`/courses/${course.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {course.image && (
                <Card.Img
                  variant="top"
                  src={course.image}
                  alt={course.name}
                  style={{ height: "150px", objectFit: "cover" }}
                />
              )}
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
