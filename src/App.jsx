import styled from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';

const Container = styled.div`
  height: 100vh;
  background-color: white;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
    </Container>
  )
};

export default App;