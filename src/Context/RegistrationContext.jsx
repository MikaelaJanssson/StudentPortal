import { createContext, useState, useContext, useEffect } from "react";

// Skapar ett Context för registrering av kurser
const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  // Hämtar registrerade kurser från localStorage när appen startar
  // Om inget finns sparat, startar vi med en tom array
  const [registeredCourses, setRegisteredCourses] = useState(() => {
    const stored = localStorage.getItem("registeredCourses");
    return stored ? JSON.parse(stored) : [];
  });

  // Funktion för att registrera en kurs
  // Kollar först om kursen redan finns i listan för att undvika dubbletter
  const registerToCourse = (course) => {
    const alreadyRegistered = registeredCourses.some((c) => c.id === course.id);
    if (!alreadyRegistered) {
      // Om kursen inte finns, läggs den till i listan och sparas i state + localStorage
      const updatedCourses = [...registeredCourses, course];
      setRegisteredCourses(updatedCourses);
      localStorage.setItem("registeredCourses", JSON.stringify(updatedCourses));
    } else {
      // Om kursen redan är registrerad kan vi logga det eller visa ett meddelande
      console.log("Kursen är redan registrerad");
    }
  };

  // Effekt som körs när registeredCourses ändras
  // Säkerställer att localStorage alltid är uppdaterat med senaste data
  useEffect(() => {
    localStorage.setItem(
      "registeredCourses",
      JSON.stringify(registeredCourses)
    );
  }, [registeredCourses]);

  // Gör registeredCourses och registerToCourse tillgängliga för komponenter som använder detta context
  return (
    <RegistrationContext.Provider
      value={{ registeredCourses, registerToCourse }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

// Hook för att komma åt context i komponenter
export const useRegistration = () => useContext(RegistrationContext);
