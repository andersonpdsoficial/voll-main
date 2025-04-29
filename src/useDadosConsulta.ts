
import IConsulta from "./types/IConsulta"
import useFetch from "./useFetch"

const useDadosConsulta = () => {
    const consultas = useFetch<IConsulta[]>('consultas');
    // console.log('esse é os dados do consultas', consultas)
    return useFetch<IConsulta[]>('consultas');
    
}

export default useDadosConsulta