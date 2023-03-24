import { useState, useEffect, FormEvent } from "react";
import Swal from 'sweetalert2';
import { PacienteType, PacienteInit } from "../class/PacienteClass";
import Error from "./Error";

const Formulario: React.FC<IPropsFormulario> = ({pacientes, handleAddPaciente , pacientePrincipal, handleEditarPaciente, setPacientePrincipal}) => {
    const [ paciente, setPaciente] = useState<PacienteType>(PacienteInit);
    const [error, setError] = useState<boolean>(false);

    useEffect( () => {
            setPaciente(pacientePrincipal);
    }, [pacientePrincipal])

    const handleSubmit = (e: FormEvent ) => {
        e.preventDefault();

        const {mascota, propietario, email, alta, sintomas} = paciente;

        //validacion de formulario
        if([mascota, propietario, email, alta, sintomas].includes('')){
            setError(true);
            return;
        }

        if(paciente.id){
            handleEditarPaciente({...paciente});
            setPacientePrincipal(PacienteInit)

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se Actualizo Correctamente',
                showConfirmButton: false,
                timer: 1500
            })
    
            setError(false)

            return;

        }

        handleAddPaciente({ id: Date.now().toString(36) + Math.random().toString(36).substring(2), ...paciente});
        setPacientePrincipal({...PacienteInit});

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se guardo correctamente',
            showConfirmButton: false,
            timer: 1500
        })

        setError(false)
        

    }

    return ( 
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h1 className="font-black text-3xl text-center">Seguimiento paciente</h1>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y <span className="text-indigo-600 font-bold">Administrarlos</span>
            </p>

            <form 
                className="bg-white shadow-md rounded py-10 px-5 mb-10"
                onSubmit={handleSubmit}
            >
                {
                    error && (<Error mensaje='Todos los campos son obligatorios' />)
                }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-600 uppercase font-bold">Macosta</label>
                    <input 
                        type='text'
                        placeholder='Nombre de la mascotas'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="mascota"
                        onChange={e => setPaciente({...paciente, mascota:e.target.value})}
                        value={paciente.mascota}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-600 uppercase font-bold">Propietario</label>
                    <input 
                        type='text'
                        placeholder='Nombre del propietario'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="propietario"
                        onChange={e => setPaciente({...paciente, propietario:e.target.value})}
                        value={paciente.propietario}
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-600 uppercase font-bold">Email</label>
                    <input 
                        type='email'
                        placeholder='Correo del propietario'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="email"
                        onChange={e => setPaciente({...paciente, email:e.target.value})}
                        value={paciente.email}
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-600 uppercase font-bold">Alta</label>
                    <input 
                        type='date'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="alta"
                        onChange={e => setPaciente({...paciente, alta:e.target.value})}
                        value={paciente.alta}
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-600 uppercase font-bold">Sintomas</label>
                    <textarea 
                        id='sintomas'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Sintomas"
                        onChange={e => setPaciente({...paciente, sintomas:e.target.value})}
                        value={paciente.sintomas}
                    />
                </div>
                <input 
                    type='submit'
                    className="bg-indigo-600 text-white w-full uppercase rounded-lg p-3 font-bold hover:bg-indigo-700 shadow-md transition-shadow" 
                    value={paciente.id ? 'Actualizar' : 'Agregar'}
                />
            </form>
        </div>
     );
}
 
export default Formulario;

export interface IPropsFormulario{
    //setPacientes: React.Dispatch<React.SetStateAction<PacienteType[]>>
    pacientes: PacienteType[]
    handleAddPaciente: (paciente: PacienteType) => void
    pacientePrincipal: PacienteType
    handleEditarPaciente: (paciente: PacienteType) => void
    setPacientePrincipal: React.Dispatch<React.SetStateAction<PacienteType>>
}
