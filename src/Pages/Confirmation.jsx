import { useLocation } from "react-router-dom";
import { Alert, Container } from "@mui/material";

function Confirmation() {
  const location = useLocation();
  const { courseName, userName } = location.state || {};

  return (
    <Container className="mt-4">
      <Alert severity="success" variant="filled">
        Tack {userName || "student"} för din registrering till kursen{" "}
        <strong>{courseName || "okänd kurs"}</strong>!
      </Alert>
    </Container>
  );
}

export default Confirmation;
