import { courses } from "../data/courses";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "../components/CourseCard";

/* Här används Bootstrap för Layout - Grid - Row  */
/*Visar kurser */
function Courses() {
  return (
    <Container className="mt-4">
      <Row>
        {courses.map((course) => (
          <Col md={4} key={course.id}>
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Courses;
