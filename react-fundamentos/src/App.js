import logo from './logo.svg';
import './App.css';

import "./components/FirstComponent";
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Conteiner';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <FirstComponent></FirstComponent>
      <AnotherComponent></AnotherComponent>
      <Images />
      <Hooks />
      <List />
      <RenderCond x={10} y={8}/>
      <Fragment />
      <Container>
        <h1>Este é filho container</h1>
      </Container>
    </div>
  );
}

export default App;
