const Error: React.FC<IPropsErros> = ({mensaje /*, children*/}) => {
    return ( 
        <div className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-lg">
            {mensaje}
            {/*children*/}
        </div>
     );
}
 
export default Error;

export interface IPropsErros{
    mensaje: string
    //children: (string | Element)[]
}