import { PacienteType } from "../class/PacienteClass";

const Paciente: React.FC<IPropsPaciente> = ({paciente, setPaciente}) => {

    const { id, mascota, propietario, email, alta, sintomas } = paciente

    const handleEditar = () => {
        setPaciente({...paciente});
    }

    return ( 
        <div className="mx-5 my-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{mascota}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">{alta}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>
            <div className="py-2 flex justify-between">
                <button 
                    type="button" 
                    className="px-10 py-1 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded mr-2"
                    onClick={handleEditar}
                >Editar</button>
                <button type="button" className="px-10 py-1 bg-red-600 hover:bg-red-700 text-white uppercase rounded">Eliminar</button>
            </div>
        </div>
     );
}
 
export default Paciente;

interface IPropsPaciente{
    paciente: PacienteType
    setPaciente: React.Dispatch<React.SetStateAction<PacienteType>>
}