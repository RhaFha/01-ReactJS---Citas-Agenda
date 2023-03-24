import Header from "./components/Header"
import Formulario from "./components/Formularios"
import ListadoPaciente from "./components/ListadoPaciente";
import { PacienteType, PacienteInit } from "./class/PacienteClass";
import { useState, useEffect } from "react";

function App() {

  const [ pacientes, setPacientes ] = useState<PacienteType[]>([]);
  const [paciente, setPaciente] = useState<PacienteType>(PacienteInit);

  useEffect( () => {
    if(pacientes.length === 0 && localStorage.getItem('pacientes') !== null){
        const storedPacientes = JSON.parse(localStorage.getItem('pacientes') as string) as PacienteType[];
        setPacientes(storedPacientes)
        return;
      }
      
      localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const handleAddPaciente = (paciente: PacienteType): void => {
    setPacientes([...pacientes, paciente]);
  }

  const handleEliminarPaciente = (pacienteAEliminar: PacienteType): void => {
    const pacienteEliminado = pacientes.filter( p => {
      if(pacienteAEliminar.id !== p.id) return p;
    });

    if(paciente.id && paciente.id === pacienteAEliminar.id) {setPaciente({...PacienteInit})};

    setPacientes(pacienteEliminado);

  }

  const handleEditarPaciente = (paciente: PacienteType): void => {
      const pacienteActualizado = pacientes.map( p => {
        if(paciente.id === p.id) return paciente;

        return p;
      });
      
      setPacientes([...pacienteActualizado]);
  }

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-8 md:flex">
        <Formulario 
          pacientes={pacientes}
          handleAddPaciente={handleAddPaciente}
          pacientePrincipal={paciente}
          handleEditarPaciente={handleEditarPaciente}
          setPacientePrincipal={setPaciente}
        />
        <ListadoPaciente 
          pacientes={pacientes}
          setPaciente={setPaciente}
          handleEliminarPaciente={handleEliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;