export class Paciente {
    id: number
    mascota: string
    propietario: string
    email: string
    alta: string
    sintomas: string

    constructor(
        id: number,
        mascota: string,
        propietario: string,
        email: string,
        alta: string,
        sintomas: string,
    ){
        this.id = id;
        this.mascota = mascota;
        this.propietario = propietario
        this.email = email;
        this.alta = alta;
        this.sintomas = sintomas;
    }
}

export type PacienteType = {
    id?: string
    mascota: string
    propietario: string
    email: string
    alta: string
    sintomas: string
}

export const PacienteInit = {
    mascota: '',
    propietario: '',
    email: '',
    alta: '',
    sintomas: '',
}