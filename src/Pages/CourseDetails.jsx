import { useState } from "react";
import RegisterDialog from "./components/RegisterDialog";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [openDialog, setOpenDialog] = useState(false);

  if (!course) return <p>Kursen hittades inte.</p>;

  return (
    <div className="container mt-4">
      <h2>{course.name}</h2>
      <p>{course.details}</p>
      <button className="btn btn-primary" onClick={() => setOpenDialog(true)}>
        Registrera mig
      </button>

      {/* Här används Material UI-komponenten */}
      <RegisterDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </div>
  );
}
