// Pages/MyCourses.jsx
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useRegistration } from "../context/RegistrationContext";

function MyCourses() {
  const { registeredCourses } = useRegistration();

  return (
    <Container className="mt-4">
      <Typography variant="h4" gutterBottom>
        Mina registrerade kurser
      </Typography>
      {registeredCourses.length === 0 ? (
        <Typography>
          Du har inte registrerat dig på några kurser ännu.
        </Typography>
      ) : (
        <List>
          {registeredCourses.map((course) => (
            <ListItem key={course.id}>
              <ListItemText
                primary={course.name}
                secondary={`Lärare: ${course.teacher} • Längd: ${course.duration}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default MyCourses;
