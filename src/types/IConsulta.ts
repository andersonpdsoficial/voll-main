import IProfissional from "./IProfissional";

export default interface IConsulta {
id: number;
data: string;
hora: string;
profissional: Array<IProfissional>
especialidade: string;
paciente: string;
modalidade: string;


}