import { createContext, useState, useContext } from "react";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const registerToCourse = (course) => {
    setRegisteredCourses([...registeredCourses, course]);
  };

  return (
    <RegistrationContext.Provider
      value={{ registeredCourses, registerToCourse }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
