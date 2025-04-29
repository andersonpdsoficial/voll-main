import './App.css';
import Cabecalho from './components/cabecalho';
import Container from './components/Container';
import Titulo from '../src/components/Titulo/index';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import useDadosConsulta from './useDadosConsulta';
import Grafico from './components/grafico';
import useDadosProfissional from './useDadosProfissional';

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();
  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição");
  }


  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela consultas={consultas} />
        <Grafico consultas={consultas} profissionais={profissionais}/>
      </Container>
      <Rodape />

    </>
  );
}

export default App;
