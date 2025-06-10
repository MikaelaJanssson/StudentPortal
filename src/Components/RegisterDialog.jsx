import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { useRegistration } from "../context/RegistrationContext";

// Komponenten visar dialogruta där användaren kan registrera sig till en kurs
function RegisterDialog({ open, onClose }) {
  // state för formulärdata
  const [form, setForm] = useState({ name: "", email: "", courseId: "" });
  const { registerToCourse } = useRegistration();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // formulärinlämning
  const handleSubmit = () => {
    // Hitta kursen som valts utifrån ID
    const selectedCourse = courses.find((c) => c.id === form.courseId);
    if (selectedCourse) {
      registerToCourse(selectedCourse);
      onClose();

      //  till bekräftelsesidan
      navigate("/confirmation", {
        state: {
          courseName: selectedCourse.name,
          userName: form.name,
        },
      });
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Registrera dig till en kurs</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Namn"
          type="text"
          fullWidth
          variant="outlined"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="E-post"
          type="email"
          fullWidth
          variant="outlined"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="courseId"
          label="Välj kurs"
          select
          fullWidth
          variant="outlined"
          value={form.courseId}
          onChange={handleChange}
        >
          {/* Loopar genom alla kurser och visar som anv.valt */}
          {courses.map((course) => (
            <MenuItem key={course.id} value={course.id}>
              {course.name}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Avbryt</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Registrera
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RegisterDialog;
