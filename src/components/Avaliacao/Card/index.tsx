import { Rating } from "@mui/material"
import IProfissional from "../../../types/IProfissional"
import styled from "styled-components"

const ContainerEstilizado = styled.div`
 flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
    `
    
const ItemEstilizado = styled.li`
list-style-type: none;
`

const ParagrafoNomeEstilizado = styled.p`
    font-weight: 700;
    font-size: 14px;
`
const ListaEstilizada = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`
function Card({profissional} : {profissional: IProfissional}) {
    return (
        <ContainerEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <img src={profissional.imagem} 
                    alt={`Foto de perfil do profissional ${profissional.nome}`} />
                </ItemEstilizado>
                <ItemEstilizado>
                    <ParagrafoNomeEstilizado>{profissional.nome}</ParagrafoNomeEstilizado>
                    <ParagrafoNomeEstilizado>{profissional.especialidade}</ParagrafoNomeEstilizado>
                </ItemEstilizado>
                <ItemEstilizado>
                    <Rating
                        name="half-rating-read"
                        value={profissional.nota}
                        readOnly = {true}
                    />
                </ItemEstilizado>
            </ListaEstilizada>
        </ContainerEstilizado>
    )
}

export default Card