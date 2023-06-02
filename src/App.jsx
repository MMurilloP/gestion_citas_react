import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLocalStorage =
        JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPaciente(pacientesLocalStorage);
    };
    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacienteActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacienteActualizados);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-500 py-4">
        <div className="container mx-auto">
          <Header />
        </div>
      </header>
      <div className="container mx-auto mt-8">
        <div className="mt-8 md:flex">
          <Form
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
            className="mr-8"
          />

          <PatientList
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-200">© 2023. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
