import './App.css';
import Cabecalho from './components/cabecalho';
import Container from './components/Container';
import Titulo from '../src/components/Titulo/index';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import useDadosConsulta from './useDadosConsulta';

function App() {
  const {dados, erro}= useDadosConsulta();
  return (
    <>
    <Cabecalho />
    <Container>
      <Titulo>Área Administrativa</Titulo>
      <Tabela consultas={dados} />
    </Container>
    <Rodape />
   
    </>
  );
}

export default App;
