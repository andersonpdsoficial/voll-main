import styled from 'styled-components'
import facebook from '../Rodape/assets/facebook.png'
import instagram from '../Rodape/assets/instagram.png'
import whatsapp from '../Rodape/assets/whatsapp.png'
import google from '../Rodape/assets/google.png';

const RodapeEstilizado = styled.footer`
height: 100%;
color: white;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center;
`

const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 5%;
    margin: 1em auto;
`

const ItemEstilizado = styled.li`
    list-style-type: none;
    margin: 0 1em;
    width: 2px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ParagrafoEstilizado = styled.p`
    font-size: 14px;
    margin-top: 1em;
    font-weight: 700;
    color: var(--branco);
    align-items: center;
    display: flex;
    justify-content: center;
`

function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href="#">
                        <img src={facebook} alt="logo do facebook" />
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={whatsapp} alt="logo do whatsapp" />
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={google} alt="logo do google" />
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={instagram} alt="logo do instagram" />
                    </a>
                </ItemEstilizado>
            </ListaEstilizada>
            <ParagrafoEstilizado>2023 © </ParagrafoEstilizado>
        </RodapeEstilizado>
    )
}

export default Rodape;