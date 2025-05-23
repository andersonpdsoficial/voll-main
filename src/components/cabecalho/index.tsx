import styled from 'styled-components'
import logo from '../cabecalho/assets/logo.png'
import perfil from '../cabecalho/assets/perfil.png'

const CabecalhoEstilizado = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: .1;
`
const LinkEstilizado = styled.a`
color: var(--azul-escuro);
font-weight: 700;
`

function Cabecalho() {
    return (
        <CabecalhoEstilizado>
            <img src={logo} alt="logo da imagem" />
            <Container>
                <img src={perfil} alt="imagem de perfil do usuario" />
                <LinkEstilizado href="#">Sair </LinkEstilizado>
            </Container>

        </CabecalhoEstilizado>
    )

}

export default Cabecalho