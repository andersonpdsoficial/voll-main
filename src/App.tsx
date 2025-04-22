import './App.css';
import Cabecalho from './components/cabecalho';
import Container from './components/Container';
import Titulo from '../src/components/Titulo/index';

function App() {
  return (
    <>
    <Cabecalho />
    <Container>
      <Titulo>Área Administrativa</Titulo>
    </Container>
    </>
  );
}

export default App;
