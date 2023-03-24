import { PacienteType } from "../class/PacienteClass";
import Paciente from "./Paciente";

const ListadoPaciente: React.FC<IPropsListadoPaciente> = ({pacientes, setPaciente, handleEliminarPaciente}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
            <h1 className="font-black text-3xl text-center">Listado paciente</h1>

            <p className="text-center text-xl mb-10 mt-5">
                Administra tus <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
            </p>
            
            {
                pacientes && pacientes.length ?
                pacientes.map( (paciente, index) => 
                    <Paciente 
                        paciente={paciente}
                        setPaciente={setPaciente}
                        key={paciente.id}
                        handleEliminarPaciente={handleEliminarPaciente}
                    />
                    )
                :
                <div className="mx-5 my-3 bg-white shadow-md px-5 py-10 rounded-xl text-center">
                    <p className="font-bold">No hay pacientes registrados</p>
                </div>
            }
            
            
            
        </div>
    );
}
 
export default ListadoPaciente;

interface IPropsListadoPaciente{
    pacientes: PacienteType[]
    setPaciente: React.Dispatch<React.SetStateAction<PacienteType>>
    handleEliminarPaciente: (paciente: PacienteType) => void
}