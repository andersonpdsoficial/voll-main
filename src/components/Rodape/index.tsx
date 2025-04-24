import styled from 'styled-components'
import facebook from '../Rodape/assets/facebook.png'
import instagram from '../Rodape/assets/instagram.png'
import whatsapp from '../Rodape/assets/whatsapp.png'

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
`

function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <button
                        onClick={() => {
                            console.log('Social media icons clicked');
                        }}
                        style={{
                            background: 'none',
                            border: 6,
                            padding: 0,
                            cursor: 'pointer',
                        }}
                    >
                        <img src={facebook} alt="logo do facebook" />
<<<<<<< HEAD
                        <img src={instagram} alt="logo do instagram" />
                        <img src={whatsapp} alt="logo do whatsapp" />
                    </button>
=======
                        
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={instagram} alt="logo do instagram" />
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={whatsapp} alt="logo do whatsapp" />
                    </a>
>>>>>>> 19bfe5ed5d858d93a93810e9d6071e9fb98bdbe3
                </ItemEstilizado>
            </ListaEstilizada>
            <p>2025  Desenvolvido por Anderson | Projeto ficticio</p>
        </RodapeEstilizado >
    )
}

export default Rodape