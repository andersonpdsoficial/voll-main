import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import IConsulta from "../../types/IConsulta";


function Tabela({consultas}: {consultas: IConsulta[]| null}) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Horário</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Modalidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((linha) => {
                            return (
                                <TableRow key={linha.id}>
                                    <TableCell component="th">{linha.data}</TableCell>
                                    <TableCell>{linha.hora}</TableCell>
                                    <TableCell>{linha.profissional[0].nome}</TableCell>
                                    <TableCell>{linha.especialidade}</TableCell>
                                    <TableCell>{linha.paciente}</TableCell>
                                    <TableCell>{linha.modalidade}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;