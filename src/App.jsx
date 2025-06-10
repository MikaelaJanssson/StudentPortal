import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import News from "./Pages/News";
import { RegistrationProvider } from "./Context/RegistrationContext";
import Confirmation from "./Pages/Confirmation";

function App() {
  return (
    <RegistrationProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/confirmation" element={<Confirmation />} />;
        </Routes>
      </Router>
    </RegistrationProvider>
  );
}

export default App;
