import Header from "./components/Header"
import Formulario from "./components/Formularios"
import ListadoPaciente from "./components/ListadoPaciente";
import { PacienteType, PacienteInit } from "./class/PacienteClass";
import { useState, useEffect } from "react";

function App() {

  const [ pacientes, setPacientes ] = useState<PacienteType[]>([]);
  const [paciente, setPaciente] = useState<PacienteType>(PacienteInit);console.log(paciente)

  const handleAddPaciente = (paciente: PacienteType): void => {
    setPacientes([...pacientes, paciente]);
  }

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-8 md:flex">
        <Formulario 
          pacientes={pacientes}
          handleAddPaciente={handleAddPaciente}
          //pacientePrincipal={paciente}
        />
        <ListadoPaciente 
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App;